import React from 'react'
import Banner from './Banner/Banner'
import Explore from './ExploreSection/Explore'
import Live from './LiveSection/Live'
import Greatest from './GreatestSection/Greatest'
import Footer from './Footer/Footer'

const Main = () => {
  return (
    <div>
        <Banner />
        <Explore />
        <Live />
        <Greatest />
        <Footer />
    </div>
  )
}

export default Main