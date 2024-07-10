import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#ffffff]'>UP<span className='w-full text-3xl font-bold text-[#c72323]'>SKILL</span></h1>
      <ul className='hidden md:flex'>
        <li className='p-5 font-bold hover:bg-purple-900 cursor-pointer rounded-full px-6 py-5'>Home</li>
        <li className='p-5 font-bold hover:bg-purple-900 cursor-pointer rounded-full px-6 py-5'><a href="#about">About</a></li>
       
        <li className='p-5 font-bold hover:bg-purple-900 cursor-pointer rounded-full px-6 py-5'><a href="#mentor">Mentors</a></li>
        <li className='p-5 font-bold hover:bg-purple-900 cursor-pointer rounded-full px-6 py-5'><a href="#contact">Contact</a></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#1b1746] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
      <h1 className='w-full text-3xl font-bold text-[#ffffff]'>UP<span className='w-full text-3xl font-bold text-[#c72323]'>SKILL</span></h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Company</li>
          <li className='p-4 border-b border-gray-600'>Resources</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
      </ul>
    </div>
  );
};

export default Header;