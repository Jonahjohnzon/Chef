import React from 'react'

const Contact = () => {
  return (
    <div className='my-20' id="Contact">
          <div className='flex flex-col items-center w-full'>
            <div className='flex items-center text-xs  text-neutral'><div className='bg-orange w-20 h-0.5 mr-3 '></div>CONTACT<div className='bg-orange w-20 h-0.5 ml-3'></div></div>
            <div className='font-bold text-xl desktop:text-3xl '>Contact</div>
        </div>
        <div className='mt-10 flex flex-col tablet:flex-row items-center '>
            <div className='w-full flex flex-col items-center mb-10'>
                <div className='flex   laptop:w-3/6 w-full ml-5'>
                    <img src="/IMAGES/ICONS/location.png"/>
                    <div className='ml-5'><div className='font-bold text-lg'>Location</div>
                    <div>ikeja, Lagos</div></div>
                </div>
                <div className='flex  laptop:w-3/6 w-full ml-5 mt-5'>
                    <img src="/IMAGES/ICONS/email.png"/>
                    <div className='ml-6'><div className='font-bold text-lg'>Email</div>
                    <div>jonahjohnzon@gmail.com</div></div>
                </div>
                <div className='flex  laptop:w-3/6 w-full ml-5 mt-5'>
                    <img src="/IMAGES/ICONS/call.png" />
                    <div className='ml-5'><div className='font-bold text-lg'>Call</div>
                    <div>+234-810-6908-991</div></div>
                </div>
            </div>
            <div className='w-full  flex justify-center'>
                <div className='laptop:w-3/6 w-5/6 h-96 shadow-[2px_2px_15px_#828282] flex justify-center items-center rounded-lg'>
                    <form className='flex flex-col w-4/6 h-5/6 justify-around items-center'>
                        <label htmlFor="name">Name</label>
                        <input type="text" className='border-neutral border-[2px] border-solid rounded-lg' id='name'/>
                        <label htmlFor="email">Email</label>
                        <input type="email" className='border-neutral border-[2px] border-solid rounded-lg' id='email'/>
                        <label htmlFor="message">Message</label>
                        <textarea rows="5" col="5" className='border-neutral border-[2px] border-solid rounded-lg' id='message'/>
                        <div className=' bg-orange w-2/6 h-8 flex items-center justify-center hover:bg-transparent border-2 border-solid border-orange hover:text-orange rounded-lg  cursor-pointer'>Submit</div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact