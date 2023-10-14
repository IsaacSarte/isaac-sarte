"use client"
import React, { useState } from 'react';
import BinocularIcon from '@/assets/svgs/binocular.svg';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';
import Projects from '@/modules/projects';
import NavBar from '@/modules/nav/nav-bar';

const See = () => {
    const [binocularClicked, setBinocularClicked] = useState(false);
    const [shouldRenderProjects, setShouldRenderProjects] = useState(false);

    const handleRenderProjects = () => {
        setBinocularClicked(!binocularClicked);
        setTimeout(() => {
            setShouldRenderProjects(!shouldRenderProjects);
        }, 500);
    };

    return (
        <AnimatePresence>
            {!shouldRenderProjects ? (
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: binocularClicked ? 0 : 1 }}
                    transition={{ duration: 0.25 }}
                    className="see-container w-screen h-screen flex items-center justify-between px-12 overflow-hidden"
                >
                    <motion.div
                        initial={{ opacity: 0 , x: -100, rotate: -90 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: 'spring', bounce: 0.25 }}
                    >
                        <span className="text-xl font-semibold">Experiences</span>
                    </motion.div>
                    <div className="font-semibold flex flex-col items-center gap-4">
                        <BinocularIcon
                            onClick={() => handleRenderProjects()}
                            className="cursor-pointer binocular hover:scale-[1.05]" 
                        />
                        <motion.span
                            initial={{ opacity: 1 }}
                            animate={{ y: binocularClicked ? -50 : 0 }}
                            transition={{ duration: 0.25 }}
                            className="text-8xl"
                        >
                                Isaac Sarte
                            </motion.span>
                        <motion.div
                            initial={{ opacity: 1 }}
                            animate={{ y: binocularClicked ? -50 : 0 }}
                            transition={{ duration: 0.25 }}
                            className="flex items-center gap-6 border border-gray-700 rounded-2xl mt-16 px-6 py-4"
                        >
                            <FiGithub size={30} color={'#9ca3af'} />
                            <FiLinkedin size={30} color={'#9ca3af'} />
                            <FiInstagram size={30} color={'#9ca3af'} />
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 , x: 100, rotate: 90 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: 'spring', bounce: 0.25 }}
                    >
                        <span className="text-xl font-semibold">Tech Skills</span>
                    </motion.div>
                </motion.div>
            ) : (
                <>
                    <NavBar onHomeIconClick={handleRenderProjects}  />
                    <Projects />
                </>

            )}
            
        </AnimatePresence>
    )
}

export default See;