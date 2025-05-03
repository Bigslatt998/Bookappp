import React, {useState, useContext} from 'react'
import './Main.css'
import { ThemeContext } from '../ThemeProvider'
import { DarkColor, LightColor, LigColor, DacColor } from '../List'
import { FaSearch, FaSearchLocation } from 'react-icons/fa'
import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const Main = () => {
  const location = <FaSearchLocation/>
      const {isDarkMood} = useContext(ThemeContext)
  
  return (
    <div className='MainContainer' style={{ color: isDarkMood ? LightColor: DarkColor }}>
                  <ToastContainer/>
        
        <div className="Main">
        <h1>Find Booking Services Anytime With Bookapp</h1>
        <div className="Find" style={{ color: isDarkMood ? LightColor: DarkColor }}>
          <div className="Location">
          <input placeholder='Search Location' style={{ color: isDarkMood ? 'white' : 'black'}}/>
          <span>{location}</span>
          </div>
          {/* <hr/> */}
          <div className="Services">
          <input placeholder='Search Services'  style={{ color: isDarkMood ? 'white' : 'black'}} />
          <span>{location}</span>
          </div>
          <div className="button">
          <button style={{background: isDarkMood ? LigColor : DacColor, color: isDarkMood ? 'white' : 'black' }}><i><FaSearch/></i>Find Now</button>
          

          </div>
        </div>
        </div>
    </div>
  )
}

export default Main