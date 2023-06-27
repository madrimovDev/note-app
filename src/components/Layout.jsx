import React from 'react'
import { Link, useLocation, Outlet } from 'react-router-dom'
import {
  FormOutlined,
  FileZipOutlined,
  SearchOutlined,
} from '@ant-design/icons'

import Modal from './Modal'

function Sidebar() {
  const { pathname } = useLocation()
  return (
    <aside className='w-[200px] h-full border-r'>
      <ul className='p-2'>
        <li>
          <Link
            to='/'
            className={`p-2 ${
              pathname === '/' ? 'bg-sky-500 text-white' : ''
            }  flex gap-2 items-center font-semibold rounded-lg transition-colors`}
          >
            <FormOutlined />
            Notes
          </Link>
        </li>
        <li>
          <Link
            to='archive'
            className={`p-2 ${
              pathname === '/archive' ? 'bg-sky-500 text-white' : ''
            }  flex gap-2 items-center font-semibold rounded-lg transition-colors`}
          >
            <FileZipOutlined />
            Archive
          </Link>
        </li>
      </ul>
    </aside>
  )
}

function Navbar() {
  return (
    <nav className='p-4 z-10 relative bg-stone-100 flex justify-between items-center'>
      <a href='/' className='text-xl font-bold text-stone-700'>
        Diyorbek's <span className='text-sky-500'>Notes</span>
      </a>
      <Modal />
      <form className='bg-white rounded-lg p-2 flex items-center gap-2 w-[300px]'>
        <input
          type='search'
          name='search'
          className='outline-none w-full'
          placeholder='Search Notes...'
        />
        <button>
          <SearchOutlined />
        </button>
      </form>
    </nav>
  )
}

export default function Layout() {
  return (
    <div className='h-screen flex'>
      <Sidebar />
      <div className='w-full'>
        <Navbar />
        <Outlet />
      </div>
    </div>
  )
}
