import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from './ui/text-generate-effect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '@/data';

const Hero = () => {
  return (
    <div className='pb-20 pt-30'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 
        md:-top-20 h-screen' fill="white" />
        
        <Spotlight className='top-10 left-full h-[80vh]
        w-[50vw] ' fill="purple" />
        
        <Spotlight className="top-28 left-80 h-[80vh]
        w-[50vw]" fill="blue" />
      </div>
      
      <div className="absolute top-0 left-0 flex h-screen 
      w-full items-center justify-center bg-white 
      dark:bg-black-100 dark:bg-grid-white/[0.0000003] ">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
        
      </div>
      <div className='flex justify-center relative my-20 z-10 '>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest text-xs
           text-center text-blue-100 max-w-80
           '>
            Dynamic Web Magic with Next.js
          </h2>
          <TextGenerateEffect 
          className='text-center text-[30px] md:text-5xl lg:text-6xl'
          words='Building Experiences that Matter, Powered by Intelligence.'
          />
          <p className='text-center md:tracking-wider mb-4 md:text-lg lg:text-2xl inline'>Hi, I'm Abbas Saifee Makasarwala, an AI/ML Engineer,Data Science Entusiast with a passion for Robotics.</p>
          
          <div className='flex items-center pt-4 pb-4 justify-center md:gap-3 gap-6'>
                      {socialMedia .map((profile) => (
                          <div key={profile.id} className='w-10 h-10 flex cursor-pointer justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-100 rounded-lg border border-black-300'>
                          <a href={profile.link}>
                          <img src={profile.img}  
                          width={20} height={20}
                          /></a>
                          </div>
                      ))}
          </div>



          <a href='#about'>
            <MagicButton 
               title="Show my work"
               icon={<FaLocationArrow />}
               position= 'right'
            />
          </a>
        
        </div>
      </div>
    </div>
  )
}

export default Hero