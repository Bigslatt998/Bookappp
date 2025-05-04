import React,{useContext, useRef, useState, useEffect} from 'react'
import './BookDetailsONE.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import {Autoplay, Pagination} from  'swiper/modules'
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/pagination'
import { ThemeContext } from '../../ThemeProvider'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCalendarCheck, faMagnifyingGlass, faMicrophoneLines, faXmark} from '@fortawesome/free-solid-svg-icons';
import { BookDetailsList, TimeSlot,  DarkColor, LightColor, LigColor, DacColor } from '../../List';
import OurServicesCard from '../OurServicesCard/OurServicesCard'
import { FaAngleLeft, FaAngleRight, FaBitcoin, FaCheck, FaClock, FaComments, FaPaperPlane, FaUser } from 'react-icons/fa'
import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import EmojiPicker from 'emoji-picker-react'
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons'
const BookDetailsONE = () => {
  const Mark = <FontAwesomeIcon icon={faXmark}/>
  const CalendarCheck = <FontAwesomeIcon icon={faCalendarCheck}/>
  const Search = <FontAwesomeIcon icon={faMagnifyingGlass}/>
 const AngleRight = <FaAngleRight/>
 const AngleLeft = <FaAngleLeft/>
  const {isDarkMood, ClostBookDetails,
        selectedServices, setSelectedStaff, 
        selectedShop, selectedStaff,
        isBookBox, setCurrentStep, 
        currentStep, setSelectedDate, 
        setStaffname, staffname, 
        setSelectedTime, 
        selectedTime, selectedDate,
        setIsChat, isChat, 
        newMessage, setNewMessage,
        Message, setMessage} = useContext(ThemeContext)
  
  const staffArray = selectedStaff ? Object.values(selectedStaff)
                    .filter((staff, index , self) => 
                    index === self.findIndex(s => s.id === staff.id)) : []
  const HandleStaffSelection = (staff) => {
    setSelectedStaff(prev => ({
    ...prev, selected: staff
    }))
    setStaffname(staff)
    console.log(staff)
  }
  const handleNext = () => {
    if(!selectedStaff?.selected){
      toast.error(
        'please select a staff member to continue',{
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false
        }
      )
      return;
    }

    if(currentStep === 2){
      if(selectedTime.length === 0){
        toast.error(
          'please select a Time',{
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false
          }
        )
        return;
      }
    }

    if(currentStep === 2){
      if(selectedDate.length === 0){
        toast.error(
          'please select a Date',{
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false
          }
        )
        return;
      }
    }

    
    if(currentStep < 4){
      setCurrentStep(currentStep + 1)
    }
   
  }



  const handleBack = () => {
    if(currentStep > 1){
      setCurrentStep(currentStep - 1)

    }
  }


  const formatWeekDay = (dayName) => {
    return dayName.substring(0, 3)
  }

  const HandleChange = (date) => {
    setSelectedDate(date)
    console.log(date)
  }
  const handleTime = (Time) => {
    setSelectedTime(Time)
    console.log(Time)
  }
  const messageEndRef = useRef(null)

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({behavior: 'smooth'})
  }, [Message])
  useEffect(() => {
    if (isChat && Message.length === 0) {
      setMessage([
        {
        text: 'Hello! how can I help you today?',
        sender: 'staff',
        time: new Date().toLocaleTimeString([], {
          hour: '2-digit', 
          minute: '2-digit',
          hour12: true
        })
        }
      ])
    }
  }, [isChat])
  const HandleChatBox = () => {
    setIsChat(!isChat)
  }
  // const [newMessage, setNewMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const handleSendMsg = () => {
    if(!newMessage.trim()) return
    const userMessage = {
      text: newMessage,
      sender: 'user',
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true
      })
    }
    setMessage(prev => [...prev,
      userMessage
    ])
    setNewMessage('')
    setTimeout(() => {
      setIsTyping(true)

      setTimeout(() => {
        setIsTyping(false)
        const staffReply = {
          id: Date.now() + 1,
          text: `sorry! I'm  just a demo`,
          sender: 'staff',
          time: new Date().toLocaleTimeString([], {
                hour: '2-digit', minute: '2-digit',
                hour12: true
              }),
          typing: isTyping
        }
        setMessage(prev => [...prev, staffReply])
      }, 2000)
    }, 500)
  }
  const [position, setPosition] = useState({x: 0, y: 0})
  const [isDragging, setIsdragging] = useState(false)
  const boxRef = useRef(null)

  const handleMouseDown =(e) => {
    setIsdragging(true)
    const rect = boxRef.current.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }
  const handleMoseMove = (e) => {
    if(!isDragging) return

    const containet = boxRef.current.parentElement.getBoundingClientRect()
    const newX = e.clientX - containet.left - position.x
    const newY = e.clientY - containet.top - position.y

    const boxWidth = boxRef.current.offsetWidth
    const boxHeight = boxRef.current.offsetHeight

    const boundedX = Math.max(0, Math.min(newX, containet.width - boxWidth))
    const boundedY = Math.max(0, Math.min(newY, containet.height - boxHeight))

    boxRef.current.style.left = `${boundedX}px`
    boxRef.current.style.top = `${boundedY}px`
  }

  const handleMouseUp =() => {
    setIsdragging(false)
  }
  const HandleTouchStart = (e) => {
    const touch = e.touches[0];
    handleMouseDown({
      clientX: touch.clientX,
      clientY: touch.clientY,
      preventDefault: () => e.preventDefault()
    })
  }
  const handleTouchMove = (e) => {
    const touch = e.touches[0]
    handleMoseMove({
      clientX: touch.clientX,
      clientY: touch.clientY,
      preventDefault: () => e.preventDefault()
    })

  }

  const today = new Date()
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const handleEmojiClick = (emojiData) => {
    setNewMessage(prev => prev + emojiData.emoji);
    setShowEmojiPicker(!showEmojiPicker)
  };

  useEffect(() => {
    if(isBookBox){
      document.body.style.overflow = 'hidden'
    }
    else{
      document.body.style.overflow = 'auto'
    }
  }, [isBookBox])
  // const textStyle = <FontAwesomeIcon icon={faMicrophoneLines}/>
  return (
      <>
      {isBookBox && (
        <div className='BookDetailsContainer' onMouseMove={handleMoseMove}
                                    onMouseUp={handleMouseUp}
                                    onMouseLeave={handleMouseUp}
                                    style={{background: isDarkMood ? DarkColor: LightColor}}>

          {isChat && (
              <div className="ChatBox"
                ref={boxRef}
                onMouseDown={handleMouseDown}
                onTouchStart={HandleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleMouseUp}
                style={{
                  position: 'absolute',
                  left:'0px',
                  top: '0px',
                  overflow: 'hidden',

                  cursor: isDragging ? 'grabbing' : 'grab',
                  background: isDarkMood ? DarkColor: LightColor
                }}>

                  <div className="CloseChatBox" onClick={HandleChatBox} style={{ background: isDarkMood ? DarkColor: LightColor }}>
                    {Mark}
                  </div>
                <div className='MessabeBox'>
                {Message.map((msg) => (
                  <div className="MessaageBoxContainer">
                    <div className={`message ${msg.sender}`}>
                    <div className={`ICons ${msg.sender}`} style={{ background: isDarkMood ? '#692003' : 'rgba(207, 57, 2, 0.94)'}}>
                    {msg.sender === 'staff' ? (
                        <FaUser/>
                    ):(
                        <FaClock/>
                    )}
                  </div>
                    <div className= {`msgContent ${msg.sender}`}>
                      <p>{msg.text}</p>
                      <i>{msg.time}</i>
                    </div>
                    
                  </div>
                  <div className={`Typhhhing `}>
                  {msg.sender === 'staff' && (
                    isTyping && (
                      <p>Typing...</p>
                    )
                  )}
                  </div>
                  </div>
                  
                ))}
                <div ref={messageEndRef}></div>
                </div>
                <div className="InputMessage">
                  <input placeholder='Type...' value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    style={{ color: isDarkMood ? 'white': 'black' }}/>
                    <div className="EmojiRecord" style={{ position: 'relative' }}>
                      <i onClick={() => setShowEmojiPicker(val => !val)}><FontAwesomeIcon icon={faFaceSmile}/></i>
                    </div>
                    <i><FontAwesomeIcon icon={faMicrophoneLines}/></i>
                  <span onClick={handleSendMsg}><FaPaperPlane/></span>
                </div>
                {/* {showEmojiPicker && (
                  <div style={{ position: 'absolute', bottom: '0px', zIndex: 100,
                                }} className='EmojiPicker'>
                    <EmojiPicker onEmojiClick={handleEmojiClick} 
                                  searchDisabled={true}
                                  width='100%'
                                  height='100px'
                                  />
                  </div>
                      )} */}
              </div>
              )}
        <div className="BookDetails">
                                      
        
        <p className='BookDetailsP'>{selectedShop.First}</p>
          {/* <ToastContainer/> */}
            <nav>
              <ul className={`${isDarkMood ? 'ULDark' : 'ULLight'}`}>
                {BookDetailsList.map((Content) => (
                  
                  <div key={Content.id} className={`BookDetailsList 
                    ${currentStep > Content.id ? 'completed' : ''} 
                  ${currentStep === Content.id ? 'active' : ''} 
                  ${isDarkMood ? 'ActiveDark' : 'ActiveLight'}`}>
                    <p className={isDarkMood ? 'strokeDark' : 'strokeLight'}>
                      {Content.id.toString().padStart(2, '0')}</p>
                  <i style={{ background: isDarkMood ? DarkColor: LightColor,  
                              border: isDarkMood ? ` 0.1px solid rgb(29, 29, 29)`: ` 0.1px solid rgb(230, 227, 227)` }}>{CalendarCheck}</i>
                  <p >{Content.Text}</p>
                </div>
                ))}
              </ul>
              <i className= 'Close' onClick={ClostBookDetails}
                                style={{ background: isDarkMood ? DarkColor: LightColor }}>{Mark}</i>
            </nav>
        </div>
        
        <div className="Form">
          {currentStep === 1 && (
            <div className="SelectStaff">
              <div className="inPut">
              <p>Find Or Choose Your Staff</p>
                <div className="iiiin">
                <input placeholder='Enter Staff name...'/>
                <button style={{background: isDarkMood ? LigColor : DacColor, color: isDarkMood ? 'white' : 'black' }}><i>{Search}</i>Find Now</button>
                </div>
              </div>
              <Swiper
              modules={[Autoplay, Pagination]}
                        spaceBetween={20}
                        breakpoints= {{
                          0: {
                            slidesPerView: 1
                          },  
                          800: {
                            slidesPerView: 3
                          }
                        }}
                        // autoplay={{ delay: 4000, disableOnInteraction: false}}
                        // loop={true}
                        pagination={{clickable: true}}>
                {staffArray.map((staff, index) => (
              <SwiperSlide key={index}>
                {selectedStaff?.selected?.id === staff.id &&(
                  <div className='check'>
                      <FaCheck/>
                  </div>
                )}
                <div className="staffIMG">
                     <img src={staff.IMG}/>
                    </div>
                <div className="StaffDetails">
                
                      <p>{staff.FirstName + ' ' +  staff.LastName}</p>
                      <p>{staff.Email}</p>
                      <p onClick={() => HandleStaffSelection(staff)}>{staff.SelectStaff}</p>
                    </div>
              </SwiperSlide>
                              
                ))}
              </Swiper>
            
            
            </div>
          )}

      {currentStep === 2 && (
            <div className="Time">
              
              <div className="Avaiabletime">
              <p>Set Your Available Time</p>
              <button onClick={HandleChatBox}><span>Chat with {staffname.LastName}?</span> <i><FaComments/></i> </button>
              </div>
              <div className={` ${'Dateee'} ${isDarkMood ? 'dateDark' : 'dateLight'}`}>
              <DatePicker
              inline 
              calendarClassName="clean"
              formatWeekDay={formatWeekDay}
              onChange={HandleChange}
              minDate={today}
              />
              </div>
              <div className="PIckTime">
                <div className="PicktimeWripper">
                {TimeSlot.map((Time) => (
                  <div  onClick={() => handleTime(Time)} className={`box ${selectedTime === Time ? 'selectedTiime' : ''}`}>
                  {selectedTime.id === Time.id &&(
                  <div className='checkkk'>
                      <FaCheck/>
                  </div>
                )}
                  
                  <div className="Iconnn">
                      <FaClock/>
                    </div>
                    <div className="Tiime">
                  <p>{Time.From}</p>
                  <p>{Time.To}</p>
                  </div>
                  </div>
                ))}
                
                </div>
              </div>
            </div>
          )}

      {/* {currentStep === 3 && (
              <div className="Information">
                  Step Three
              </div>
          )} */}

      {currentStep === 3 && (
              <div className="payment">
                <label> Choose a payment method</label>
                <select style={{ color: isDarkMood ? 'white' : 'black'}}>
                  <option>Credit Card</option>
                  <option>Debit Card</option>
                  <option>Paypal</option>
                  <option>Cashapp</option>
                  <option>Crypto</option>
                </select>
              </div>
          )}

      {currentStep === 4 && (
              <div className="confirmation">
                  <p>Congratulation Your <br/> Booking Completed</p>
              </div>
          )}

        
        </div>
<div className='Navigation' >
          {currentStep > 1 && (
            <button onClick={handleBack} className={`${isDarkMood ? 'btnDark' : 'btnLight'}`}>Prev step</button>
          )}
          <button onClick={handleNext} className={`${isDarkMood ? 'btnDark' : 'btnLight'}`}>{currentStep === 4 ? 'Back To Home' : `Next step`}</button>
        </div>
        
    </div>
  )}
  </>
  )
}

export default BookDetailsONE