"use client"
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import HomeIcon from '@/assets/svgs/home.svg';

const NavBar = () => {
  return (
    <AnimatePresence>
        <div className="w-screen h-[10vh] fixed flex items-center justify-between px-12 overflow-hidden">
            <motion.div
                initial={{ opacity: 0 , y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', bounce: 0.25 }}
            >
                <span className="text-xl">IS</span>
            </motion.div>
            <HomeIcon className="ml-[6.5rem] cursor-pointer hover:scale-125" />
            <motion.div
                initial={{ opacity: 0 , y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', bounce: 0.25 }}
            >
                <span className="text-xl">Contact Me</span>
            </motion.div>
        </div>
    </AnimatePresence>
  )
}

export default NavBar;