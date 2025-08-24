'use client'

import Image from 'next/image';
import Link from "next/link";
import  { useState } from 'react';
import { FaTimes } from "react-icons/fa"; // close (X)
import React from 'react';

const Sidenav = ({handleToggleOff}) => {
  
  return (
    <>
    <div className="fixed inset-0 z-1000 flex">
      {/* Dark overlay (click here to close) */}
      <div 
        className="bg-black/50 flex-1" 
        onClick={handleToggleOff}
      ></div>
    <div className="md:hidden absolute top-0 w-[85%] h-[100vh] bg-blue-500 z-1000 ">
          <div className="flex items-center justify-between py-[20px] px-[20px]">
            <img src="/logo.png" alt="Myxellia Logo"  className="w-[150px] "    />
          <FaTimes size={30}  color='white' onClick={handleToggleOff}/>
          </div> 
          <div className="flex flex-col gap-[50px] mt-[70px] px-[20px]">
            <Link href="/" className="text-white text-[18px] font-semibold" onClick={handleToggleOff}>Dashboard</Link>
            <Link href="/listings" className="text-white text-[18px] font-semibold" onClick={handleToggleOff}>Listings</Link>
            <Link href="/users" className="text-white text-[18px] font-semibold" onClick={handleToggleOff}>Users</Link>
            <Link href="/request" className="text-white text-[18px] font-semibold" onClick={handleToggleOff}>Request</Link>
            <Link href="application" className="text-white text-[18px] font-semibold" onClick={handleToggleOff}>Application</Link>
            </div>
            <input type="text" placeholder="Search listings users here..." className="mt-[30px] mx-[20px] p-[10px] w-[80%] bg-amber-50 rounded-md outline-none"/>
            <div className='absolute bottom-0  text-center w-full'>
            <p className="  text-white">copyright 2025</p>
          
            </div>
       </div>
       </div>
    </>
  )
}

export default Sidenav