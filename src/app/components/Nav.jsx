"use client";
import React, { useState } from 'react';
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from 'next/link';

const Nav = () => {
  
  const pathname = usePathname();
  const navItemClass =
    "flex items-center justify-center gap-[8px] hover:font-bold cursor-pointer  hover:bg-[#F5F5F5] py-[7px] px-[24px] rounded-[8px] ";
  const activeClass = "font-bold  bg-[#F5F5F5]";

  const navItems = [
    { label: "Dashboard", icon: "/Home 1.png", alt: "home png", href: "/" },
    { label: "Listings", icon: "/Toolbox.png", alt: "list png", href: "/listings" },
    { label: "Users", icon: "/Profile 1.png", alt: "user png", href: "/users" },
    { label: "Request", icon: "/Article.png", alt: "req png", href: "/request" },
    { label: "Applications", icon: "/Scroll.png", alt: "app png", href: "/application" },
  ];

  return (
    <>
    
      <nav className="w-full h-auto py-[10px] xl:px-[78px] md:px-[15px] hidden md:flex items-center justify-between gap-[5px]  xl:gap-[30px] fixed mt-[80px] bg-[#ffffff] z-999">
        <ul className="flex items-center  justify-between w-full">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className={`${navItemClass} ${pathname === item.href ? activeClass : ""}`}>
                <Image width={24} height={24} src={item.icon} alt={item.alt} />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className='focus-within:border-blue-500 cursor-text bg-[#F5F5F5] pl-[18px] pr-[18px] border border-gray-300 rounded-[12px] hidden lg:flex justify-center relative items-center flex-1 gap-[8px]'>
          <Image src="/earch.png" alt='search' width={24} height={24} className='pointer-events-none' />
          <input type="text" placeholder="Search listings users here..." className="h-[43px] pl-[8px] pr-[16px] flex-1  rounded-[12px] focus:outline-none" />
        </div>
        <Image src="/earch.png" alt='search' width={24} height={24} className='pointer-events-none block lg:hidden' />
      </nav>
    </>
  );
};

export default Nav;