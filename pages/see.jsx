"use client"
import React from 'react';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';
import Binocular from '@/assets/svgs/binocular.svg'

const See = () => {
  return (
    <AnimatePresence>
        <div className="w-screen h-screen flex items-center justify-between px-12 overflow-hidden">
            <motion.div
                initial={{ opacity: 0 , x: -100, rotate: -90 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', bounce: 0.25 }}
            >
                <span className="text-xl font-semibold">Experiences</span>
            </motion.div>
            <div className="font-semibold flex flex-col items-center gap-4">
                <Binocular className="cursor-pointer binocular hover:scale-[1.05]" />
                <span className="text-8xl">Isaac Sarte</span>
                <div className="flex items-center gap-6 border border-gray-700 rounded-2xl mt-16 px-6 py-4">
                    <FiGithub size={30} color={'#9ca3af'} />
                    <FiLinkedin size={30} color={'#9ca3af'} />
                    <FiInstagram size={30} color={'#9ca3af'} />
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0 , x: 100, rotate: 90 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', bounce: 0.25 }}
            >
                <span className="text-xl font-semibold">Tech Skills</span>
            </motion.div>
        </div>
    </AnimatePresence>
  )
}

export default See;