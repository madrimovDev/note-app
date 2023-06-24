import React from 'react'
import Layout from './components/Layout'
import { Route, Routes, useLocation } from 'react-router-dom'
import Notes from './pages/Notes'
import Archive from './pages/Archive'
import { AnimatePresence } from 'framer-motion'

export default function App() {
  const location = useLocation()
  return (
    <>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Notes />} />
            <Route path='archive' element={<Archive />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  )
}
