import React, { useState } from 'react'
import Modal from '../components/Modal'

import NoteCard from '../components/NoteCard'
import { useOutletContext } from 'react-router-dom'
import EditModal from '../components/EditModal'

export default function Notes() {
  const { notes, addNote, deleteNote, editNote } = useOutletContext()
  const [show, setShow] = useState(false)
  const [note, setNote] = useState(null)

  function openEditModal(note) {
    setShow(true)
    setNote(note)
  }

  function closeEditModal() {
    setNote(null)
    setShow(false)
  }

  return (
    <div className='p-4'>
      <Modal addNote={addNote} />
      <EditModal
        show={show}
        note={note}
        editNote={editNote}
        closeEditModal={closeEditModal}
      />
      <div className='grid grid-cols-5 gap-4 mt-4'>
        {notes.map((note) => {
          return (
            <NoteCard
              note={note}
              deleteNote={deleteNote}
              openEditModal={openEditModal}
            />
          )
        })}
      </div>
    </div>
  )
}
