import React from 'react'

const Faqs = ({data,close}) => {
  return (
    <div className='h-80 w-80 bg-white absolute top-5 shadow-[2px_2px_10px_#828282] flex justify-center items-center text-lg text-center flex-col'><div className='relative w-full h-full'>
        <img src="IMAGES/ICONS/close.png" className=' absolute top-5 right-3' onClick={()=>close(false)}/>
        </div>
        <div className='h-full'>{data}</div>
        </div>
  )
}

export default Faqs