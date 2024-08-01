import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { toggleTodosAction } from "../features/todo/todoSlice";

export default function useToggleItem() {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const toggleItem = async (_id) => {
        setLoading(true);
        try {
            const res = await fetch(`http://localhost:8000/api/v1/todos/${_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    toggle: true
                }),
            });
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.message);
            }

            dispatch(toggleTodosAction(_id));
            toast.success('Toggled completion');
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, toggleItem }
}
