//making use of use client ,pathname and also to use next/navigation only works in the clientside render and in next js in the page.tsx is server side rendered. files that require pathname canonly be used in client components and to do that you make use of use client you get, so it is important to use "use client" at the top of the file in a separate file. in the components folder so as to not turn the whole page.tsx into a client component
"use client";
import React from 'react'
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from 'next/link';

const Nav = () => {

  

    const pathname = usePathname();
  const navItemClass =
    "flex items-center justify-center gap-[8px] hover:font-bold cursor-pointer hover:bg-[#F5F5F5] py-[7px] px-[24px] rounded-[8px] ";
  const activeClass = "font-bold  bg-[#F5F5F5]"

    //for the nav items
  const navItems = [
    { label: "Dashboard", icon: "/Home 1.png", alt: "home png", href: "/" },
    { label: "Listings", icon: "/Toolbox.png", alt: "list png", href: "/listings" },
    { label: "Users", icon: "/Profile 1.png", alt: "user png", href: "/users" },
    { label: "Request", icon: "/Article.png", alt: "req png", href: "/request" },
    { label: "Applications", icon: "/Scroll.png", alt: "app png", href: "/application" },
  ];
  return (
    <>
    <nav className="w-full h-auto py-[14px] px-[78px] flex items-center justify-between fixed mt-[80px] bg-[#ffffff] z-999">
        <ul className="flex items-center justify-center gap-[72px]">
        {navItems.map((item) => (
           <Link key={item.label} href={item.href}><li key={item.label} className={`${navItemClass} ${
            pathname === item.href ? activeClass : ""
          }`}><Image width={24} height={24} src={item.icon} alt={item.alt}/>{item.label}</li></Link>
        ) 
        )}
        </ul>

        <div className=' focus-within:border-blue-500 cursor-text  bg-[#F5F5F5] pl-[18px] border border-gray-300 rounded-[12px] flex justify-center relative items-center flex-1 gap-[8px]'><Image src="/earch.png" alt='search'  width={24} height={24} className='pointer-events-none'/><input type="text" placeholder="Search listings users here..." className=" h-[43px] pl-[8x] pr-[16px]  flex-1  rounded-[12px]  focus:outline-none " /></div>
      
      </nav>
    </>
  )
}

export default Nav