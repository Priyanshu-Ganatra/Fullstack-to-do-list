/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { IoIosCheckbox } from "react-icons/io";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import useDeleteItem from "../../hooks/useDeleteItem";
import useToggleItem from "../../hooks/useToggleItem";
import { useState } from "react";
import useUpdateItem from "../../hooks/useUpdateItem";

const TodoItem = ({ text, type, _id }) => {
    const { loading: isDeleting, removeTodo } = useDeleteItem();
    const { loading: isToggling, toggleItem } = useToggleItem()
    const { loading: isEditing, editItem } = useUpdateItem()
    const [editText, setEditText] = useState(text)

    const handleDelete = () => {
        removeTodo(_id)
    }

    const handleToggle = () => {
        toggleItem(_id)
    }

    const handleEdit = () => {
        if(editText === '') return
        editItem(_id, editText)
        document.getElementById('my_modal_2').close()
    }

    return (
        <div className="bg-[#3D3838] rounded-lg h-12 flex justify-between">
            <div className="left flex p-3 ml-1 gap-3 text-white w-[64%] md:w-[80%]">
                {type === 'completed' ?
                    <span className="pt-1 hover:cursor-pointer scale-150 text-[#42FF00]">
                        {isToggling ? <span className="loading loading-dots loading-xs"></span> : <IoIosCheckbox onClick={handleToggle} />}
                    </span>
                    :
                    <span className="pt-1 hover:cursor-pointer scale-150">
                        {isToggling ? <span className="loading loading-dots loading-xs"></span> : <MdOutlineCheckBoxOutlineBlank onClick={handleToggle} />}
                    </span>
                }
                <span className="hover:cursor-pointer w-[100%]" title={text} onClick={handleToggle}>
                    <p className="truncate">
                        {text}
                    </p>
                </span>
            </div>
            <div className="right flex p-4 gap-3 text-white">
                <MdOutlineModeEdit onClick={() => document.getElementById('my_modal_2').showModal()} className="hover:cursor-pointer hover:scale-150 hover:text-[#2EDCBD]" />
                <dialog id="my_modal_2" className="modal">
                    <div className="modal-box w-80">
                        <h3 className="font-bold text-l">Edit todo</h3>
                        <div className="flex mt-4">
                            <textarea className="textarea w-full" placeholder="Bio" onChange={(e) => setEditText(e.target.value)} value={editText}>
                            </textarea>
                        </div>
                        <div className="flex justify-end w-full">
                            <button disabled={isEditing} onClick={handleEdit} className="mt-4 btn btn-neutral bg-[#2EDCBD] text-white hover:bg-[#42FF00] disabled:bg-green-500 disabled:text-white">
                                {isEditing ? 'Editing...' : 'Edit'}
                            </button>
                        </div>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
                {isDeleting ? <span className="loading loading-dots loading-xs"></span>
                    :
                    <RiDeleteBin6Line className="hover:cursor-pointer hover:scale-150 hover:text-red-500" onClick={handleDelete} />
                }
            </div>
        </div>
    )
}

export default TodoItem