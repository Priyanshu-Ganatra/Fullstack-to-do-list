import './App.css'
import { useState } from 'react';
import TodoList from './components/TodoList';
import useAddTodo from '../hooks/useAddTodo';
import ToggleAndOptions from './components/ToggleAndOptions';

export default function App() {
  const [text, setText] = useState('');
  const [type, setType] = useState('pending');

  const { loading: isAdding, addTodo } = useAddTodo();

  const handleAddTodo = () => {
    if (text === '') return;
    addTodo(text)
    setText('')
  }

  return (
    // Main div
    <div className="w-screen min-h-screen overflow-hidden bg-background font-segoe select-none">
      {/* All components div */}
      <div className='flex flex-col items-center'>
        {/* Heading */}
        <div className="heading text-center text-[62px] font-semibold tracking-[0%] mt-14">
          <span className="bg-gradient-to-b from-zinc-100 to-cyan-400 bg-clip-text text-transparent">
            Fullstack Todo List
          </span>
        </div>

        {/* Add todo */}
        <div className='flex justify-center gap-2 mt-7'>
          <input type="text" placeholder="Add your next todo here..." className="input input-bordered w-fit max-w-xs bg-[#3D3838]" value={text} onChange={(e) => setText(e.target.value)} />
          <button className="btn btn-neutral bg-[#2EDCBD] text-white hover:bg-[#42FF00] disabled:bg-green-500 disabled:text-white" disabled={isAdding} onClick={handleAddTodo}>
            {isAdding ? 'Adding...' : 'Add'}
          </button>
        </div>

        {/* Toggle buttons and options */}
        <ToggleAndOptions type={type} setType={setType}/>

        {/* Todo list */}
        <div className="list mt-7 w-[80%] md:w-8/12">
          <TodoList type={type} />
        </div>
      </div>
    </div>
  )
}