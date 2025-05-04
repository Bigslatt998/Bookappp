import React, { createContext, useEffect, useRef, useState} from 'react'
export const ThemeContext = createContext()
import { DarkColor, LightColor } from './List'
import { useNavigate } from 'react-router-dom'


const ThemeProvider = ({children}) => {
  const storedTheme = JSON.parse(localStorage.getItem("isDarkMode"))
    const [isDarkMood, setIsDarkMood] = useState( storedTheme ||false)
    useEffect(()=> {
      localStorage.setItem("isDarkMode", JSON.stringify(isDarkMood))
    }, [isDarkMood])

    useEffect(() => {
      document.body.className = isDarkMood ? 'dark' : 'light';
      localStorage.setItem("isDarkMood", isDarkMood)
    }, [isDarkMood])
    const handleTheme = () => {
      setIsDarkMood(!isDarkMood)
    }

    const [isMenue, setIsMenue] = useState(false)
      const HandleMeneOpen = () => {
        setIsMenue(!isMenue)
      }
      const HomeRef = useRef(null)
      const scrollHome = () => {
        HomeRef.current?.scrollIntoView({ behavior: 'smooth'})
        console.log('hi')
      }
      const [currentStep, setCurrentStep] = useState(1)
      const [isBookBox, setIsBookBox] = useState(false)
      const [isBookBoxTWO, setIsBookBoxTWO] = useState(false)
      const [selectedStaff, setSelectedStaff] = useState([])
      const [selectedShop, setSelectedShop] = useState(null)
      const [SearchTerm, setSearchTerm] = useState('')
      const [selectedDate, setSelectedDate] = useState([])
      const [selectedTime, setSelectedTime] = useState([])
      const [staffname, setStaffname] = useState(null)
        // const handleStaffSelection = (staff) => {
        //   setStaffname(staff)
        //   console.log(staff)
        // }
      
         
    const [newMessage, setNewMessage] = useState('')
    const [Message, setMessage] = useState([])
  
  const [isChat, setIsChat] = useState(false)
         
          const ClostBookDetails = () => {
            setIsBookBox(false)
            setIsChat(false)
            setMessage([])
            setCurrentStep(1)
            // setCurrentStep(1)

          }
          const ClostBookDetailsTWO = () => {
            setIsBookBoxTWO(false)

          }
          const handleBookBox = (Content) => {
            setSelectedStaff(Content.Staff)
            setSelectedShop(Content)
            setIsBookBox(true)
            console.log(Content)
          }
              const navigate = useNavigate()
          
          const handleHome = () => {
            navigate('/')
        }
          // const [ShowPassword, setShowPassword] = useState(false)
      
          // const handlepasswordVisibility = () => {
          //   if(Password.trim() === ''){
          //       alert('Please enter a password')
          //       return EyeSlash
          //   }
          //   setShowPassword(!ShowPassword)
          // }
          // <i onClick={handlepasswordVisibility}>{ShowPassword? Eye : EyeSlash}</i>
        
        
          
  return (
    <ThemeContext.Provider value={{ handleTheme, setSelectedDate, 
                                    setIsChat, isChat,
                                    selectedStaff, setStaffname,
                                    staffname, setSelectedTime,
                                    selectedTime, selectedDate,
                                    selectedShop, setSelectedShop, 
                                    setSelectedStaff, isBookBox, 
                                    setIsBookBox, ClostBookDetails, 
                                    ClostBookDetailsTWO, HomeRef,
                                    currentStep, setCurrentStep,
                                    scrollHome, isDarkMood, isMenue, 
                                    setIsMenue, HandleMeneOpen,
                                    newMessage, setNewMessage,
                                    Message, setMessage,
                                    handleBookBox, handleHome}}>
        {children}
    </ThemeContext.Provider>

  )
}

export default ThemeProvider