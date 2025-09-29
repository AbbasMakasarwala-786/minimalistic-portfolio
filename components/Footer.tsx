import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data';

const Footer = () => {
const currentDate = new Date(); // Creates a new Date object representing the current date and time
const currentYear = currentDate.getFullYear();
  return (
    <div className=' w-full' id='contact'>
       {/* <div className='w-full absolute left-0 translate-x-[-100%] -bottom-72 min-h-96 bg-black-100'>
        <img 
        src='/footer-grid.svg'
        alt="grid"
        className='w-full h-full opacity-75'
        />
       </div> */}
        
        <div className='flex flex-col items-center text-bold'>
        <h1 className='heading lg:max-w-[45vw] overflow-visible'>Ready to take <span className='text-purple'> your </span> 
        presence to the next level ?</h1>
        <p className='text-white-200 md:mt-10 my-5 text-center' >  
            <h3>Reach out to me today and let&apos;s discuss how I can help you achive your goals.</h3> 
        </p>
        <a href="mailto:abbasmakasarwala1@gmail.com">
            <MagicButton title="Lets get in touch" icon={<FaLocationArrow />} position='right'></MagicButton>
        </a>
        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-center items-center'>    
            <p className='md:text-base text-sm md:font-normal font-light' >Copyright © {currentYear} Abbas</p>
        </div>
        
    </div>
  )
}

export default Footer