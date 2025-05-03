import React, {useState, useContext} from 'react'
import './Header.css'
import { NavList, BookAppLogo, DarkColor, LightColor , LigColor, DacColor} from '../List'
import { FaBars, FaGlobe, FaGlobeAfrica, FaUser} from 'react-icons/fa'
import MenueOpen from './MenueOpenComponent/MenueOpen'
import { ThemeContext } from '../ThemeProvider'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const {isDarkMood, handleTheme, isMenue, HandleMeneOpen, HomeRef,scrollHome,} = useContext(ThemeContext)
    const navigate = useNavigate()
  const faaa = <FaGlobe/>
  const Bar = <FaBars/>
  const handleNavigate = () => {
    navigate('/Login')
  }
  
  return (
    <div ref={HomeRef} id='Home'  className='HeaderContainer'style={{ color: isDarkMood ? LightColor : DarkColor, background: isDarkMood ? DarkColor: LightColor }}>
        <div  className="Header" style={{ background: isDarkMood ? DarkColor: LightColor }}>
          <div className="Logo">
          <img src={BookAppLogo}/>
          </div>
          <nav>
            <ul>{NavList.map((Content) => (
                <li key={Content.id}>{Content.Link}</li>))}</ul>
          </nav>
          <div className="Login">
            <div className="Globe">
              <i>{faaa}</i>
              <p>Eng</p>
            </div>
            <button onClick={handleNavigate} style={{background: isDarkMood ? LigColor : DacColor, color: isDarkMood ? 'white' : 'black' }}>Login</button>
            <p onClick={handleTheme}>Change</p>
          </div>
          <i className='Bar' onClick={HandleMeneOpen}
          style={{background: isDarkMood ? LigColor : DacColor, color: isDarkMood ? 'white' : 'black' }}>{Bar}</i>
        </div>
        <MenueOpen isMenue={isMenue} HandleMeneOpen={HandleMeneOpen}/>
      
    </div>
  )
}

export default Header

// style={{background: isDarkMood ? LigColor : 'red' }}