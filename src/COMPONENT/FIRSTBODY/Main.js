import React,{useState} from 'react'
import { motion,AnimatePresence } from 'framer-motion'

const Main = () => {
const [slide,setSlide]=useState(false)
    const header={
        show:{
            opacity:1,
            x:0,
            transition:{
              type:"tween"  ,
              stiffness:400,
              duration:1.5
            }
        },
        hidden:{
      opacity:0,
      x:-500
        },
        exit:{
            x:-500,
            opacity:0,
            transition:{
            type:"tween",
            stiffness:400,
             duration:1.5}
           
         
        }
    }
    
    setInterval(()=>{
        setSlide(!slide)
    },30000)
  return (
      <AnimatePresence>
    <div className='w-full h-[700px] m-0 p-0 text-white flex  justify-center tablet:justify-start tablet:items-center ' >
       {slide&& <motion.div className='laptop:ml-16  h-4/5 tablet:h-3/5  justify-around items-center laptop:items-start flex flex-col w-[95%]' 
        variants={header}
        initial="hidden"
        animate="show"
        > 
        <div className='flex items-center'>
        <div className='w-full  flex flex-col items-center laptop:items-start'>
        <div className=' font-bold text-3xl tablet:text-5xl laptop:w-5/6 text-center laptop:text-left' >
            <div>Optimising Education</div>
            <div className='tablet:my-5 my-1'>One tech at a time</div>
        </div>
        <div className=' font-normal text-sm tablet:text-lg tablet:w-1/2 laptop:w-5/6 text-center laptop:text-left '>
            <div>The education industry is one of the most influential industries in the world today. However, some of the stress associated with education is unproductive and unnecessary.</div>
            <div className='tablet:my-5 my-2'>That’s why we are here.</div>
        </div>
        <div className=' bg-orange w-44 h-16 flex items-center justify-center font-bold rounded-lg  ml-5 cursor-pointer'>Learn More</div>
        </div>
         <div className='w-full hidden laptop:flex'>
        <div><img src='/IMAGES/Tab2.png'/></div>
        </div>
       
        </div>
        </motion.div>}
       {slide|| <motion.div className='laptop:ml-16  h-4/5 tablet:h-3/5  w-[95%] justify-around items-center laptop:items-start flex flex-col'
          variants={header}
          initial="hidden"
          animate="show"> 
          <div className='flex items-center'>
              <div className='w-full flex flex-col items-center laptop:items-start'>
        <div className=' font-bold text-3xl tablet:text-5xl laptop:w-5/6 text-center laptop:text-left' >
            <div>School with ease, Save  </div>
            <div className='tablet:my-5 my-1'>the Trees and Enjoy Learning</div>
        </div>
        <div className=' font-normal text-sm tablet:text-lg laptop:w-5/6 text-center laptop:text-left '>
            <div>No’Books is a tablet that eases the school experience by putting all your notebooks and hard copy textbooks into one device that you can carry about. </div>
            <div className='tablet:my-5 my-2'>Oh yes, it helps control environmental pollution and climate change. Who says going to school is scam?.</div>
        </div>
        <div className='flex items-center laptop:justify-start h-12 w-full tablet:w-3/6 laptop:w-2/3 '>
       <input type='email' className='w-full h-full rounded-l-lg placeholder:pl-3 text-xs' placeholder='Enter email to pre-order'/> <div className=' bg-orange w-4/6 h-full flex items-center justify-center font-bold rounded-lg -ml-3 text-xs'>PRE ORDER NOW</div></div>
       </div>
       <div className='w-full hidden laptop:flex'>
       <div><img src='/IMAGES/Tab.png' className=' '/></div>
       </div>
       
       </div>
        </motion.div>}
    </div>
    </AnimatePresence>
  )
}

export default Main