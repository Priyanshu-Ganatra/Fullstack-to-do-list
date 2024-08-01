import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { removeTodoAction } from "../features/todo/todoSlice";
import { deleteTodo } from "../src/utils/api";

export default function useDeleteItem() {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const removeTodo = async (_id) => {
        setLoading(true);
        try {
            await deleteTodo(_id);
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