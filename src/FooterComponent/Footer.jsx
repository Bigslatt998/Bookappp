import React, {useState, useContext}  from 'react'
import './Footer.css'
import { ThemeContext } from '../ThemeProvider'
import { DarkColor, LightColor, LigColor, DacColor } from '../List'
import { FaArrowUp, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa'
import { BookAppLogo, NavList } from '../List'
const Footer = () => {
    const {isDarkMood, scrollHome} = useContext(ThemeContext)
    
    return (
        <div className='FooterContainer' style={{ color: isDarkMood ? LightColor: DarkColor, background: isDarkMood ? 'rgb(7, 5, 5)'  : 'rgb(250, 240, 242)'}}>
            <footer >
            <div className="Top" style={{ color: isDarkMood ? LightColor: DarkColor }} onClick={scrollHome}  >
                < a href='#Home'><FaArrowUp/></a>
            </div>

            <div className="Other">
                <div className="IMG">
                    <div/>
                    <img src={BookAppLogo}/>
                    <div/>
                </div>
                <div className="Texthyh">
                    <div className="mailll">
                    <p>live@example.com</p>
                    <p>+999 22 33 4444</p>
                    </div>
                    <div className="Socials">
                        <i style={{ color: isDarkMood ? LightColor: DarkColor, background: isDarkMood ? 'rgb(19, 14, 14)'  : 'rgb(253, 232, 236)'}}><FaInstagram/></i>
                        <i style={{ color: isDarkMood ? LightColor: DarkColor, background: isDarkMood ? 'rgb(19, 14, 14)'  : 'rgb(253, 232, 236)'}}><FaTiktok/></i>
                        <i style={{ color: isDarkMood ? LightColor: DarkColor, background: isDarkMood ? 'rgb(19, 14, 14)'  : 'rgb(253, 232, 236)'}}><FaTwitter/></i>
                        <i style={{ color: isDarkMood ? LightColor: DarkColor, background: isDarkMood ? 'rgb(19, 14, 14)'  : 'rgb(253, 232, 236)'}}><FaYoutube/></i>
                    </div>
                    <div className="Email">
                        <input style={{color: isDarkMood ? 'white' : 'black'}} placeholder='Enter email here...'/>
                        <button style={{background: isDarkMood ? LigColor : DacColor, color: isDarkMood ? 'white' : 'black' }}>Find Now</button>
                    </div>
                    <nav>
                        <ul>
                            {NavList.map((Content) => (
                                <li key={Content.id}>{Content.Link}</li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
            </footer>
        </div>
    )
}

export default Footer