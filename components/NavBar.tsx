import Link from 'next/link'
import React from 'react'
import {BsFillCartFill} from 'react-icons/bs'
type Props = {}

const NavBar = (props: Props) => {
  return (
    <div className='bg-white sticky top-0 shadow-xl mb-3  p-4 flex items-center justify-between'>
        <div className='flex space-x-3 ml-2'>
            <Link href='/'>Home</Link>
            <Link href='/store'>Store</Link>
            <Link href='/'>About</Link>
        </div>
        <div className='relative'>
            <BsFillCartFill className='mr-3' size={30} />
            <div className='absolute top-6 left-5'>

            <p className='text-red-600 bg-blue-600 rounded-full h-6 w-6 text-center '>1</p>
            </div>
        </div>
    </div>
  )
}

export default NavBar