import React, { useContext, useState } from 'react'
import './App.css'
import Header from './HeaderComponent/Header'
import Main from './MainComponent/Main'
import ThemeProvider from './ThemeProvider'
import Services from './ServiesComponent/Services'
import OurServices from './OurServicesComponent/OurServices'
import Section from './SectionComponent/Section'
import Footer from './FooterComponent/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './HomeComponent/Home'
import Login from './LoginComponent/Login'
import Registration from './RegistrationComponet/Registration'
const App = () => {
  return (
      <ThemeProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Registration' element={<Registration/>}/>
      </Routes>
    </ThemeProvider>
  )
}

export default App