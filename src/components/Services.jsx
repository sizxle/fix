import React,{useEffect} from 'react'
import ServicesCards from './ServicesCards'
import './../styles/styles.css'

function Services() {
  useEffect(() => {
    const serviceItems = document.querySelectorAll('.service-item');

    serviceItems.forEach((item, index) => {
      item.classList.add('animate-bounce');
      item.classList.add(`delay-${index * 100}ms`); // Add a delay to each item
    });
  }, []);
  return (
    <div className='py-10'>
        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>Services Offered </h1>
            <span className='w-20 h-[3px] bg-black'></span>
            <p className='max-w-[700px] text-gray-600 text-center'> WE OFFER REPAIR SERVICES FOR YOUR SMARTPHONE , OUR EXPERTS CAN BREATHE NEW LIFE INTO YOUR GADGET</p>
            <div >
              <ul className='flex flex-wrap gap-4' id="service-list">
                <li class="service-item">BATTERY REPLACEMENT</li>
                <li class="service-item">SCREEN REPLACEMENT</li>
                <li class="service-item">CHARING PORT </li>
                <li class="service-item">MIC</li>
                <li class="service-item">& MANY MORE</li>
              </ul>
            </div>
        </div>
        <div className='max-w-screen-lg mx-auto py-10'>
            <ServicesCards/>
        </div>
    </div>
  )
}

export default Services