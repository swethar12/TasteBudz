/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'
import { topPicks } from '../data/data';
import 'tailwindcss/tailwind.css';

function TopPicks(){
    return(
        <>
            <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Top Picks</h1>
            <div className='hidden lg:flex max-w[1520px] m-auto py-2 px-2'>
                <Splide options={{perPage:4,gap:"5px",drag:'free',arrows:false}}>
                {
                    topPicks.map((item)=>{
                        return(
                            <SplideSlide key={item.id}>
                            <div className='rounded-3xl relative'>
                                <div className='absolute w-full h-full bg-black/50 rounded-3xl text-white'>
                                    <p className='px-2 font-semibold'>{item.title}</p>
                                    <p className='px-2 pt-3 font-bold text-2xl'>{item.price}</p>
                                    <button className="border border-dotted border-white text-white mx-2 absolute bottom-4">Add to Cart</button>
                                </div>
                                <img className='h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300' src={item.img} alt={item.title}/>
                            </div>
                            </SplideSlide>
                        )
                    })
                }
                </Splide>
            </div>
        </>
    )
}
export default TopPicks