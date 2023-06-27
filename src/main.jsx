import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import NoteProvider from './context/NoteContext.jsx'
import EditModalProvider from './context/EditModalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NoteProvider>
        <EditModalProvider>
          <App />
        </EditModalProvider>
      </NoteProvider>
    </BrowserRouter>
  </React.StrictMode>
)
