import React,{useEffect}from 'react';
import { FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import logo from './../assets/LOGO1FIXBLACK(2).png'
import { useScroll } from './../context/ScrollContext';

function Footer() {
  const handleSendToWhatsApp = () => {
    const textareaValue = document.getElementById('messageTextarea').value;
    const phoneNumber = '+27670174107';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      textareaValue
    )}`;
    window.open(whatsappUrl, '_blank');
  };
  const { scrollToFooter, setScrollToFooter } = useScroll();
  useEffect(() => {
    if (scrollToFooter) {
      const footerElement = document.getElementById('footer');
      footerElement.scrollIntoView({ behavior: 'smooth' });

      setScrollToFooter(false);
    }
  }, [scrollToFooter, setScrollToFooter]);

  return (
    <div className='bg-black text-[#949494] py-10 sm:py-20 font-titleFont'>
      <div id='footer' className='max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
        <div className='flex flex-col gap-5'>
          <img className='w-32' src={logo} alt='Logo' />
          <p className='text-white text-sm tracking-wide'>fixIT.com</p>
          <div className='flex gap-5 text-lg text-gray-500'>
            <FaInstagram className='hover:text-white duration-300 cursor-pointer' />
            <FaTwitter className='hover:text-white duration-300 cursor-pointer' />
            <FaWhatsapp className='hover:text-white duration-300 cursor-pointer' />
          </div>
        </div>
        <div className='text-white'>
          <h2 className='text-2xl font-semibold mb-4'>Locate Us</h2>
          <div className='text-base flex flex-col gap-1'>
            <p>Zeerust , 018</p>
            <p>Phone: 067 017 4107</p>
            <p>e-mail: Fixits018@gmail.com</p>
          </div>
        </div>
        <div className='text-white'>
          <h2 className='text-2xl font-semibold mb-4'>
            Enquire On Whatsapp <span><FaWhatsapp /></span>
          </h2>
          <div className='flex flex-col gap-2'>
            <textarea
              id='messageTextarea'
              rows={2}
              cols={40}
              className='w-full'
              placeholder='Your message...'
            ></textarea>
            <button
              className='bg-green-500 rounded text-white text-center flex items-center p-2'
              type='button'
              onClick={handleSendToWhatsApp}
            >
              Send to <FaWhatsapp className='ml-2' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
