import React, { useState } from 'react';
import { FaBars,FaTimes } from 'react-icons/fa';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40'>
    <div className='max-w-[600px] absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5'>
    <div className="bg-blue-500 p-4">
      <div className="flex justify-between items-center">
        <div className="md:hidden">
        </div>
        <div className=''>
          <ul className="md:flex space-x-4">
            <li className="md:py-2">
              <a href="#" className="text-white">Home</a>
            </li>
            <li className="md:py-2">
              <a href="#" className="text-white">About</a>
            </li>
            <li className="md:py-2">
              <a href="#" className="text-white">Services</a>
            </li>
            <li className="md:py-2">
              <a href="#" className="text-white">Contact</a>
            </li>
          </ul>
        </div>       
      </div>
    </div>    
    </div>
      </div>
  );
};

export default MobileNav
