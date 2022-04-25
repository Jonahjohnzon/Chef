import React from 'react'
import Faqs from './BODY/Faqs'
import {useState} from 'react'
import Info from './BODY/Inform'
function Sixthbody() {
    const [show,setShow]=useState(false)
    const [data,setData]=useState("")
    const change=(id)=>{
setShow(!show)
if(id.target.id==1){
    setData(Info[0].data)
}
else if(id.target.id==2){
    setData(Info[1].data)
}
else if(id.target.id==3){
    setData(Info[2].data)
}
else if(id.target.id==4){
    setData(Info[3].data)
}
}

  return (
   
    <div className='mt-20' id="FAQs" >
    <div className='relative text-center'>
        <div>
        <div className='flex flex-col items-center w-full'>
        <div className='flex items-center text-xs  text-neutral'><div className='bg-orange w-20 h-0.5 mr-3 '></div>FAQs<div className='bg-orange w-20 h-0.5 ml-3'></div></div>
        <div className='font-bold text-xl desktop:text-3xl mt-5'>Frequently Asked Questions</div>
        </div>
        </div >
        <div className='w-full flex flex-col items-center mt-10 relative'>
          {show&&<Faqs data={data} close={show=>setShow(show)}/>}  
        <div className='flex w-2/3 h-14 justify-between items-center shadow-[2px_2px_10px_#828282] text-sm tablet:text-lg rounded-lg mt-10' id={1} onClick={change}>
            <img src="/IMAGES/bx.png" className='ml-5' /> How can I get the software?<img src="IMAGES/dd.png" className='mr-5'/>
        </div>
        <div className='flex w-2/3 h-14 justify-between items-center shadow-[2px_2px_10px_#828282] text-sm tablet:text-lg rounded-lg mt-10' id={2} onClick={change}>
            <img src="/IMAGES/bx.png" className='ml-5'/> Is the software free?<img src="IMAGES/dd.png" className='mr-5'/>
        </div>
        <div className='flex w-2/3 h-14 justify-between items-center shadow-[2px_2px_10px_#828282] text-sm tablet:text-lg rounded-lg mt-10' id={3} onClick={change}>
            <img src="/IMAGES/bx.png" className='ml-5'/> How much is the software?<img src="IMAGES/dd.png" className='mr-5'/>
        </div>
        <div className='flex w-2/3 h-14 justify-between items-center shadow-[2px_2px_10px_#828282] text-sm tablet:text-lg rounded-lg mt-10' id={4} onClick={change}>
            <img src="/IMAGES/bx.png" className='ml-5'/> is it safe?<img src="IMAGES/dd.png" className='mr-5'/>
        </div>
        <div className='absolute'>

        </div>
        
        </div>
      
    </div>
</div>
  )
}


export default Sixthbody