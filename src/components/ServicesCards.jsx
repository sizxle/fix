import React from 'react';
import brokenPhone from './../assets/iphone1.png';
import samsung from './../assets/pngegg(1).png'
import iphone2 from './../assets/pngegg.png'

function ServicesCards() {
  return (
    <div className='mx-2 md:mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center'>
      <div className='w-full'>
        <div className='w-full h-96 cursor-pointer'>
          <img className='h-full object-cover hover:scale-110 duration-500' src={brokenPhone} alt='phonea' />
        </div>
        <div className='w-full p-2'>
          <h2>Iphone Repair</h2>
          <ul>
            <li>Battery Replacement</li>
            <li>Screen Replacement</li>
            <li>Charging port Replacement</li>
            <li>Mic Replacement</li>
          </ul>
        </div>
      </div>
      <div className='w-full'>
        <div className='w-full h-96 cursor-pointer'>
          <img className='h-full object-cover hover:scale-110 duration-500' src={samsung} alt='phonea' />
        </div>
        <div className='w-full p-2'>
          <h2>Iphone Repair</h2>
          <ul>
            <li>Battery Replacement</li>
            <li>Screen Replacement</li>
            <li>Charging port Replacement</li>
            <li>Mic Replacement</li>
          </ul>
        </div>
      </div>
      <div className='w-full'>
        <div className='w-full h-96 cursor-pointer'>
          <img className='h-full object-cover hover:scale-110 duration-500' src={iphone2} alt='phonea' />
        </div>
        <div className='w-full p-2'>
          <h2>Iphone Repair</h2>
          <ul>
            <li>Battery Replacement</li>
            <li>Screen Replacement</li>
            <li>Charging port Replacement</li>
            <li>Mic Replacement</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ServicesCards;
