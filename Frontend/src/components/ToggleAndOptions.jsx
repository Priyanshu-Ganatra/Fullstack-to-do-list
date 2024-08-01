/* eslint-disable react/prop-types */
import useDeleteAll from '../../hooks/useDeleteAll';
import useMarkAll from '../../hooks/useMarkAll';
import ToggleButton from './ToggleButton'
import { IoMdArrowDropdown } from "react-icons/io";
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';

const ToggleAndOptions = ({ type, setType }) => {
    const { loading: isRemovingAll, removeAllTodos } = useDeleteAll()
    const { loading: isMarkingAll, markAll } = useMarkAll();
    const storeTodos = useSelector(state => state);

    const handleTypeChange = (newType) => {
        setType(newType);
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
    )
}

export default ToggleAndOptions