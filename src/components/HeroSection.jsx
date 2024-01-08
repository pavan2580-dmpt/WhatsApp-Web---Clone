import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
function HeroSection() {
  return (
    <>
     <div className="her-section-container w-full h-full flex flex-col gap-3 items-center justify-center">
            <FaWhatsapp size={70} color='gray'/>
            <p className='text-gray-700'>Use WhatsApp-Clone In Browser</p>
            <p>Send and reecive messages with out keeping your mobile online.</p>
        </div>
    </>
  )
}

export default HeroSection