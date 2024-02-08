import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { BsFillCartFill, BsPerson } from 'react-icons/bs';
import { TbTruckReturn } from 'react-icons/tb';
import { FaGoogleWallet } from 'react-icons/fa';
import { MdHelp, MdOutlineFavorite } from 'react-icons/md';
import { NavLink, Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaShoppingCart } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';

const TopNav = () => {
  const [sideNav, setSideNav] = useState(false);

  return (
    <div className='max-w-[1520px] mx-auto flex justify-between items-center p-4'>
      <div className='flex items-center'>
        <div onClick={() => setSideNav(!sideNav)} className='cursor-pointer'>
          {sideNav ? (
            <AiOutlineClose size={25} />
          ) : (
            <AiOutlineMenu size={25} />
          )}
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Taste
          <span className='font-bold'>Budz</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className='bg-orange-700 text-white rounded-full p-2 text-bold'>Free</p>
          <p className='p-2 text-bold'>Delivery</p>
        </div>
      </div>

      <div className='hidden lg:flex space-x-4'>
        <Link to='/home' className='font-bold'>Home</Link>
        <Link to='/about' className='font-bold'>About</Link>
        <Link to='/service' className='font-bold'>Services</Link>
        <Link to='/contact' className='font-bold'>Contact</Link>
      </div>

      <div className='hidden lg:flex bg-gray-200 rounded-full items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} className='text-gray-600' />
        <input className='bg-transparent p-2 w-full focus:outline-none' type='text' placeholder='Search meals' />
      </div>

      <div className='hidden lg:flex items-center'>
  <button className='bg-orange-700 border-none text-white px-4 py-2 rounded-lg flex items-center gap-2'>
    <BsFillCartFill size={20} className='text-white' />
    <Link to='/Mycart' className='text-white no-underline'>Cart</Link>
  </button>
</div>

      {sideNav && (
        <>
          <div className='fixed top-0 left-0 w-full h-screen bg-black/40' onClick={() => setSideNav(false)}></div>
          <div className='fixed top-0 left-0 h-screen bg-white w-60 lg:w-80 shadow z-50 overflow-y-auto'>
            <div className='p-4'>
              <div className='flex items-center mb-4'>
                <AiOutlineClose size={25} className='mr-2' onClick={() => setSideNav(false)} />
                <h2 className='text-2xl font-semibold'>Taste<span className='text-orange-700 font-bold'>Budz</span></h2>
              </div>
              <ul className='flex flex-col text-gray-900'>
                <li className='py-4 flex items-center'>
                  <BsPerson size={25} className='mr-4 text-white bg-black rounded-full' />
                  <NavLink to='/account' onClick={() => setSideNav(false)}>My Account</NavLink>
                </li>
                
                <li className='py-4 flex items-center'>
                  <MdHelp size={25} className='mr-4 text-white bg-black rounded-full' />
                  <NavLink to='/help' onClick={() => setSideNav(false)}>Help</NavLink>
                </li>
                <li className='py-4 flex items-center'>
                  <FaHome size={25} className='mr-4 text-white bg-black rounded-full' />
                  <NavLink to='/home' onClick={() => setSideNav(false)}>Home</NavLink>
                </li>
                <li className='py-4 flex items-center'>
                  <FaInfoCircle size={25} className='mr-4 text-white bg-black rounded-full' />
                  <NavLink to='/about' onClick={() => setSideNav(false)}>About</NavLink>
                </li>
                <li className='py-4 flex items-center'>
                  <MdWork size={25} className='mr-4 text-white bg-black rounded-full' />
                  <NavLink to='/service' onClick={() => setSideNav(false)}>Service</NavLink>
                </li>
                <li className='py-4 flex items-center'>
                  <FaShoppingCart size={25} className='mr-4 text-white bg-black rounded-full' />
                  <NavLink to='/MyCart' onClick={() => setSideNav(false)}>Cart</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TopNav;
