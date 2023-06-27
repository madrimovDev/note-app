import { useState } from 'react'
import { createContext } from 'react'

export const EditModalContext = createContext(null)

export default function EditModalProvider({ children }) {
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
    <EditModalContext.Provider
      value={{
        show,
        openEditModal,
        closeEditModal,
        note,
      }}
    >
      {children}
    </EditModalContext.Provider>
  )
}
