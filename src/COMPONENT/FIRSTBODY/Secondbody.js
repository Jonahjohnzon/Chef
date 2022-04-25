import React from 'react'

const Secondbody = () => {
  return (
    <div className=' h-full tablet:h-full laptop:h-full w-full flex flex-col justify-around font-nunito mt-20 ' id="Product" >
        <div className='flex flex-col items-center w-full my-5'>
            <div className='flex items-center text-xs  text-neutral'><div className='bg-orange w-20 h-0.5 mr-3'></div>PRODUCTS<div className='bg-orange w-20 h-0.5 ml-3'></div></div>
            <div className='font-bold text-xl desktop:text-3xl'>Our Products</div>
        </div>
        <div className='flex flex-col tablet:flex-row justify-between w-full  '>
            <div className='ml-3 laptop:ml-8 w-5/6 tablet:w-6/6 '>
                <div className='font-bold text-xl desktop:text-3xl'>The Online Examination Software</div>
                <div className='desktop:text-lg'>The online examination software is a software that spares teachers the stress of marking and grading examinations</div>
                <div className='font-bold text-lg mt-5 desktop:text-xl'>Features you need to know</div>
                <div className='flex tablet:whitespace-nowrap items-center mt-3 desktop:text-lg'><img src='/IMAGES/list.png'/><div>Create and manage examinations with ease</div></div>
                <div className='flex tablet:whitespace-nowrap items-center mt-3 desktop:text-lg'><img src='/IMAGES/list.png'/> <div>Watch students take examinations live</div></div>
                 <div className='flex tablet:whitespace-nowrap items-center my-3 desktop:text-lg'><img src='/IMAGES/list.png'/><div>Review any exam taken</div></div>
                </div>
            <div className='w-full flex tablet:justify-end'>
                <div className='h-80 flex justify-center laptop:w-5/6 w-full '>
                    <iframe src="IMAGES/video.mp4"  controls={true} className=' w-full desktop:w-[80%] h-60 border-solid border-white border-8 rounded-md shadow-[2px_2px_15px_#828282] cursor-pointer' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
                      
                    </iframe>
                </div>
                </div>
        </div>
    </div>
  )
}

export default Secondbody