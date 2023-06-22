import React from 'react'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import Notes from './pages/Notes'
import Archive from './pages/Archive'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Notes />} />
          <Route path='archive' element={<Archive />} />
        </Route>
      </Routes>
    </>
  )
}
