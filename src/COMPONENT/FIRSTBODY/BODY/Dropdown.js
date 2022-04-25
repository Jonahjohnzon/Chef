import React from 'react'
import { Link } from 'react-scroll'
const Dropdown = ({dropdown,set}) => {
    
  return (
    <div
    className=' absolute bg-white h-80 w-40 top-12 right-0 tablet:hidden text-blue font-bold shadow-[2px_2px_15px_#828282] ' >
        <ul className='flex  flex-col h-full justify-around items-center'>
        <Link to="Home" smooth={true} spy={true} duration={500} offset={-70}> <li onClick={()=>dropdown(!set)}>Home</li></Link>
        <Link to="Product" smooth={true} spy={true} duration={500} offset={-70}> <li onClick={()=>dropdown(!set)}>Product</li></Link>
        <Link to="About" smooth={true} spy={true} duration={500} offset={-70}> <li onClick={()=>dropdown(!set)}>About Us</li></Link>
        <Link to="FAQs" smooth={true} spy={true} duration={500} offset={-70}> <li onClick={()=>dropdown(!set)}>FAQs</li></Link>
        <Link to="Contact" smooth={true} spy={true} duration={500} offset={-70}>  <li onClick={()=>dropdown(!set)}>Contact</li></Link>
            
        </ul>
    </div>
  )
}

export default Dropdown