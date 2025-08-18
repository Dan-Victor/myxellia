

import Link from 'next/link'
const Navbar = () => {
   
    return (
    <>
    <header className="  w-full bg-black h-auto flex items-center justify-between px-[78px] py-[20px] z-999 fixed">
     <img src="/MyxelliaLogo.png" alt="Myxellia Logo"  className="" />
     <nav className="flex w-auto items-center justify-center gap-[25px]">
     <img src="/Notification 1.png" alt="Myxellia Logo" className="" />
     <img src="/calculator.png" alt="calculator png" className="" />
     <img src="/Calendar.png" alt="calender" className="" />
     <img src="/messagenotif.png" alt="message-notif" className="" />
     <img src="/Profile.png" alt="profile" className="" />
     </nav>
    </header>
  
    </>
  )
}

export default Navbar