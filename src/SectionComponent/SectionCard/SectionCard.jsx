import React,{useContext, useState, useEffect} from 'react'
import { DarkColor, LightColor, LigColor, DacColor, OurServicesLIst} from '../../List'
import { ThemeContext } from '../../ThemeProvider'
import { FaHeart } from 'react-icons/fa'
import './SectionCard.css'

const SectionCard = ({Content, Liii, HandleLike}) => {
    const {isDarkMood, isBookBox,
                      setSelectedStaff, selectedShop, 
                      setSelectedShop, setIsBookBox, handleBookBox} = 
                      useContext(ThemeContext)
  return (
    <div key={Content.id} className="SectionBox" style={{ color: isDarkMood ? LightColor : DarkColor, 
                                background: isDarkMood ? DarkColor: LightColor, 
                                // border: isDarkMood ? '0.1px solid rgb(29, 29, 29)' : '0.1px solid rgb(230, 227, 227)'
                                 }}>
                        <div className="SectionIMG">
                            <img src={Content.IMG}/>
                        </div>
                            <div className="SectionBoxText">
                                <p>{Content.First}</p>
                                <p className={`${isDarkMood ? 'SecondDark' : 'SecondLight'}`}>{Content.Second}</p>
                                <p><img src='#'/>{Content.Third}</p>
                                <p>{Content.Address}</p>
                                <p>{Content.Price}<del>{Content.DelPrice}</del></p>
                                <button style={{ color: isDarkMood ? 'white' : 'black' }} onClick={() => handleBookBox(Content)}>Book Now</button>
                                <div onClick={(e) => HandleLike(Content.id, e)} className={`${'LOve'} `} style={{ color: Liii, cursor: 'pointer', 
                                transition: 'color 0.3s ease', 
                                display: 'flex', border: isDarkMood ? '0.1px solid rgb(29, 29, 29)' : '0.1px solid rgb(230, 227, 227)'}}><FaHeart/></div>
                            </div>
                        </div>
  )
}

export default SectionCard