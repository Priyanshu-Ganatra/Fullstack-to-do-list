/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import useGetTodos from "../../hooks/useGetTodos";
import TodoItem from "./TodoItem"
import { useSelector } from "react-redux";

const TodoList = ({ type }) => {
    const { loading, getTodos } = useGetTodos();
    const storeTodos = useSelector(state => state);
    const [count, setCount] = useState(0);

    useEffect(() => {
        getTodos();
    }, []);

    useEffect(() => {
        const filteredTodos = storeTodos.filter(todo => matchType(todo.completed));
        setCount(filteredTodos.length);
    }, [storeTodos, type]);

    const matchType = (trueOrFalse) => {
        if (type === 'completed') {
            return trueOrFalse;
        } else {
            return !trueOrFalse;
        }
    }

    if (loading) return <div className="flex justify-center"><span className="loading loading-dots loading-lg"></span></div>

    return (
        <div className="flex flex-col gap-4 mb-10">
            {storeTodos.map(todo => (
                (matchType(todo.completed)) && <TodoItem key={todo._id} _id={todo._id} type={type} text={todo.data} />
            ))}
            {count === 0 && <div className="text-center text-[#C4C4C4]">No {type} todos, please add one</div>}
        </div>
    )
}

export default TodoList
