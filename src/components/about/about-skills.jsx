"use client"
import { motion } from 'framer-motion';
import React from 'react';

const AboutSkills = () => {
    return (
        <div className="overflow-x-hidden">
            <div className="flex flex-col items-center">
                <span className="text-4xl">Things that I Love to Do</span>
            </div>

            <motion.div
                className="px-12 mt-8"
                animate={{ x: [100, 0, -100] }}
                transition={{ loop: Infinity, duration: 5, ease: "linear" }}
            >
                <div className="flex flex-col items-center">
                    <span>About Me/Hobbies</span>
                </div>
            </motion.div>
        </div>
    )
}

export default AboutSkills;