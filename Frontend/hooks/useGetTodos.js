import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setTodosAction } from "../features/todo/todoSlice";
import { getTodos } from "../src/utils/api";

export default function useGetTodos() {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const fetchTodos = async () => {
        setLoading(true);
        try {
            const todos = await getTodos();
            dispatch(setTodosAction(todos));
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, fetchTodos };
}