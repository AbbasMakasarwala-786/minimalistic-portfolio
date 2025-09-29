import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/moving-border'

const Experience = () => {
  return (
    <div className='py-20 flex flex-wrap' id="Experience">
        <h1 className='heading'>  
            My 
            <span className='text-purple flex flex-col items-center justify-center'> Work Experience </span>
        </h1>
        <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
          {workExperience.map((card) => (
            <Button 
              key={card.id} 
              duration={Math.floor(Math.random() * 10000) + 1000} 
              borderRadius='1.75rem' 
              className='flex-1 text-white border-neutral-200 dark:border-slate-800'
            >
              <div className='flex flex-col p-3 py-6 md:p-5 lg:p-10 gap-4'>
                {/* Company name and role in header */}
                <div className='flex lg:flex-row flex-col lg:items-center lg:justify-between gap-2'>
                  <div className='flex items-center gap-3'>
                    <img 
                      src={card.thumbnail} 
                      alt={card.thumbnail} 
                      className='lg:w-16 md:w-14 w-12 rounded-lg' 
                    />
                    <div className='flex flex-col'>
                      <h2 className=' text-base md:text-xl font-bold text-white'>
                        {card.company}
                      </h2>
                    </div>
                  </div>
                  <div className='lg:text-right'>
                    <h3 className='text-start md:text-lg font-semibold text-purple-300'>
                      {card.title}
                    </h3>
                  </div>
                </div>
                
                {/* Description below */}
                <div>
                  <p className='text-white-100 text-sm md:text-base leading-relaxed text-justify'>
                    {card.desc}
                  </p>
                </div>
              </div>
            </Button>
          ))}
        </div>
    </div>
  )
}

export default Experience