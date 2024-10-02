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
                <div className="overflow-hidden h-screen w-screen px-12">
                    <div className="flex items-center justify-center gap-14 mt-[10vh]">
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
                                className="font-semibold text-[4rem]"
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
                            <div className="mt-8 flex items-center justify-center gap-2 text-2xl">
                                <div className="border px-8 py-4 rounded-xl">
                                    Tech
                                </div>
                                <motion.div
                                    initial={{ opacity: 0, x: -25 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1, type: 'spring', bounce: 0.25 }}
                                    className="border px-8 py-4 rounded-xl"
                                >
                                    Used
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.075, type: 'spring', bounce: 0.25 }}
                                    className="border px-8 py-4 rounded-xl">
                                    <AiOutlineDoubleRight size={32.5} />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: -35 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.125, type: 'spring', bounce: 0.25 }}
                                    className="border px-8 py-4 rounded-xl">
                                    <RiCss3Line size={32.5} />
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
                            />
                        </motion.div>
                    </div>
                </div>
            </AnimatePresence>
        </Suspense>
    )
}

export default ProjectInfo;