import React, { useContext, useState } from 'react'
import './Home.css'
import Header from '../HeaderComponent/Header'
import Main from '../MainComponent/Main'
import ThemeProvider from '../ThemeProvider'
import Services from '../ServiesComponent/Services'
import OurServices from '../OurServicesComponent/OurServices'
import Section from '../SectionComponent/Section'
import Footer from '../FooterComponent/Footer'

const Home = () => {
  return (
    <div className='Home'>
        <Header/>
        <Main/>
        <Services/>
        <OurServices/>
        <Section/>
        <Footer/>
    </div>
  )
}

export default Home