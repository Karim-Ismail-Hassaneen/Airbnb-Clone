import React from 'react'
import { getExploreData } from '../../../utils/api'
import { ExploreData } from '../../../types/dataTypes'
import ExploreCard from './ExploreCard'
const Explore = async () => {
  const data: ExploreData = await getExploreData()
  return (
    <section className='pt-6'>
      <div className='container'>
        <h1 className='text-4xl font-semibold mb-5'>Explore Nearby</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {data.map(item => (
          <div key={item.location}>
            <ExploreCard img={item.img} location={item.location} distance={item.distance}/>
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}

export default Explore