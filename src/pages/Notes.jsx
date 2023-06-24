import React from 'react'
import Modal from '../components/Modal'

import NoteCard from '../components/NoteCard'
import { useOutletContext } from 'react-router-dom'

export default function Notes() {
  const { notes, addNote, deleteNote } = useOutletContext()
  return (
    <div className='p-4'>
      <Modal addNote={addNote} />
      <div className='grid grid-cols-5 gap-4 mt-4'>
        {notes.map((note) => {
          return <NoteCard note={note} deleteNote={deleteNote} />
        })}
      </div>
    </div>
  )
}
