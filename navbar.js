import React, {useState, useEffect} from 'react'
import MenuIcon from '@mui/icons-material/Menu';

import './navbar.css'





export default function NavbarUnUseed() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])



  
  return (
   
    <nav>
     
      {(toggleMenu || screenWidth > 630) && (
        
      <ul className="list">
         <img className='img' src="https://static.wixstatic.com/media/78eca0_db1801071b2e475aaea6f7e37e463628~mv2.png/v1/fill/w_125,h_89,al_c,q_85/LogoF.webp" alt=""/>
  
      <li className="items"><a className='link'  href="#whatwedo">What We Do</a></li>
      <li className="items"><a className='link' href='#whyus'>WHY US</a></li> 
     
    
      <li  className="items"><a className='link' href='#howitworks'>HOW IT WORKS</a> </li> 
    
      <li className="items"><a className='link' href='#testimonials'>testimonials</a></li>
      <li className="items"><a className='link' href='#contact'>contact</a></li>
      
    </ul>
      )}
      
      <div className='togglebar'>
        {!toggleMenu? <img className='img2' src="https://static.wixstatic.com/media/78eca0_db1801071b2e475aaea6f7e37e463628~mv2.png/v1/fill/w_125,h_89,al_c,q_85/LogoF.webp" alt=""/>:""}
        <button onClick={toggleNav} className="btn" ><MenuIcon/></button>
    
      </div>
    
      
      
    </nav>
     
      
  )
}