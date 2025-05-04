import BookappLogo from './assets/BookappLogo.png'
export const BookAppLogo =BookappLogo

import loginImg from './assets/access.svg'
import loginImgg from './assets/Signup.svg'
export const loginImgG =loginImg
export const loginImgGG =loginImgg
export const NavList = [
    {id: 1, Link: 'Home'},
    {id: 2, Link: 'Services', DropDown: 'Services', DeropDownII: 'Services Details'},
    {id: 3, Link: 'Vendors', DropDown: 'Vendors', DeropDownII: 'Vendors Details'},
    {id: 4, Link: 'Pages', DropDown: 'Pages', DeropDownII: 'Services Details'},
    {id: 5, Link: 'Blog', DropDown: 'Blog', DeropDownII: 'Blog Details'},
    {id: 6, Link: 'Contact'},
    
]

export const DarkColor = 'black'
export const LightColor = 'white'
// background: ;
export const LigColor = 'linear-gradient(90deg, #2c0c04 0%, #692003 80%)'
export const DacColor = 'linear-gradient(90deg, rgba(207, 57, 2, 0.94) 0%,rgba(255, 165, 0, 1 ) 80%)'
import cati from './assets/cati.png'
import catii from './assets/catii.png'
import catiii from './assets/catiii.png'
import catiiii from './assets/catiiii.png'
import catv from './assets/catv.png'
export const FirstIMG = cati
export const ServicesList = [
    {id: 1, IMG: cati, Text: 'Doctor', Back: '.'},
    {id: 2, IMG: catii, Text: 'Cleaner', Back: '.'},
    {id: 3, IMG: catiii, Text: 'Gym', Back: '.'},
    {id: 4, IMG: catiiii, Text: 'Electrician', Back: '.'},
    {id: 5, IMG: catv, Text: 'Doctor', Back: '.'},
]
import { FaMapMarker} from 'react-icons/fa'
import works from './assets/works1.png'
export const work = works
export const bookingSystem = [
    {id: 1, Icon: <FaMapMarker/>, Head: 'Set Location', Text: 'It has been an absolute pleasure dealing with Scan during the.'},
    {id: 2, Icon: <FaMapMarker/>, Head: 'Find Perfect Services', Text: 'It has been an absolute pleasure dealing with Scan during the.'}
]

export const bookingSystemII = [
    {id: 1, Icon: <FaMapMarker/>, Head: 'Fill Your Information', Text: 'It has been an absolute pleasure dealing with Scan during the.'},
    {id: 2, Icon: <FaMapMarker/>, Head: 'Booking With Payment', Text: 'It has been an absolute pleasure dealing with Scan during the.'}
]
import Electrician from './assets/Electrician.png'
import Barber from './assets/Barber.png'
import BarberII from './assets/BarberII.png'
import Doc from './assets/Doc.png'
import Cleaner from './assets/Cleaner.png'

import staff1 from './assets/staff1.jpg'
import staff2 from './assets/staff2.jpg'
import staff3 from './assets/staff3.jpg'
import staff4 from './assets/staff4.jpg'

