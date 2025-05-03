import React, { useContext, useRef} from 'react'
import { ThemeContext } from '../ThemeProvider'
import './Services.css'
import {gsap} from 'gsap'
import { ServicesList, DarkColor, work, LightColor,  bookingSystem, bookingSystemII} from '../List'
const Services = () => {
    const {isDarkMood} = useContext(ThemeContext)
    const boxRef = useRef([])
    const handleMouseEnter = (e, index) => {
        const box = boxRef.current[index]
        const rect = box.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const offsetX = ((x - rect.width / 2) / rect.width)  * 20
        const offsetY = ((y - rect.height / 2) / rect.height) * 20


        gsap.to(box, {
            y: offsetY,
            x: offsetX,
            scale: 1.1,
            duration: 0.5,
            ease: 'power2.out'
        })
    }
    const handleMouseLeave = (index) => {
        const box = boxRef.current[index]

        gsap.to(box, {
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: 'power2.out'
        })
    }
    const getBackColor = (id, isDarkMood) => {
        if(id === 1) return isDarkMood ? 'yellow' : 'green';
        if(id === 2) return isDarkMood ? 'pink' : 'red';
        if(id === 3) return isDarkMood ? 'gray' : 'blue';
        if(id === 4) return isDarkMood ? 'orange' : 'aqua';
        if(id === 5) return isDarkMood ? 'white' : 'black';
    }

    const getBackColorII = (id, isDarkMood) => {
        if(id === 1) return isDarkMood ? 'red' : 'green';
        if(id === 2) return isDarkMood ? 'orangered' : 'red';
       
    }

    const getBackColorIII = (id, isDarkMood) => {
        if(id === 1) return isDarkMood ? 'yellow' : 'green';
        if(id === 2) return isDarkMood ? 'pink' : 'red';
        
    }

    const carouseRef = useRef(null)
    
    const scrollLeft = () => {
     if(carouseRef.current){
         carouseRef.current.scrollBy({ left: -50, behavior: 'smooth'})
     }
    }
 
    const scrollRight = () => {
     if(carouseRef.current){
         carouseRef.current.scrollBy({ left: 50, behavior: 'smooth'})
     }
    }
    const boxRefII = useRef()
    const handleMouseEnterII = (e) => {
        const box = boxRefII.current
        const rect = box.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const offsetX = ((x - rect.width / 2) / rect.width)  * 50
        const offsetY = ((y - rect.height / 2) / rect.height) * 50
        gsap.to(box, {
            y: offsetY,
            x: offsetX,
            scale: 1.1,
            duration: 0.5,
            ease: 'power2.out',
            // filter: "drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.2))"
        })
    }
    const handleMouseLeaveII = () => {
        const box = boxRef.current
        gsap.to(box, {
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: 'power2.out'
        })
    }
  return (
    <div className='ServicesContainer'>
        <div className="Service">
            <div className="BBos" ref={carouseRef}>
        {ServicesList.map((Content) => (
            <div key={Content.id} className="Box" >
                <div className='BoxImg' ref={(el) => (boxRef.current[Content.id] = el)} 
                onMouseLeave={() => handleMouseLeave( Content.id)}
                onMouseMove={(e) =>handleMouseEnter(e, Content.id)} style={{ background: isDarkMood ? DarkColor: LightColor, color: isDarkMood ? LightColor : DarkColor }}>
                <img src={Content.IMG}/>
                <p>{Content.Text}</p>
                </div>
                <div className='Back' style={{ backgroundColor: getBackColor(Content.id, isDarkMood)
                }}>{Content.Back}</div>
            </div>
        ))}
        </div>

        <div className="ServiceBooking">
            <h2 style={{ color: isDarkMood ? LightColor : DarkColor  }}>How Our Services Booking System Works</h2>
            <div className="Cont" style={{ color: isDarkMood ? LightColor : DarkColor  }}>
            <div className="Container1">
                {bookingSystem.map((Content) => (
                    <div key={Content.id} className="Container1Box">
                        <div className="Icon" style={{ backgroundColor: getBackColorII(Content.id, isDarkMood)}}>
                        <i>{Content.Icon}</i>
                        </div>
                        <p className="Head">{Content.Head}</p>
                        <p className="Textt">{Content.Text}</p>
                    </div>
                ))}
            </div>
            <div className="Container2" ref={boxRefII}>
                <img style={{ filter: isDarkMood ? 'drop-shadow(0px 5px 10px rgba(255, 255, 255, 0.3))' : 'drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.2))'}} src={work} onMouseMove={handleMouseEnterII}
                onMouseLeave={handleMouseLeaveII}/>
            </div>
            <div className="Container3" >
            {bookingSystemII.map((Content) => (
                    <div key={Content.id} className="Container1Box">
                        <div className="Icon" style={{ backgroundColor: getBackColorIII(Content.id, isDarkMood)}}>
                        <i>{Content.Icon}</i>
                        </div>
                        <p className="Head">{Content.Head}</p>
                        <p className="Textt">{Content.Text}</p>
                    </div>
                ))}
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Services