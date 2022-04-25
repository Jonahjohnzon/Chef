import { data } from 'autoprefixer'
import React from 'react'

const Fifthbody = ({data}) => {
  return (
    <div>
        <div>
        <div className='flex flex-col items-center w-full'>
            <div className='flex items-center text-xs  text-neutral'><div className='bg-orange w-20 h-0.5 mr-3 '></div>TEAM<div className='bg-orange w-20 h-0.5 ml-3'></div></div>
            <div className='font-bold text-xl desktop:text-3xl mt-5'>Meet Our Smart Team</div>
        </div>
            <div>
                <div className='w-full flex justify-around items-center mt-6'>
                    <div className='w-4/6 laptop:w-2/6 h-80 shadow-[2px_2px_15px_#828282] rounded-lg bg-cover relative flex flex-col justify-around items-center' >
                        <div className='w-full h-3/6 bg-orange absolute top-0 '></div>
                        <div className='w-40  mt-10 relative z-10' >
                            < img src={data.Image} className="" />
                        </div>
                        <div className='font-bold text-center text-lg'> 
                            <div>{data.Position}</div>
                            <div>{data.name}</div>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
         <div></div>
    </div>
  )
}

export default Fifthbody