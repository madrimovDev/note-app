import { useState } from 'react'
import { createContext } from 'react'

export const NoteContext = createContext(null)

export default function NoteProvider({ children }) {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Note Object Title',
      description: 'Note Object Desc',
    },
  ])

  function addNote(title, description) {
    const newNote = {
      id: Date.now(),
      title,
      description,
    }
    setNotes([...notes, newNote])
  }

  function deleteNote(id) {
    const filtredNotes = notes.filter((note) => note.id !== id)
    setNotes(filtredNotes)
  }

  function editNote(id, title, description) {
    const mappedNotes = notes.map((note) => {
      if (note.id === id) {
        return {
          id: note.id,
          title,
          description,
        }
      } else {
        return note
      }
    })
    setNotes(mappedNotes)
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {children}
    </NoteContext.Provider>
  )
}
