import React, { useContext } from 'react'
import { EditFilled, DeleteFilled } from '@ant-design/icons'
import { motion } from 'framer-motion'
import { EditModalContext } from '../context/EditModalContext'
import { NoteContext } from '../context/NoteContext'

export default function NoteCard({ note }) {
  const { openEditModal } = useContext(EditModalContext)
  const { deleteNote } = useContext(NoteContext)
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      className='border p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all bg-yellow-50'
    >
      <h4 className='text-2xl font-bold'>{note.title}</h4>
      <p className='my-4 text-gray-600'>{note.description}</p>
      <div className='flex justify-end gap-2'>
        <button
          onClick={() => openEditModal(note)}
          className='w-7 aspect-square bg-sky-500 inline-grid place-items-center text-white rounded-lg'
        >
          <EditFilled />
        </button>
        <button
          onClick={() => deleteNote(note.id)}
          className='w-7 aspect-square bg-red-500 inline-grid place-items-center text-white rounded-lg'
        >
          <DeleteFilled />
        </button>
      </div>
    </motion.div>
  )
}
// git clone https://github.com/madrimovDev/note-app.git