// {id: 1, IMG: staff1, Name: 'Oliver Butler', Email: 'oliverbutler@gmail.com', SelectStaff: 'Select Staff'},
//     {id: 2, IMG: staff2 , Name: 'John Doe', Email: 'johndoe@gmail.com', SelectStaff: 'Select Staff'},
//     {id: 3, IMG: staff3, Name: 'Peter Butler', Email: 'peterbulter@gmail.com', SelectStaff: 'Select Staff'},
//     {id: 4, IMG: staff4, Name: 'Tommy James', Email: 'tommyjames@gmail.com', SelectStaff: 'Select Staff'},
export const OurServicesLIst = [
    {id: 1, First: 'Barber Shop', Second: 'City Tower Barber Shop', 
        Third: 'By John Doe', Address: 'City Tower, Road : 235, Usa', 
        Price: '$350.00', DelPrice: '$400.00', IMG: Barber,
        Staff: {
            FirstStaff: {
                id: 1,
                FirstName: 'Oliver',
                LastName: 'Butler',
                // Name: 'Oliver Butler', 
                Email: 'oliverbutler@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff1, 
            },
            SecondStaff: {
                id: 2,
                FirstName: 'Peter',
                LastName: 'Butler',
                Email: 'peterbutler@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff2, 
            },
            ThirdStaff: {
                id: 3,
                FirstName: 'Tommy',
                LastName: 'James',
                Email: 'tommyjames@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff3, 
            },
            FouthStaff: {
                id: 4,
                FirstName: 'Emma',
                LastName: 'Tomson',
                Email: 'emmatomson@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff4, 
            },
        }
    },
    

    {id: 2, First: 'House Cleaner', Second: 'City Tower Cleaning Services', 
        Third: 'By John Doe', Address: 'City Tower, Road : 235, Usa', 
        Price: '$150.00', DelPrice: '$200.00', IMG: Cleaner,
        Staff: {
            FirstStaff: {
                id: 1,
                FirstName: 'Oliver',
                LastName: 'Butler',
                // Name: 'Oliver Butler', 
                Email: 'oliverbutler@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff1, 
            },
            SecondStaff: {
                id: 2,
                FirstName: 'Peter',
                LastName: 'Butler',
                Email: 'peterbutler@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff2, 
            },
            ThirdStaff: {
                id: 3,
                FirstName: 'Tommy',
                LastName: 'James',
                Email: 'tommyjames@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff3, 
            },
            FouthStaff: {
                id: 4,
                FirstName: 'Emma',
                LastName: 'Tomson',
                Email: 'emmatomson@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff4, 
            },
        }
    },

    {id: 3, First: 'House Wiring', Second: 'City Tower Electrician Ltd', 
        Third: 'By John Doe', Address: 'City Tower, Road : 235, Usa', 
        Price: '$700.00', DelPrice: '$800.00', IMG: Electrician,
        Staff: {
            FirstStaff: {
                id: 1,
                FirstName: 'Oliver',
                LastName: 'Butler',
                // Name: 'Oliver Butler', 
                Email: 'oliverbutler@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff1, 
            },
            SecondStaff: {
                id: 2,
                FirstName: 'Peter',
                LastName: 'Butler',
                Email: 'peterbutler@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff2, 
            },
            ThirdStaff: {
                id: 3,
                FirstName: 'Tommy',
                LastName: 'James',
                Email: 'tommyjames@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff3, 
            },
            FouthStaff: {
                id: 4,
                FirstName: 'Emma',
                LastName: 'Tomson',
                Email: 'emmatomson@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff4, 
            },
        }
    },

    {id: 4, First: 'Check-up Point', Second: 'City Tower Clinic', 
        Third: 'By John Doe', Address: 'City Tower, Road : 235, Usa', 
        Price: '$350.00', DelPrice: '$400.00', IMG: Doc,
        Staff: {
            FirstStaff: {
                id: 1,
                FirstName: 'Oliver',
                LastName: 'Butler',
                // Name: 'Oliver Butler', 
                Email: 'oliverbutler@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff1, 
            },
            SecondStaff: {
                id: 2,
                FirstName: 'Peter',
                LastName: 'Butler',
                Email: 'peterbutler@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff2, 
            },
            ThirdStaff: {
                id: 3,
                FirstName: 'Tommy',
                LastName: 'James',
                Email: 'tommyjames@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff3, 
            },
            FouthStaff: {
                id: 4,
                FirstName: 'Emma',
                LastName: 'Tomson',
                Email: 'emmatomson@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff4, 
            },
        }
    },

    {id: 5, First: 'Barber Shop', Second: 'City Tower Barber Shop', 
        Third: 'By John Doe', Address: 'City Tower, Road : 235, Usa', 
        Price: '$350.00', DelPrice: '$400.00', IMG: Barber,
        Staff: {
            FirstStaff: {
                id: 1,
                FirstName: 'Oliver',
                LastName: 'Butler',
                // Name: 'Oliver Butler', 
                Email: 'oliverbutler@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff1, 
            },
            SecondStaff: {
                id: 2,
                FirstName: 'Peter',
                LastName: 'Butler',
                Email: 'peterbutler@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff2, 
            },
            ThirdStaff: {
                id: 3,
                FirstName: 'Tommy',
                LastName: 'James',
                Email: 'tommyjames@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff3, 
            },
            FouthStaff: {
                id: 4,
                FirstName: 'Emma',
                LastName: 'Tomson',
                Email: 'emmatomson@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff4, 
            },
        }
    }
]



