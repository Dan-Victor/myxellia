'use client'

import { FaBars } from "react-icons/fa"; // hamburger
import React from 'react'
import Link from 'next/link'
import Sidenav from "./Sidenav";
import { useState } from "react";

const Navbar = () => {
   const [toggle, setToggle] = useState(false);
   const handleToggle = () => {
     setToggle(true);
   }
   const handleToggleOff = () => {
     setToggle(false);
   }
    return (
    <>
{toggle &&<Sidenav handleToggleOff={handleToggleOff} />}
    <header className="  w-full bg-black h-auto flex items-center justify-between px-[15px] md:px-[30px] lg:px-[78px] py-[20px] z-999 fixed">
     <img src="/logo.png" alt="Myxellia Logo"  className="w-[105px]  sm:w-auto" />
     <nav className="flex w-auto items-center justify-center sm:gap-[25px] gap-[10px]">
     <img src="/Notification 1.png" alt="Myxellia Logo" className="sm:w-auto w-[21px]" />
     <img src="/calculator.png" alt="calculator png" className="sm:w-auto w-[21px]" />
     <img src="/Calendar.png" alt="calender" className="sm:w-auto w-[21px]" />
     <img src="/messagenotif.png" alt="message-notif" className="sm:w-auto w-[21px]" />
     <img src="/Profile.png" alt="profile" className="sm:w-auto w-[21px]" />
       <FaBars size={25} color="white" className=' md:hidden ' onClick={handleToggle}/>  {/* hamburger */}
      {/*<FaTimes size={30} />  close */}
     </nav>
    
    </header>
  
    </>
  )
}

export default Navbar