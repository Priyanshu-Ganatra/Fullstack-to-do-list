import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setTodosAction } from "../features/todo/todoSlice";
import { deleteAllTodos } from "../src/utils/api";

export default function useDeleteAll() {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const removeAllTodos = async () => {
        setLoading(true);
        try {
            await deleteAllTodos();
            dispatch(setTodosAction([]));
            toast.success('All todos deleted');
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, removeAllTodos };
}