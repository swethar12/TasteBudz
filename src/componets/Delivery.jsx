/* eslint-disable no-unused-vars */
import React from 'react';

function Delivery() {
  return (
    <>
      <div className='w-full bg-white py-16 px-4'>
        <h3 className='text-orange-500 font-bold text-2xl text-center'>Quick Delivery App</h3>
        <div className='max-w-4xl mx-auto md:flex md:items-center md:justify-between'>
          <img className='w-full md:w-1/2 mx-auto md:my-0' src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp' alt='Delivery App' />
          <div className='md:w-1/2 md:pl-10 mt-6 md:mt-0'>
            <p className='text-[#00df9a] font-bold'>Get The App</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless Convenience on-demand</h1>
            <p>
              The speed and convenience that food delivery apps offer is simply the standard for consumers. Consumers want convenience in all aspects of their lives, including food, and restaurants can do that by signing up with third-party apps, or creating their own takeout and delivery channel.
            </p>
            <button className='bg-black text-[#00df9a] w-full md:w-auto rounded-md font-medium my-6 py-3'>Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Delivery;
