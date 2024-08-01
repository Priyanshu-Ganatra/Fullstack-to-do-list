import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { editTodoAction } from "../features/todo/todoSlice";
import { updateTodo } from "../src/utils/api";

export default function useUpdateItem() {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const editItem = async (_id, text) => {
        setLoading(true);
        try {
            await updateTodo(_id, text);
            dispatch(editTodoAction({ data: text, _id }));
            toast.success('Todo edited');
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, editItem };
}