import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { markAllCompleteAction } from "../features/todo/todoSlice";

export default function useMarkAll() {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const markAll = async () => {
        setLoading(true);
        try {
            const res = await fetch(`http://localhost:8000/api/v1/todos`, {
                method: 'PATCH',
            });
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.message);
            }

            dispatch(markAllCompleteAction());
            toast.success('All marked completed');
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return { loading, markAll }
}