export const SectionServicesLIst = [
    {id: 1, First: 'Barber Shop', Second: 'City Tower Barber Shop', 
        Third: 'By John Doe', Address: 'City Tower, Road : 235, Usa', 
        Price: '$350.00', DelPrice: '$400.00', IMG: Barber,
        Staff: {
            FirstStaff: {
                id: 1,
                FirstName: 'Oliver',
                LastName: 'Butler',
                // Name: 'Oliver Butler', 
                Email: 'oliverbutler@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff1, 
            },
            SecondStaff: {
                id: 2,
                FirstName: 'Peter',
                LastName: 'Butler',
                Email: 'peterbutler@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff2, 
            },
            ThirdStaff: {
                id: 3,
                FirstName: 'Tommy',
                LastName: 'James',
                Email: 'tommyjames@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff3, 
            },
            FouthStaff: {
                id: 4,
                FirstName: 'Emma',
                LastName: 'Tomson',
                Email: 'emmatomson@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff4, 
            },
        }},
    
    {id: 2, First: 'House Cleaner', Second: 'City Tower Cleaning Services', 
        Third: 'By John Doe', Address: 'City Tower, Road : 235, Usa', 
        Price: '$150.00', DelPrice: '$200.00', IMG: Cleaner,
        Staff: {
            FirstStaff: {
                id: 1,
                FirstName: 'Oliver',
                LastName: 'Butler',
                // Name: 'Oliver Butler', 
                Email: 'oliverbutler@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff1, 
            },
            SecondStaff: {
                id: 2,
                FirstName: 'Peter',
                LastName: 'Butler',
                Email: 'peterbutler@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff2, 
            },
            ThirdStaff: {
                id: 3,
                FirstName: 'Tommy',
                LastName: 'James',
                Email: 'tommyjames@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff3, 
            },
            FouthStaff: {
                id: 4,
                FirstName: 'Emma',
                LastName: 'Tomson',
                Email: 'emmatomson@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff4, 
            },
        }},

    {id: 3, First: 'House Wiring', Second: 'City Tower Electrician Ltd', 
        Third: 'By John Doe', Address: 'City Tower, Road : 235, Usa', 
        Price: '$700.00', DelPrice: '$800.00', IMG: Electrician,
        Staff: {
            FirstStaff: {
                id: 1,
                FirstName: 'Oliver',
                LastName: 'Butler',
                // Name: 'Oliver Butler', 
                Email: 'oliverbutler@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff1, 
            },
            SecondStaff: {
                id: 2,
                FirstName: 'Peter',
                LastName: 'Butler',
                Email: 'peterbutler@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff2, 
            },
            ThirdStaff: {
                id: 3,
                FirstName: 'Tommy',
                LastName: 'James',
                Email: 'tommyjames@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff3, 
            },
            FouthStaff: {
                id: 4,
                FirstName: 'Emma',
                LastName: 'Tomson',
                Email: 'emmatomson@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff4, 
            },
        }},

    {id: 4, First: 'Check-up Point', Second: 'City Tower Clinic', 
        Third: 'By John Doe', Address: 'City Tower, Road : 235, Usa', 
        Price: '$350.00', DelPrice: '$400.00', IMG: Doc,
        Staff: {
            FirstStaff: {
                id: 1,
                FirstName: 'Oliver',
                LastName: 'Butler',
                // Name: 'Oliver Butler', 
                Email: 'oliverbutler@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff1, 
            },
            SecondStaff: {
                id: 2,
                FirstName: 'Peter',
                LastName: 'Butler',
                Email: 'peterbutler@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff2, 
            },
            ThirdStaff: {
                id: 3,
                FirstName: 'Tommy',
                LastName: 'James',
                Email: 'tommyjames@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff3, 
            },
            FouthStaff: {
                id: 4,
                FirstName: 'Emma',
                LastName: 'Tomson',
                Email: 'emmatomson@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff4, 
            },
        }},

    {id: 5, First: 'Barber Shop', Second: 'City Tower Barber Shop', 
        Third: 'By John Doe', Address: 'City Tower, Road : 235, Usa', 
        Price: '$350.00', DelPrice: '$400.00', IMG: Barber,
        Staff: {
            FirstStaff: {
                id: 1,
                FirstName: 'Oliver',
                LastName: 'Butler',
                // Name: 'Oliver Butler', 
                Email: 'oliverbutler@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff1, 
            },
            SecondStaff: {
                id: 2,
                FirstName: 'Peter',
                LastName: 'Butler',
                Email: 'peterbutler@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff2, 
            },
            ThirdStaff: {
                id: 3,
                FirstName: 'Tommy',
                LastName: 'James',
                Email: 'tommyjames@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff3, 
            },
            FouthStaff: {
                id: 4,
                FirstName: 'Emma',
                LastName: 'Tomson',
                Email: 'emmatomson@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff4, 
            },
        } },

    {id: 6, First: 'Barber Shop', Second: 'City Tower Barber Shop', 
        Third: 'By John Doe', Address: 'City Tower, Road : 235, Usa', 
        Price: '$350.00', DelPrice: '$400.00', IMG: Barber,
        Staff: {
            FirstStaff: {
                id: 1,
                FirstName: 'Oliver',
                LastName: 'Butler',
                // Name: 'Oliver Butler', 
                Email: 'oliverbutler@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff1, 
            },
            SecondStaff: {
                id: 2,
                FirstName: 'Peter',
                LastName: 'Butler',
                Email: 'peterbutler@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff2, 
            },
            ThirdStaff: {
                id: 3,
                FirstName: 'Tommy',
                LastName: 'James',
                Email: 'tommyjames@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff3, 
            },
            FouthStaff: {
                id: 4,
                FirstName: 'Emma',
                LastName: 'Tomson',
                Email: 'emmatomson@gmail.com', 
                SelectStaff: 'Select Staff',
                IMG: staff4, 
            },
        } }
]
export const BookingList = [
    {id: 1, Text: 'All Services'},
    {id: 2, Text: 'Barber Shop'},
    {id: 3, Text: 'Doctor'},
    {id: 4, Text: 'Fitness Center'},
    {id: 5, Text: 'Lawyer'}
]

