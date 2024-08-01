// src/hooks/useAddTodo.js
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../features/todo/todoSlice";
import { addTodo as addTodoApi } from "../src/utils/api";

export default function useAddTodo() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const addTodo = async (text) => {
    setLoading(true);
    try {
      const data = await addTodoApi(text);
      dispatch(addTodoAction(data));
      toast.success('Todo added');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, addTodo };
}
