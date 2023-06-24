import React, { useState } from 'react'
import Modal from '../components/Modal'

import NoteCard from '../components/NoteCard'
import { useOutletContext } from 'react-router-dom'
import EditModal from '../components/EditModal'
import { AnimatePresence } from 'framer-motion'

import {motion} from 'framer-motion'

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
    <motion.div initial={{y: -20, opacity: 0}} animate={{y: 0, opacity: 1}} exit={{y: -20, opacity: 0}} className='p-4'>
      <Modal addNote={addNote} />
      <EditModal
        show={show}
        note={note}
        editNote={editNote}
        closeEditModal={closeEditModal}
      />
      <div className='grid grid-cols-5 gap-4 mt-4'>
        <AnimatePresence>
          {notes.map((note) => {
            return (
              <NoteCard
                key={note.id}
                note={note}
                deleteNote={deleteNote}
                openEditModal={openEditModal}
              />
            )
          })}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
