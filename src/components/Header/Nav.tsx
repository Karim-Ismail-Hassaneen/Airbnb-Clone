import React from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";

const Nav = () => {
    return (
        <div className='flex space-x-4 items-center justify-end text-gray-500'>
            <div className='flex space-x-2 border-2 py-1 px-4 rounded-full'>
                <FaBarsStaggered className='h-8' />
                <FaRegUserCircle className='h-8' />
            </div>
        </div>
    )
}

export default Nav