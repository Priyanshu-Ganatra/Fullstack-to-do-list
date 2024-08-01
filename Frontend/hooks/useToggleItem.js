import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { toggleTodosAction } from "../features/todo/todoSlice";
import { toggleTodo } from "../src/utils/api";

export default function useToggleItem() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const toggleItem = async (_id) => {
    setLoading(true);
    try {
      await toggleTodo(_id);
      dispatch(toggleTodosAction(_id));
      toast.success('Toggled completion');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, toggleItem };
}