import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../features/todo/todoSlice";

export default function useAddTodo() {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const addTodo = async (text) => {
        setLoading(true);
        try {
            const res = await fetch(`http://localhost:8000/api/v1/todos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text }),
            });
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.message);
            }

            dispatch(addTodoAction(data));
            toast.success('Todo added');
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, addTodo };
}
