import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../assets/LOGO1FIX.png'
import { useScroll } from './../context/ScrollContext';

function Header() {
  const { setScrollToFooter } = useScroll();

  const handleContactUsClick = () => {
    setScrollToFooter(true);
  };
  return (
    <div className='w-full min-h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50'>
      <div className='max-w-screen-lg h-full mx-auto flex flex-wrap items-center justify-between p-4'>
        <div className='w-full mb-4 md:w-auto md:mb-0'>
          <Link to='/fix'><img className="max-w-full max-h-10" src={logo} alt="logo" /></Link>
        </div>
        <div className='w-full md:w-auto md:flex-grow md:flex md:justify-end'>
          <ul className='flex flex-wrap items-center gap-3'>
            <li className='text-black font-bold hover:text-white hover:bg-black cursor-pointer duration-300'><Link to="/BookRepair">BOOK A REPAIR</Link></li>
            <li className='text-black font-bold hover:text-white hover:bg-black cursor-pointer duration-300' onClick={handleContactUsClick}>FIND US</li>
            <li className='text-black font-bold hover:text-white hover:bg-black cursor-pointer duration-300' onClick={handleContactUsClick}>CONTACT US</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
