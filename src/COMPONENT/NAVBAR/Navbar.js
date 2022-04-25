import React,{useState}from 'react'
import Dropdown from '../FIRSTBODY/BODY/Dropdown'
import {Link} from 'react-scroll'
const Navbar = () => {
const [drop,setDrop]=useState(false)
const dropdown=()=>{
  setDrop(!drop)
}
  return (
    <div className=' w-full h-16  flex justify-between text-white items-center font-nunito m-0 p-0 relative' id="Home">
      {drop&&<Dropdown dropdown={drop=>setDrop(drop)} set={drop}/>}
      <div className='w-full ml-4 '><img src='./IMAGES/illumino.png ' alt='logo' className='hidden tablet:block ' />
      <img src='/IMAGES/mobilelogo.png' alt='logo' className='tablet:hidden  w-12' /> </div>
      <ul className='tablet:flex  justify-around w-full hidden  '>
       <Link to="Home" smooth={true} spy={true} duration={500} offset={-70}> <li className=' cursor-pointer hover:text-orange'>Home</li></Link>
       <Link to="Product" smooth={true} spy={true} duration={500} offset={-70}><li className=' cursor-pointer hover:text-orange'>Product</li></Link>
       <Link to="About" smooth={true} spy={true} duration={500} offset={-70}><li className=' cursor-pointer hover:text-orange'>About Us</li></Link>
       <Link to="FAQs" smooth={true} spy={true} duration={500} offset={-70}><li className=' cursor-pointer hover:text-orange'>FAQs</li></Link>
       <Link to="Contact" smooth={true} spy={true} duration={500} offset={-70}> <li className=' cursor-pointer hover:text-orange'>Contact Us</li></Link>

      </ul>
      <img src='/IMAGES/menu.png ' className=' tablet:hidden w-8 mr-4' alt='menu'  onClick={dropdown}/>
    </div>
  )
}

export default Navbar