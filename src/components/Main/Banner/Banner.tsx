import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='relative h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[600px]'>
      <Image
      src='https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      alt='banner image'
      fill
      className='object-cover object-center' 
        />
        <div className='absolute top-1/2 w-full text-center'>
        <p className='text-sm sm:text-lg text-gray-900'>Not Sure Where To Go? No Worries!.</p>
        <button
          type='button'
          className='text-[#FD5B61] bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'
        >
          I am flexible
        </button>
      </div>
    </div>
  )
}

export default Banner