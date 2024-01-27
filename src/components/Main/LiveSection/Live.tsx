import { LiveData } from '@/types/dataTypes'
import { getLiveData } from '@/utils/api'
import React from 'react'
import LiveCard from './LiveCard'


const Live = async () => {
    const liveData: LiveData = await getLiveData()
    return (
        <section className='pt-6'>
            <div className='container'>
                <h1 className='text-4xl font-semibold mb-5'>Live Anywhere</h1>
                <div className='flex space-x-5 overflow-scroll rounded-md p-3 -ml-3 no-scrollbar'>
                    {liveData.map(item => (
                        <div key={item.title}>
                            <LiveCard img={item.img} title={item.title} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Live