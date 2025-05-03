import React,{useContext, useState, useEffect} from 'react'
import { DarkColor, LightColor, LigColor, DacColor, OurServicesLIst} from '../../List'
import { ThemeContext } from '../../ThemeProvider'
import { FaHeart } from 'react-icons/fa'
import './OurServicesCard.css'


const OurServicesCard = ({Content, Liii, HandleLike}) => {
            const {isDarkMood, isBookBox,
                  setSelectedStaff, selectedShop, 
                  setSelectedShop, setIsBookBox} = 
                  useContext(ThemeContext)
            const handleBookBox = (Content) => {
              setSelectedStaff(Content.Staff)
              setSelectedShop(Content)
              setIsBookBox(true)
              console.log(Content)
            }
  return (
    <div className="OurServicesBoxes" style={{ color: isDarkMood ? LightColor : DarkColor, 
        background: isDarkMood ? DarkColor: LightColor,
        // border: isDarkMood ? '0.1px solid rgb(29, 29, 29)' : '0.1px solid rgb(230, 227, 227)'
}}>
<div className="OurServicesIMG">
<img src={Content.IMG}/>
</div>
<div className="OurServiceText">
<p>{Content.First}</p>
<p>{Content.Second}</p>
<p><img src='#'/>{Content.Third}</p>
<p>{Content.Address}</p>
<p>{Content.Price}<del>{Content.DelPrice}</del></p>
<button style={{background: isDarkMood ? LigColor : DacColor, 
                color: isDarkMood ? 'white' : 'black' }} onClick={() => handleBookBox(Content)}>
                Book Now</button>

</div>
<div onClick={(e) => HandleLike(Content.id, e)} className={`${'LOve'} `} style={{ color: Liii, cursor: 'pointer', 
        transition: 'color 0.5s ease', 
        display: 'flex', 
        border: isDarkMood ? '0.1px solid rgb(29, 29, 29)' : '0.1px solid rgb(230, 227, 227)'}}><FaHeart/></div>
</div>  
  )
}

export default OurServicesCard