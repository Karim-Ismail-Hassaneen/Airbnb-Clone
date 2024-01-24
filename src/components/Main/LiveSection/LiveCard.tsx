import { LiveItem } from '@/types/dataTypes'
import Image from 'next/image'
import React from 'react'
type LiveCardData = LiveItem 
const LiveCard = ({img, title}: LiveCardData) => {
  return (
    <div  className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
        <div className='relative h-96 w-96 '>
            <Image className='rounded-lg' src={img} alt='LiveCard image' fill/>
        </div>
        <h3 className='text-2xl mt-3'>{title}</h3>
    </div>
  )
}

export default LiveCard