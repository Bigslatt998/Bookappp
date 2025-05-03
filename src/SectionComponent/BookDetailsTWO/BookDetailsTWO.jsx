import React,{useContext} from 'react'
import './BookDetailsTWO.css'
import { ThemeContext } from '../../ThemeProvider'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faXmark} from '@fortawesome/free-solid-svg-icons';
const BookDetailsTWO = () => {
    const Mark = <FontAwesomeIcon icon={faXmark}/>
  
  const {isDarkMood, onbook, ClostBookDetails,
                  selectedServicesTWO, Content, 
                  setSelectedServices, 
                  setIsBookBox, isBookBoxTWO} = useContext(ThemeContext)
  return (
    <>
    {isBookBoxTWO && (
      <div className='BookDetailsContainer'>
      <div className="BookDetails">
          <i onClick={ClostBookDetails}>{Mark}</i>
        {/* </> */}
          <p>{selectedServicesTWO.First}</p>
      </div>
  </div>
)}
</>
  )
}

export default BookDetailsTWO