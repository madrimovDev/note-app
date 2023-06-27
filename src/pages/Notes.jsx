import React, { useContext, useState } from 'react'


import NoteCard from '../components/NoteCard'
import EditModal from '../components/EditModal'
import { AnimatePresence } from 'framer-motion'

import {motion} from 'framer-motion'
import { NoteContext } from '../context/NoteContext'

export default function Notes() {
  const { notes } = useContext(NoteContext)
 
  return (
    <motion.div initial={{y: -20, opacity: 0}} animate={{y: 0, opacity: 1}} exit={{y: -20, opacity: 0}} className='p-4'>
      <EditModal/>
      <div className='grid grid-cols-5 gap-4 mt-4'>
        <AnimatePresence>
          {notes.map((note) => {
            return (
              <NoteCard
                key={note.id}
                note={note}
              />
            )
          })}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
