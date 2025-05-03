import React, { useContext, useState, useEffect } from 'react'
import './Section.css'
import { ThemeContext } from '../ThemeProvider'
import { Swiper, SwiperSlide } from 'swiper/react'
import {Autoplay, Pagination} from  'swiper/modules'
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/pagination'
import { gsap } from 'gsap'
import { DarkColor, FeaturedShopLIst, LightColor, DacColor, LigColor, BookingList, SectionServicesLIst } from '../List'
import { FaHeart } from 'react-icons/fa'
import BookDetailsTWO from './BookDetailsTWO/BookDetailsTWO'
const Section = () => {
    const {isDarkMood, onbookTWO} = useContext(ThemeContext)
    const [isHover, setIsHover] = useState(null)
    const [isLiked, setIsLiked] = useState(() => {
        if(typeof window !== 'undefined'){
            const saved = localStorage.getItem('isLiked')
            return saved ? JSON.parse(saved) : []
        }
        return []
    })
    useEffect(() => {
        localStorage.setItem('isLiked', JSON.stringify(isLiked))
    }, [isLiked])
    const HandleLike = (id, e) => {
        gsap.to(e.currentTarger, {
            scale: 1.5,
            duration: 0.3,
            yoyo: true,
            repeat: 1,
            ease: 'power2.out',
            onComplete: () => {
                gsap.to(e.currentTarger, {
                    scale: 1, duration: 0.1
                })
            }
        })
        setIsLiked(prev => prev.includes(id) ? prev.filter(itemID => itemID !== id)
    : [...prev, id])
    }
  return (
    <div className='SectionContainer' style={{ color: isDarkMood ? LightColor : DarkColor, background: isDarkMood ? DarkColor: LightColor }}>
        <div className="Section" style={{ color: isDarkMood ? LightColor : DarkColor, background: isDarkMood ? DarkColor: LightColor }}>
            <div className="SectionText">
                <h4>Popular Booking Services</h4>
                <nav>
                    <ul>
                    {BookingList.map((Content) => {
                        const isHovered = isHover === Content.id
                        const backGround = isHovered ? isDarkMood ? LigColor : DacColor : 
                                isDarkMood ? 'transparent' : 'transparent'
                        
                        return(
                            <li key={Content.id} onMouseEnter={() => setIsHover(Content.id)} 
                                            onMouseLeave={() => setIsHover(null)} 
                                            style={{ color: isDarkMood ? 'white' : 'black',
                                            background: backGround, 
                                            transition: 'background 0.3s ease',
                                            border: isDarkMood ? '0.1px solid rgb(29, 29, 29)' : '0.1px solid rgb(230, 227, 227)'}}>{Content.Text}</li>
                         )
                        })}
                    </ul>
                </nav>
            </div>
            <div className="SectionServices">
                {SectionServicesLIst.map((Content) => {
                    const isLike = isLiked.includes(Content.id)
                    const Liii = isLike ? 'red' : null
                    
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
                            <p>{Content.Second}</p>
                            <p><img src='#'/>{Content.Third}</p>
                            <p>{Content.Address}</p>
                            <p>{Content.Price}<del>{Content.DelPrice}</del></p>
                            <button style={{ color: isDarkMood ? 'white' : 'black' }} onClick={ () => onbookTWO(Content)}>Book Now</button>
                            <div onClick={(e) => HandleLike(Content.id, e)} className={`${'LOve'} `} style={{ color: Liii, cursor: 'pointer', 
                            transition: 'color 0.3s ease', 
                            display: 'flex', border: isDarkMood ? '0.1px solid rgb(29, 29, 29)' : '0.1px solid rgb(230, 227, 227)'}}><FaHeart/></div>
                        </div>
                    </div>
                    )
                })}
                
            </div>
            <div className="ViewMore">
                <button style={{background: isDarkMood ? LigColor : DacColor, color: isDarkMood ? 'white' : 'black' }}>View More</button>
                </div>


                <div className="TopFeatureContainer">
                    <div className="TopFeatru">
                    <h5>Our Top Featured Shop</h5>
                    <button style={{background: isDarkMood ? LigColor : DacColor, color: isDarkMood ? 'white' : 'black' }}>View More</button>
                    </div>

                <Swiper 
                modules={[Autoplay, Pagination]}
                spaceBetween={20}
                breakpoints= {{
                    0: {
                        slidesPerView: 1
                        },
                    600: {
                    slidesPerView: 2
                    },  
                    700: {
                    slidesPerView: 3
                    }
                }}
                // autoplay={{ delay: 2000, disableOnInteraction: false}}
                loop={true}
                pagination={{clickable: true}}
                >
                
                    {FeaturedShopLIst.map((Content) => (
                    <SwiperSlide>
        
                    <div className="FeaturedShopBoxes" style={{ color: isDarkMood ? LightColor : DarkColor, background: isDarkMood ? DarkColor: LightColor }}>
                        <div className="FeaturedShopIMG">
                        <img src={Content.IMG}/>
                        </div>
                        <div className="FeaturedShopText">
                        <p>{Content.First}</p>
                        <p>{Content.Second}</p>
                        <p>{Content.Third}</p>
                        <p>{Content.Address}</p>
                        </div>
                    </div>  
                    </SwiperSlide>
        
                ))}
                </Swiper>
                </div>
        <BookDetailsTWO/>

        </div>
    </div>
  )
}

export default Section