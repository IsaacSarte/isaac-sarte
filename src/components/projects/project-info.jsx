"use client"
import React, { Suspense } from 'react'
import { FiGithub, FiEye } from 'react-icons/fi';
import { RiCss3Line } from 'react-icons/ri';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const ProjectInfo = ({ projDets }) => {
    return (
        <Suspense fallback={null}>
            <AnimatePresence>
                <div className="overflow-hidden min-h-screen md:h-screen w-screen px-5 md:px-12 pb-10 md:pb-0">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-14 mt-[14vh] md:mt-[10vh]">
                        <div className="flex flex-col items-center gap-4">
                            <div className="mb-8 flex items-center justify-center gap-4">
                                <motion.div
                                    initial={{ opacity: 0, x: 25 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1, type: 'spring', bounce: 0.25 }}
                                >
                                    <RiCss3Line size={60} color={'#9ca3af'} className="border p-2 rounded-xl" />
                                </motion.div>
                                <div>
                                    <FiGithub size={80} color={'#9ca3af'} className="border p-2 rounded-xl" />
                                </div>
                                <motion.div
                                    initial={{ opacity: 0, x: -25 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1, type: 'spring', bounce: 0.25 }}
                                >
                                    <FiEye size={60} color={'#9ca3af'} className="border p-2 rounded-xl" />
                                </motion.div>
                            </div>
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.125}}
                                className="font-semibold text-4xl sm:text-5xl md:text-[4rem] text-center"
                            >
                                    {projDets.title}
                            </motion.span>
                            <motion.a
                                href={projDets.link}
                                target="_blank"
                                initial={{ opacity: 0, y: 25 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.125}}
                                className="cursor-pointer bg-[#fbfbfb] text-black tracking-widest text-xl rounded-2xl px-8 py-4"
                            >
                                Visit Page
                            </motion.a>
                            <div className="mt-4 md:mt-8 flex flex-wrap items-center justify-center gap-2 text-lg md:text-2xl">
                                <div className="border px-4 py-2 md:px-8 md:py-4 rounded-xl">
                                    Tech
                                </div>
                                <motion.div
                                    initial={{ opacity: 0, x: -25 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1, type: 'spring', bounce: 0.25 }}
                                    className="border px-4 py-2 md:px-8 md:py-4 rounded-xl"
                                >
                                    Used
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.075, type: 'spring', bounce: 0.25 }}
                                    className="border px-4 py-2 md:px-8 md:py-4 rounded-xl">
                                    <AiOutlineDoubleRight className="w-5 h-5 md:w-8 md:h-8" />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: -35 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.125, type: 'spring', bounce: 0.25 }}
                                    className="border px-4 py-2 md:px-8 md:py-4 rounded-xl">
                                    {projDets.tech_used}
                                </motion.div>
                            </div>
                        </div>
                        <motion.div
                            initial={{ rotate: -30, x: -500 }}
                            animate={{ rotate: 0, x: 0 }}
                            transition={{ duration: 3, type: 'spring', bounce: 0.5 }}
                        >
                            <Image
                                src={projDets.image}
                                alt={projDets.title}
                                width={550}
                                height={750}
                                priority
                                className="w-[75vw] max-w-[550px] md:w-[550px] h-auto aspect-[550/750]"
                            />
                        </motion.div>
                    </div>
                </div>
            </AnimatePresence>
        </Suspense>
    )
}

export default ProjectInfo;