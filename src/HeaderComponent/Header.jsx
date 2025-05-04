import React, {useState, useContext} from 'react'
import './Header.css'
import { NavList, BookAppLogo, DarkColor, LightColor , LigColor, DacColor} from '../List'
import { FaBars, FaGlobe, FaGlobeAfrica, FaMoon, FaSun, FaUser} from 'react-icons/fa'
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
            <div className="checkbox-wrapper-35">
            <input value="private" name="switch" id="switch" type="checkbox" className="switch" onChange={handleTheme}/>
              <label htmlFor="switch">
                  <span className="switch-x-text">This is </span>
                  <span className="switch-x-toggletext" onClick={handleTheme}>
                    <span className="switch-x-unchecked">
                        <span className="switch-x-hiddenlabel">Unchecked: </span><FaMoon/></span>
                        <span className="switch-x-checked">
                        <span className="switch-x-hiddenlabel">Checked: </span><FaSun/> </span>
                  </span>
            </label>
        </div>
            {/* <p onClick={handleTheme}>{isDarkMood ? <FaMoon/> : <FaSun/>}</p> */}
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