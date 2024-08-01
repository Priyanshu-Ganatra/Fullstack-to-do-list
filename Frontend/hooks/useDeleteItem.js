import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { removeTodoAction } from "../features/todo/todoSlice";

export default function useDeleteItem() {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const removeTodo = async (_id) => {
        setLoading(true);
        try {
            const res = await fetch(`http://localhost:8000/api/v1/todos/${_id}`, {
                method: 'DELETE',
            });
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.message);
            }

            dispatch(removeTodoAction(_id));
            toast.success('Todo deleted');
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, removeTodo };
}
