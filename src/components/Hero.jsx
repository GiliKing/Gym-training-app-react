import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gab-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
        <div className='flex flex-col gap-5'>
            <p>It's time to get</p>
            <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Christian<span className='text-blue-400'>Fitness</span></h1>
        </div>
        <p className='text-sm md:text-base font-light my-4'>I hereby acknowledgement that I may become unbelievably <span className='text-blue-400 font-medium'>swolenormous</span> and accept all risks of becoming the local <span className='text-blue-400 font-medium'>mass montrosity</span>, afflicted with severe body dismorphia, unable to fit through doors.</p>
        <Button func={() => {
          window.location.href = "#generate"
        }} text={"Accept & Begin"}></Button>
    </div>
  )
}
