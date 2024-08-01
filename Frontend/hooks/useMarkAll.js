import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { markAllCompleteAction } from "../features/todo/todoSlice";
import { markAllTodos } from "../src/utils/api";

export default function useMarkAll() {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const markAll = async () => {
        setLoading(true);
        try {
            await markAllTodos();
            dispatch(markAllCompleteAction());
            toast.success('All marked completed');
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, markAll };
}