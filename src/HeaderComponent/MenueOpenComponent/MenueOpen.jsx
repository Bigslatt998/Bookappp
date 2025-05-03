import React, {useContext} from 'react'
import './MenueOpen.css'
import { NavList, BookAppLogo, DarkColor, LightColor , LigColor, DacColor} from '../../List'
import { ThemeContext } from '../../ThemeProvider'
import { FaGlobe } from 'react-icons/fa'
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
        <p onClick={handleTheme}>Change</p>

    </div>
  )
}

export default MenueOpen