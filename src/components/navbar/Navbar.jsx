import React from 'react'
import { useState } from 'react'
import {FaQuestionCircle} from 'react-icons/fa'
import {AiOutlineMenu, AiOutlineCloseSquare} from 'react-icons/ai'
import './navbar.css'
import img1 from '../../images/image_1.webp'
import Typed from 'typed.js'

function Navbar() {
  const [opt, setOpt] = useState(false);
  const handleNav = () =>{
    setOpt(!opt);
  }

  // Create reference to store the DOM element containing the animation
  const elem = React.useRef(null);
  React.useEffect(() =>{
    const typed = new Typed(elem.current, {
      strings: ['<b>From Hacker to Venture Capitalist</b>', '<b>Changing the Startup Landscape</b>', '<b>"Visionary Entrepreneur and Startup Guru" ~ <i>Paul Graham</></b>'],
      typeSpeed: 50,
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    }
  }, []);
  
  return (
    <div id='Home' className='menu-bar'>
      <img src={img1} alt='Paul Graham profile' />
      <div className='menu'> 
        <button className='nav-button' onClick={handleNav}>{!opt?<AiOutlineMenu />:<AiOutlineCloseSquare />}</button>
        <ul className={opt?'open':'closed'}>
          <li><a href='#Profile'>Profile</a></li>
          <li><a href='#Achievements'>Achievements</a></li>
          <li><a href='#Quotes'>Quotes</a></li>
          <li><a href='#Photos'>Photos Gallery</a></li>
          <li><a href='#Refrennces'>References</a></li>
          <li><a href='/'><FaQuestionCircle /></a></li>
        </ul>
        <div className='txt'>
          <span ref={elem} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
