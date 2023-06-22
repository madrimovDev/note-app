import React from 'react'
import { EditFilled, DeleteFilled } from '@ant-design/icons'

export default function NoteCard({ title, description }) {
  return (
    <div className='border p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all bg-yellow-50'>
      <h4 className='text-2xl font-bold'>{title}</h4>
      <p className='my-4 text-gray-600'>{description}</p>
      <div className='flex justify-end gap-2'>
        <button className='w-7 aspect-square bg-sky-500 inline-grid place-items-center text-white rounded-lg'>
          <EditFilled />
        </button>
        <button className='w-7 aspect-square bg-red-500 inline-grid place-items-center text-white rounded-lg'>
          <DeleteFilled />
        </button>
      </div>
    </div>
  )
}
