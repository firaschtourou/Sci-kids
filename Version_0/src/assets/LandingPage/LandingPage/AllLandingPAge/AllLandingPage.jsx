import React from 'react'

import Welcome from '../Welcome/Welcome'
import Discover from '../Discover/Discover'
import Classes from '../Classes/Classes'
import SDGS from '../SDGS/SDGS'
import Partners from '../Partner/Partners'
import GetInTouch from '../GetinTouch/GetinTouch'
import Footer from '../Footer/Footer'
import Gallery from '../Gallery/Gallery'
import Head from './Group 1.png'
import Header from '../Header/Header'
import ClientsSection from '../Clients/ClientsSection'
import './alllandingpage.css'



const AllLandingPage = () => {
  return (
    <div className='Contain'>
      <Header />
      <Welcome />

      <Discover />
      <Classes />
      <div className='sdgs'>
        <SDGS />
      </div>

      <Partners />

      <ClientsSection />
      <Gallery />
      <GetInTouch />
      <Footer />
    </div>
  )
}

export default AllLandingPage
