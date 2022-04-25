import React from 'react'

const Footer = () => {
  return (
    <div className='h-96 w-full bg-ftcolor flex justify-center '>
        <div className='flex flex-col w-2/3 justify-around items-center'>
            <div><img src="/IMAGES/illumino.png"/></div>
            <ul className='flex flex-col tablet:flex-row items-center w-full justify-between text-white text-lg'>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Accessiblity Statement</li>
                <li>Careers</li>
                
            </ul>
            <div className='w-full flex justify-center'>
                <ul className='flex items-center justify-around w-full tablet:w-4/6'>
                    <li><img src="/IMAGES/ICONS/fb.svg"/></li>
                    <li><img src="/IMAGES/ICONS/link.svg"/></li>
                    <li><img src="/IMAGES/ICONS/insta.svg"/></li>
                    <li><img src="/IMAGES/ICONS/twit.svg"/></li>
                </ul>
            </div>
            <div className='w-full flex justify-center items-center text-center text-white text-sm'>
                <div>&copy; 2020 illumino Technologies. All rights reserved</div>
            </div>
        </div>
    </div>
  )
}

export default Footer