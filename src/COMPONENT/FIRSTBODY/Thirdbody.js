import React from 'react'

const Thirdbody = () => {
  return (
    <div className='flex flex-col-reverse laptop:flex-row laptop:h-full items-center justify-around bg-yellow bg-opacity-20 font-nunito' id="About" >
        <img src='/IMAGES/OBJECTS.png' className='w-full laptop:w-3/6 scale-75' />
        <div className='w-full text-center laptop:text-left  flex flex-col items-center'>
            <div className='laptop:w-full flex items-center desktop:text-xl justify-center laptop:justify-start mt-5 laptop:mt-0 desktop:w-4/6'><div className='bg-orange w-20 h-0.5 mr-3 laptop:hidden'></div>ABOUT US <div className='bg-orange w-20 h-0.5 ml-3'></div></div>
            <div className='laptop:w-full font-bold text-2xl desktop:text-3xl mt-2 desktop:w-4/6'>Who We Are</div>
            <div className='laptop:w-full ml-2 mt-2 desktop:w-4/6  desktop:text-lg'>We are an Edtech company providing technologi cal solutions to educational related problems. We are deeply concerned with the educational ecosystem and that is why we make use of various technologies at our disposal to make education easier and fun.</div>
        </div>
    </div>
  )
}

export default Thirdbody