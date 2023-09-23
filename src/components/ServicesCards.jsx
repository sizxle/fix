import React from 'react'
import brokenPhone from './../assets/iphone1.png'

function ServicesCards() {
  return (
    <div className='mx-10 grid grid-cols-3 gap-4 justify-center'>
      <div>
        <div className='w-full h-96 cursor-pointer'>
          <img className=' h-full object-cover hover:scale-110 duration-500' src={brokenPhone} alt='phonea'/>
        </div>
        <div className='w-fit px-2 py-2'>
          <div>
            <h2>Iphone  Repair</h2>
          </div>
          <div>
            <ul>
              <li>Battery Replacement</li>
              <li>Screen Replacement</li>
              <li>Charging port Replacement</li>
              <li>Mic Replacement</li>
            </ul>
          </div>
        </div>
      </div>
     <div>
      <div className='w-full h-96 cursor-pointer'>
          <img className=' h-full object-cover hover:scale-110 duration-500' src={brokenPhone} alt='phonea'/>
          <div className='w-fit px-2 py-2'>
          <div>
            <h2>Iphone  Repair</h2>
          </div>
          <div>
            <ul>
              <li>Battery Replacement</li>
              <li>Screen Replacement</li>
              <li>Charging port Replacement</li>
              <li>Mic Replacement</li>
            </ul>
          </div>
        </div>
        </div>
     </div>
     <div>
      <div className='w-full h-96 cursor-pointer'>
          <img className=' h-full object-cover hover:scale-110 duration-500' src={brokenPhone} alt='phonea'/>
        </div>
        <div className='w-fit px-2 py-2'>
          <div>
            <h2>Iphone  Repair</h2>
          </div>
          <div>
            <ul>
              <li>Battery Replacement</li>
              <li>Screen Replacement</li>
              <li>Charging port Replacement</li>
              <li>Mic Replacement</li>
            </ul>
          </div>
        </div>
     </div>


    </div>
  )
}

export default ServicesCards