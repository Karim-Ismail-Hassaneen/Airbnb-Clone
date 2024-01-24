import React from 'react'
import { IoIosSearch } from "react-icons/io";
const Searchbar = () => {
  return (
    <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
        <input
          type='text'
          placeholder={'Start your search'}
          className='text-sm text-gray-600 placeholder-gray-400 flex-grow pl-5 bg-transparent outline-none'
        />
        <IoIosSearch  size={50} className='hidden md:inline-flex h-8 bg-red-400 p-2 text-white rounded-full cursor-pointer md:mx-2'/>
    </div>
  )
}

export default Searchbar