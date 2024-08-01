/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css'
import TodoList from './components/TodoList';
import ToggleButton from './components/ToggleButton'
import { IoMdArrowDropdown } from "react-icons/io";
import useAddTodo from '../hooks/useAddTodo';
import useDeleteAll from '../hooks/useDeleteAll';
import useMarkAll from '../hooks/useMarkAll';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';

export default function App() {
  const [type, setType] = useState('pending');
  const [text, setText] = useState('');
  const storeTodos = useSelector(state => state);
  const { loading: isAdding, addTodo } = useAddTodo();
  const { loading: isRemovingAll, removeAllTodos } = useDeleteAll()
  const { loading: isMarkingAll, markAll } = useMarkAll();

  const handleTypeChange = (newType) => {
    setType(newType);
  }

  const handleAddTodo = () => {
    if (text === '') return;
    addTodo(text)
    setText('')
  }

  const handleRemoveAll = () => {
    if (storeTodos.length === 0) {
      toast.error('Add a todo first');
      return
    }
    removeAllTodos()
  }

  const handleMarkAll = () => {
    if (storeTodos.length === 0) {
      toast.error('Add a todo first');
      return
    }
    markAll()
  }

  return (
    <div className="w-screen min-h-screen overflow-hidden bg-background font-segoe select-none">
      <div className='flex flex-col items-center'>
        {/* heading */}
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
        <div className='flex gap-4 mt-7 items-center'>
          <span onClick={() => handleTypeChange('completed')}>
            <ToggleButton
              text={'Completed'}
              textColor={'#1FC326'}
              isActive={type === 'completed'}
              activeColor='#EAD9D9'
              inactiveColor='#3D3838'
              gradientToColor='#42FF00'
            />
          </span>
          <span onClick={() => handleTypeChange('pending')}>
            <ToggleButton
              text={'Pending'}
              textColor={'#FF0000'}
              isActive={type === 'pending'}
              activeColor='#EAD9D9'
              inactiveColor='#3D3838'
              gradientToColor='#FF0000'
            />
          </span>
          <div className="dropdown">
            <div tabIndex={0} role="button">
              <button className='rounded-lg p-2 h-9 bg-[#3D3838] text-white'>
                <IoMdArrowDropdown />
              </button>
            </div>
            <ul tabIndex={0} className="dropdown-content -left-[120%] menu bg-base-100 rounded-box z-[1] mt-4 w-28 p-2 shadow">
              {type === 'pending' &&
                <li>
                  <button disabled={isMarkingAll} onClick={handleMarkAll}>
                    {isMarkingAll ? <span className="loading loading-dots loading-sm"></span> : 'Mark all'}
                  </button>
                </li>}
              <li>
                <button disabled={isRemovingAll} onClick={handleRemoveAll}>
                  {isRemovingAll ? <span className="loading loading-dots loading-sm"></span> : 'Delete all'}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Todo list */}
        <div className="list mt-7 w-[80%] md:w-8/12">
          <TodoList type={type} />
        </div>
      </div>
    </div>
  )
}