import React,{useContext, useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import {Autoplay, Pagination} from  'swiper/modules'
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/pagination'
import './OurServices.css'
import { gsap } from 'gsap'
import { DarkColor, LightColor, LigColor, DacColor, OurServicesLIst} from '../List'
import { ThemeContext } from '../ThemeProvider'
import { FaHeart } from 'react-icons/fa'
import OurServicesCard from './OurServicesCard/OurServicesCard'
import BookDetailsONE from './BookDetailsONE/BookDetailsONE'
const OurServices = () => {
        const {isDarkMood, onbook, 
              selectedServices, Content, setSelectedServices, 
              setIsBookBox, isBookBox} = useContext(ThemeContext)
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
    <div className='OurServicesContainer' style={{  color: isDarkMood ? LightColor: DarkColor}}>
      <div className="OurServices">
          <h3>Our Top Booking Services</h3>
          <Swiper 
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          breakpoints= {{
            0: {
              slidesPerView: 1
            },  
            900: {
              slidesPerView: 2
            }
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false}}
          loop={true}
          pagination={{clickable: true}}
          >
          
            {OurServicesLIst.map((Content) => {
              const isLike = isLiked.includes(Content.id)
              const Liii = isLike ? 'red' : null
              return(
                <SwiperSlide>
                  <OurServicesCard key={Content.id} Content={Content} HandleLike={HandleLike} Liii={Liii}/>
              </SwiperSlide>
              )
          })}
          </Swiper>
          
      </div>
          <BookDetailsONE/>

    </div>
    
    
  )
}

export default OurServices