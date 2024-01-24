import React from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
const Nav = () => {
    return (
        <div className='flex space-x-4 items-center justify-end text-gray-500'>
                <p className='hidden md:inline cursor-pointer'>Become a host</p>
                <AiOutlineGlobal className='mx-2 h-8 cursor-pointer' />
            <div className='flex space-x-2 border-2 py-1 px-4 rounded-full'>
                <FaBarsStaggered className='h-8' />
                <FaRegUserCircle className='h-8' />
            </div>
        </div>
    )
}

export default Nav