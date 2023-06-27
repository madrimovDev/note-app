import React, { useContext } from 'react'
import { useState } from 'react'
import { CloseOutlined } from '@ant-design/icons'
import { AnimatePresence, motion } from 'framer-motion'
import { NoteContext } from '../context/NoteContext'

export default function Modal() {
  const { addNote } = useContext(NoteContext)
  const [show, setShow] = useState(false)

  function submitHandler(event) {
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

    addNote(titleInput.value, descInput.value)
    titleInput.classList.remove('border-red-400')
    descInput.classList.remove('border-red-400')
    event.target.reset()
  }

  return (
    <>
      <button
        onClick={() => setShow(true)}
        className='px-4 py-2 bg-sky-500 text-white font-bold rounded-lg'
      >
        Create Note
      </button>
      <AnimatePresence mode='wait'>
        {show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='h-screen w-full bg-black/50 fixed top-0 left-0 z-10'
          >
            <motion.div
              initial={{ y: -100, x: '-50%', opacity: 0 }}
              animate={{ y: 0, x: '-50%', opacity: 1 }}
              exit={{ y: -100, x: '-50%', opacity: 0 }}
              className='max-w-sm w-full bg-white rounded-lg p-4 absolute left-1/2 top-20 -translate-x-1/2'
            >
              <button
                onClick={() => setShow(false)}
                className='absolute top-4 right-4'
              >
                <CloseOutlined />
              </button>
              <form onSubmit={submitHandler} className='flex flex-col gap-4'>
                <h2 className='text-lg font-semibold'>Create Yout Notes</h2>
                <div className='flex flex-col'>
                  <label htmlFor='title'>Title</label>
                  <input
                    className='border rounded-md p-2 outline-none'
                    type='text'
                    name='title'
                    id='title'
                  />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='desc'>Description</label>
                  <textarea
                    className='border rounded-md p-2 outline-none'
                    type='text'
                    name='description'
                    id='description'
                  />
                </div>
                <button className='px-4 py-2 bg-teal-400 block w-full rounded-md text-white font-bold'>
                  Create
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
