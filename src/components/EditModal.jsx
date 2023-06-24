import { CloseOutlined } from '@ant-design/icons'
import React from 'react'

export default function EditModal({ show, note, editNote, closeEditModal }) {

  function submitHandler(event){
    event.preventDefault()
    const titleInput = event.target.title
    const descInput = event.target.description

    if (titleInput.value === '' || !titleInput.value.trim()) {
      titleInput.classList.add('border-red-400')
      return
    }
    if (descInput.value === '' || !descInput.value.trim()) {
      descInput.classList.add('border-red-400')
      return
    }

    editNote(note.id, titleInput.value, descInput.value)
    titleInput.classList.remove('border-red-400')
    descInput.classList.remove('border-red-400')
    event.target.reset()
  }

  if (!show) {
    return null
  }

  return (
    <div className='fixed top-0 left-0 h-screen w-full bg-black/50 z-10'>
      <form onSubmit={submitHandler} className='absolute top-20 left-1/2 -translate-x-1/2 max-w-sm w-full bg-white rounded-lg p-4 flex flex-col gap-4'>
        <button
          type='button'
          onClick={() => closeEditModal()}
          className='absolute top-4 right-4'
        >
          <CloseOutlined />
        </button>
        <h2 className='text-lg font-semibold'>Edit Yout Notes</h2>
        <div className='flex flex-col'>
          <label htmlFor='title'>Title</label>
          <input
            defaultValue={note.title}
            className='border rounded-md p-2 outline-none'
            type='text'
            name='title'
            id='title'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='desc'>Description</label>
          <textarea
            defaultValue={note.description}
            className='border rounded-md p-2 outline-none'
            type='text'
            name='description'
            id='description'
          />
        </div>
        <button className='px-4 py-2 bg-teal-400 block w-full rounded-md text-white font-bold'>
          Edit
        </button>
      </form>
    </div>
  )
}
