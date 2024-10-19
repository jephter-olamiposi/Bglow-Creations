'use client';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';



const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  // Animation variants for the menu container
  const menuVariants = {
    open: {
      opacity: 1,
      height: ('100vh'),
      transition: {
        type: 'spring',
        stiffness: 120,
         duration: 0.3,
    restSpeed: 2,
        staggerChildren: 0.1

      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
         damping: 25,
          duration: 0.2, 
   
        staggerChildren: -0.1,

      },
    },
  };

  // Animation variants for each list item
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
  
  };

  return (
    <nav className="bg-slate-200 sticky top-0 lg:py-5 p-5 z-30 ">
      <div className="container mx-auto flex justify-between items-center z-10 w-full ">
        <div className="text-black text-2xl font-bold w-72  ">
          <Link  href="/">B-glow Creations</Link>
        </div>
        <div className="block lg:hidden z-50">
          <button onClick={toggleMenu} className="text-black focus:outline-none ">
            <svg className="w-6 h-6  " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
        <motion.div
          className=" lg:hidden lg:items-center lg:space-x-4 lg:opacity-100 lg:translate-y-0 lg:transition-none 
          absolute top-16 left-0 w-full bg-slate-200 lg:w-auto lg:relative z-20  "
          animate={isOpen ? 'open' : 'closed'}
          variants={menuVariants}
          initial="closed"
        >
          <motion.ul
            className="flex flex-col lg:flex-row space-y-11 lg:space-y-0 lg:space-x-4 items-center h-full justify-center text-2xl  "
            variants={menuVariants}
          >
            <motion.li
              variants={itemVariants}
    
            >
              <Link href="/" className="text-black bg-sl3te-300 hover:bg-gray-500 duration-500 hover:text-white p-4  rounded-3xl">Home</Link>
            </motion.li>
            <motion.li
              variants={itemVariants}
            >
              <Link href="/Monogram" className="text-black bg-sl3te-300 hover:bg-gray-500 duration-500 hover:text-white p-4 rounded-3xl">Monogram & Sewing</Link>
            </motion.li>
            <motion.li
              variants={itemVariants}
            >
              <Link href="/Sales" className="text-black bg-sl3te-300 hover:bg-gray-500 duration-500 hover:text-white p-4 rounded-3xl">Sales</Link>
            </motion.li>
            <motion.li
              variants={itemVariants}
            >
              <Link href="/Repair" className="text-black bg-sl3te-300 hover:bg-gray-500 duration-500 hover:text-white p-4  rounded-3xl">Repair</Link>
            </motion.li>
            <motion.li
              variants={itemVariants}
            >
              <Link href="/About" className="text-black bg-sl3te-300 hover:bg-gray-500 duration-500 hover:text-white p-4 rounded-3xl">About Us</Link>
            </motion.li>
            <motion.li
              variants={itemVariants}
           >
              <Link href="/Contact" className="text-black bg-sl3te-300 hover:bg-gray-500 duration-500 hover:text-white p-4  rounded-3xl">Contact Us</Link>
            </motion.li>
          </motion.ul>
        </motion.div>

        <div className="hidden lg:flex lg:items-center w-full lg justify-end  ">


          <Link href="/" className="text-black hover:text-gray-500 mr-4">Home</Link>

          <Link href="/Monogram" className="text-black hover:text-gray-500 mr-4">Monogram & Sewing</Link>
          
          <Link href="/Sales" className="text-black hover:text-gray-500 mr-4">Sales</Link>

          <Link href="/Repair" className="text-black hover:text-gray-500  mr-4">Repair</Link>

          <Link href="/About" className="text-black hover:text-gray-500 mr-4 ">About Us</Link>

          <Link href="/Contact" className="text-black hover:text-gray-500 mr-4">Contact Us</Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;

