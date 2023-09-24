import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='w-full min-h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50'>
      <div className='max-w-screen-lg h-full mx-auto flex flex-wrap items-center justify-between p-4'>
        <div className='w-full mb-4 md:w-auto md:mb-0'>
          <img className="w-28" src='#' alt="logo" />
        </div>
        <div className='w-full md:w-auto md:flex-grow md:flex md:justify-end'>
          <ul className='flex flex-wrap items-center gap-3'>
            <li className='text-black font-bold hover:text-white hover:bg-black cursor-pointer duration-300'><Link to="/BookRepair">BOOK A REPAIR</Link></li>
            <li className='text-black font-bold hover:text-white hover:bg-black cursor-pointer duration-300'>FIND US</li>
            <li className='text-black font-bold hover:text-white hover:bg-black cursor-pointer duration-300'>CONTACT US</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
