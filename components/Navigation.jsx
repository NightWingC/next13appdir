import Link from 'next/link'
import React from 'react'

export const Navigation = () => {
  return (
    <div className='w-full bg-slate-800 mb-10'>
        <ul className='w-full flex justify-center text-white'>
            <li className='p-4 hover:text-slate-400'>
                <Link href='/'>Home</Link>
            </li>
            <li className='p-4 hover:text-slate-400'>
                <Link href='/about'>About</Link>
            </li>
            <li className='p-4 hover:text-slate-400'>
                <Link href='/service'>Service</Link>
            </li>
        </ul>
    </div>
  )
}
