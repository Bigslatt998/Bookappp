import React, {useContext} from 'react'
import './MenueOpen.css'
import { NavList, BookAppLogo, DarkColor, LightColor , LigColor, DacColor} from '../../List'
import { ThemeContext } from '../../ThemeProvider'
import { FaGlobe, FaMoon, FaSun } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const MenueOpen = ({isMenue, HandleMeneOpen}) => {
    const {isDarkMood, handleTheme} = useContext(ThemeContext)
    const navigate = useNavigate()
    const faaa = <FaGlobe/>
    // const faaa = <Fa/>
    const handleNavigate = () => {
      navigate('/Login')
    }
  return (
    <div className={`${'MenueOpenContainer'} 
                    ${isMenue ? 'Active' : null}`} style={{  color: isDarkMood ? LightColor: DarkColor , 
                    backgroundColor: isDarkMood ? DarkColor: LightColor }}
                    >
            <div className="List">
          {NavList.map((content) => (
            <li key={content.id}  style={{  borderBottom: isDarkMood ? '.1px solid rgb(100, 99, 99) ' : '.1px solid rgb(190, 188, 188)' , 
           }}>{content.Link}</li>
          ))}
        </div>
        <div className="Logog">
        <div className="Globe">
              <i>{faaa}</i>
              <p>Eng</p>
            </div>
            <button onClick={handleNavigate} style={{background: isDarkMood ? LigColor : DacColor, color: isDarkMood ? 'white' : 'black' }}>Login</button>
        </div>
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
        {/* // <p onClick={handleTheme}>Change</p> */}

    </div>
  )
}

export default MenueOpen