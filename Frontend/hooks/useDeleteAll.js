import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setTodosAction } from "../features/todo/todoSlice";

export default function useDeleteAll() {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const removeAllTodos = async () => {
        setLoading(true);
        try {
            const res = await fetch(`http://localhost:8000/api/v1/todos/`, {
                method: 'DELETE',
            });
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.message);
            }

            dispatch(setTodosAction([]));
            toast.success('All todos deleted');
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return { loading, removeAllTodos }
}
