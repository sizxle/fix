import React from 'react'
import  {FaInstagram,FaTwitter, FaWhatsapp} from "react-icons/fa"

function Footer() {
    const handleSendToWhatsApp = () => {
        const textareaValue = document.getElementById('messageTextarea').value;
        const phoneNumber = '+27769314241';
        
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(textareaValue)}`;
        
        // Open WhatsApp in a new tab/window with the pre-filled message.
        window.open(whatsappUrl, '_blank');
      }
  return (
    <div className='bg-black text-[#949494] py-20 font-titleFont '>
        <div className='max-w-screen-xl mx-auto grid grid-cols-4'>
            <div className='flex flex-col gap-7'>
                <img className='w-32' src='#' alt='Logo'/>
                <p className='text-white text-sm tracking-wide'> ShakesRepair.com</p>
                <div className='flex gap-5 text-lg text-gray-500' >
                    <FaInstagram className='hover:text-white duration-300 cursor-pointer'/>
                    <FaTwitter className='hover:text-white duration-300 cursor-pointer'/>
                    <FaWhatsapp className='hover:text-white duration-300 cursor-pointer'/>
                </div>
            </div>
            <div>
                <h2 className='text-2xl font-semibold text-white mb-4'>Locate Us</h2>
                <div className='text-base flex flex-col gap-1'>
                    <p> Zeerust, 018 </p>
                    <p>Phone: 065 000 0000</p>
                    <p>e-mail: shakesrepair@gmail.com</p>
                </div>
            </div>
            <div >
                <h2 className='text-2xl font-semibold text-white mb-4'>Enquire On Whatsapp <span><FaWhatsapp/></span></h2>
                <div className='flex flex-col gap-2'>
                    <textarea id='messageTextarea' rows={2} cols={40} ></textarea>
                    <button className='bg-green-500 rounded text-white text-center flex items-center p-2' type='button' onClick={handleSendToWhatsApp}>
                        Send to <FaWhatsapp className='ml-2' />
                    </button>
                </div>

            </div>
            
        </div>
    </div>
  )
}

export default Footer;