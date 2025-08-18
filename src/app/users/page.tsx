import React from 'react'
import Navbar from '../components/Navbar'
import Nav from '../components/Nav';

export const metadata = {
  title: "Myxellia Dashboard | users",
  description: "Myxellia users",
};

const page = () => {
  return (
    <>
    <Navbar />
      <Nav/>
    </>
  )
}

export default page