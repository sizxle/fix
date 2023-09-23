import React from 'react'
import ServicesCards from './ServicesCards'

function Services() {
  return (
    <div className='py-10'>
        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>Services Offered </h1>
            <span className='w-20 h-[3px] bg-black'></span>
            <p className='max-w-[700px] text-gray-600 text-center'> WE OFFER REPAIR SERVICES AND STUFF.......</p>
        </div>
        <div className='max-w-screen-lg mx-auto py-10'>
            <ServicesCards/>
        </div>
    </div>
  )
}

export default Services