import CitiBarber from './assets/CitiBarber.png'
import CitiBarberII from './assets/CitiBarberII.png'
import CitiBarberIII from './assets/CitiBarberIII.png'
import Stom from './assets/Stom.png'

export const FeaturedShopLIst = [
    {id: 1, First: 'Barber Shop', Second: 'City Tower Barber Shop', 
        Third: 'By John Doe', Address: 'City Tower, Road : 235, Usa', 
        Price: '$350.00', DelPrice: '$400.00', IMG: CitiBarber},
    
    {id: 2, First: 'House Cleaner', Second: 'City Tower Cleaning Services', 
        Third: 'By John Doe', Address: 'City Tower, Road : 235, Usa', 
        Price: '$150.00', DelPrice: '$200.00', IMG: CitiBarberII},

    {id: 3, First: 'House Wiring', Second: 'City Tower Electrician Ltd', 
        Third: 'By John Doe', Address: 'City Tower, Road : 235, Usa', 
        Price: '$700.00', DelPrice: '$800.00', IMG: CitiBarberIII},

    {id: 4, First: 'Check-up Point', Second: 'City Tower Clinic', 
        Third: 'By John Doe', Address: 'City Tower, Road : 235, Usa', 
        Price: '$350.00', DelPrice: '$400.00', IMG: Stom},

    {id: 5, First: 'Barber Shop', Second: 'City Tower Barber Shop', 
        Third: 'By John Doe', Address: 'City Tower, Road : 235, Usa', 
        Price: '$350.00', DelPrice: '$400.00', IMG: CitiBarberII },

    {id: 6, First: 'Barber Shop', Second: 'City Tower Barber Shop', 
        Third: 'By John Doe', Address: 'City Tower, Road : 235, Usa', 
        Price: '$350.00', DelPrice: '$400.00', IMG: CitiBarberIII }
]
// {Message.map((msg) => (
//     <>
//       {msg.text}
//     </>
//   ))}
export const BookDetailsList = [
    {id: 1, Text: 'Staff', Icon: 'i'},
    {id: 2, Text: 'Time', Icon: 'i'},
    {id: 3, Text: 'Payment', Icon: 'i'},
    {id: 4, Text: 'Confirmation', Icon: 'i'},
]

// import staff5 from './assets/staff5.jpg'

export const TimeSlot = [
    {id: 1, From: '10 : 00 AM', To: '12: 00 PM' },
    {id: 2, From: '12 : 00 AM', To: '2: 00 PM' },
    {id: 3, From: '2 : 00 AM', To: '4: 00 PM' },
    {id: 4, From: '4 : 00 AM', To: '6: 00 PM' },
    {id: 5, From: '6 : 00 AM', To: '8: 00 PM' },
    
]

{/* <div className= 'ICons'>
                    {msg.sender === 'staff' ? (
                      <div className= 'StaffIcon'>
                        <FaUser/>
                      </div>
                    ): (
                      <div className= 'CstomerIcon'>
                        <FaClock/>
                      </div>
                    )}
                  </div> */}


// setTimeout(() => {
//       setIsTyping(true)

//       setTimeout(() => {
//         setIsTyping(false)
//         const staffReply = {
//           id: Date.now() + 1,
//           text: `sorry! I'm  just a demo`,
//           sender: 'staff',
//           time: new Date().toLocaleTimeString([], {
//                 hour: '2-digit', minute: '2-digit',
//                 hour12: true
//               })
//         }
//         setMessage(prev => [...prev, staffReply])
//       }, 2000)
//     })



// setTimeout(() => {
//       setMessage(prev => [
//         ...prev, {
//           text: `Soory! I'm just a demo`,
//           sender: 'staff',
//           time: new Date().toLocaleTimeString([], {
//             hour: '2-digit', minute: '2-digit',
//             hour12: true
//           })
//         }
//       ])
//     }, 1000)

// {msg.sender === 'staff' ? (
    // isTyping && (
    //   <p>Typing...</p>
    // )
//   ) : ''}


{/* <div className={`Typhhhing `}>
                  {msg.sender === 'staff' ? (
                    isTyping && (
                      <p>Typing...</p>
                    )
                  ): ''}
                  </div> */}