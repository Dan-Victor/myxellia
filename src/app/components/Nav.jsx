"use client";
import React, { useState } from 'react';
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from 'next/link';

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(true);
  };

  
  const log = () => {
    setToggle(false);
  };

  const pathname = usePathname();
  const navItemClass =
    "flex items-center justify-center gap-[8px] hover:font-bold cursor-pointer hover:bg-[#F5F5F5] py-[7px] px-[24px] rounded-[8px] ";
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
      <nav className="w-full h-auto py-[14px] px-[78px] flex items-center justify-between fixed mt-[80px] bg-[#ffffff] z-999">
        <ul className="flex items-center justify-center gap-[72px]">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className={`${navItemClass} ${pathname === item.href ? activeClass : ""}`}>
                <Image width={24} height={24} src={item.icon} alt={item.alt} />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className='focus-within:border-blue-500 cursor-text bg-[#F5F5F5] pl-[18px] border border-gray-300 rounded-[12px] flex justify-center relative items-center flex-1 gap-[8px]'>
          <Image src="/earch.png" alt='search' width={24} height={24} className='pointer-events-none' />
          <input type="text" placeholder="Search listings users here..." className="h-[43px] pl-[8px] pr-[16px] flex-1 rounded-[12px] focus:outline-none" />
        </div>
        <button onClick={handleToggle} className="ml-4 px-4 py-2 rounded bg-gray-200">Toggle</button>
        {toggle && (
          <div className='absolute top-[60px] right-[78px] bg-white shadow-lg rounded-lg p-4'>
            {/* Dropdown content here */}
            <span>Dropdown Content</span>
            <h1 className='text-[16px] font-bold'>Hello, User!</h1>

          </div>
        )}
        <h2 className="font-bold cursor-pointer" onClick={log} >cancel</h2>
      </nav>
    </>
  );
};

export default Nav;