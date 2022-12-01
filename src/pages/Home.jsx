import React from 'react'
import Footer from '../components/Footer'
import GetStarted from '../components/GetStarted'
import Globe from '../components/Globe'
import Hero from '../components/Hero'
import Platform from '../components/Platform'
import Reason from '../components/Reason'
import Sponsors from '../components/Sponsors'

const Home = () => {
  return (
    <div>
        <Hero />
        <Sponsors />
        <Platform />
        <Reason />
        <Globe />
        <GetStarted />
        <Footer />
    </div>
  )
}

export default Home