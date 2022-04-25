import React from 'react'
import Fifthbody from './Fifthbody'
import Team from './Data'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'

const Fifth = () => {
    const [header,setheader]=useState('')
const[data,setData]=useState(1)
const active=data
const firstdata=Team[0]
const seconddata=Team[1]
const thirddata=Team[2]
const change=()=>{
    if(data<=3 && data>1){
        setData(data-1)
    setheader({
        show:{
            opacity:1,
            x:0,
            transition:{
              type:"tween"  ,
              stiffness:200,
              duration:1.6
            }
        },
        hidden:{
      opacity:0,
      x:+500
        },
  
    })}
        else{
            setData(data)
        }
}
const change1=()=>{
    if(data<3 && data>0){
    setData(data+1)
    setheader(
        {
            show:{
                opacity:1,
                x:0,
                transition:{
                  type:"tween"  ,
                  stiffness:200,
                  duration:1.6
                }
            },
            hidden:{
          opacity:0,
          x:-500
            },
      
        }
    )
}
    else{
        setData(data)
    }
    
}

  return (
    <div className='flex items-center justify-around'>
        <div className='w-2/6 flex justify-end'>
        <div className='w-7 h-7 bg-orange rounded-full flex justify-center items-center cursor-pointer' onClick={change}>
            <img src='/IMAGES/ICONS/right.png' className='scale-50 rotate-180'></img>
        </div >
        </div>
        <div className='w-full h-96'>
        {active==1 &&<motion.div className='w-full h-full'
         variants={header}
         initial="hidden"
         animate="show"
         exit="exit">
        <Fifthbody data={firstdata} />
        </motion.div>}
        {active==2 && <motion.div className='w-full h-full'
         variants={header}
         initial="hidden"
         animate="show">
        <Fifthbody data={seconddata}/>
        </motion.div>}
         {active==3 &&<motion.div className='w-full h-full' 
          variants={header}
          initial="hidden"
          animate="show">
        <Fifthbody data={thirddata}/>
        </motion.div>}
        </div>
        <div className='w-2/6'>
        <div className='w-7 h-7 bg-orange rounded-full flex justify-center items-center cursor-pointer' onClick={change1}>
            <img src='/IMAGES/ICONS/right.png' className='scale-50'></img>
        </div >
        </div>
    </div>
  )
}

export default Fifth