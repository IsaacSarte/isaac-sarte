import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import HomeIcon from '@/assets/svgs/home.svg';

const NavBar = ({ onHomeIconClick }) => {
    const [isHomeClicked, setIsHomeClicked] = useState(false);

    return (
        <AnimatePresence>
        <motion.div
            initial={{ opacity: 0 , y: isHomeClicked ? 0 : -100 }}
            animate={{ opacity: 1, y: isHomeClicked ? -100 : 0 }}
            transition={{ type: 'spring', bounce: 0.25 }}
            className="px-12 overflow-hidden fixed w-screen h-[10vh] mx-auto grid grid-cols-3 text-center place-items-center z-50"
        >
            <span className="text-xl">IS</span>
            <HomeIcon 
                className="cursor-pointer hover:scale-125" 
                onClick={() => { onHomeIconClick(); setIsHomeClicked(!isHomeClicked); }} 
            />
            <span className="text-xl">Contact Me</span>
        </motion.div>
        </AnimatePresence>
    )
}

export default NavBar;