import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { editTodoAction } from "../features/todo/todoSlice";

export default function useUpdateItem() {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const editItem = async (_id, text) => {
        setLoading(true);
        try {
            const res = await fetch(`http://localhost:8000/api/v1/todos/${_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data: text
                }),
            });
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.message);
            }

            dispatch(editTodoAction({data: text, _id}));
            toast.success('Todo edited');
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, editItem }
}
