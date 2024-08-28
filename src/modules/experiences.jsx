"use client"
import { AnimatePresence, motion } from 'framer-motion';
import React, { Suspense } from 'react';
import GoBack from './nav/go-back';
import cn from 'classnames';
import { experiencesList } from '@/utils/experiences/experiences';

const Experiences = () => {
    const staggerDelay = 0.25;
    const variants = {
        hidden: { opacity: 0, x: '-10%' },
        hiddenOdd: { opacity: 0, x: '10%' },
        visible: { opacity: 1, x: '0%' },
        reverseVisible: { opacity: 1, x: '0%' },
    };

    return (
        <Suspense fallback={null}>
            <AnimatePresence>
                <GoBack />
                <div className="grid grid-cols-3 gap-4 px-12">
                    {experiencesList.map((item, index) => (
                        <motion.div
                            key={index + 1}
                            className={cn(
                                'bg-[#fbfbfb] text-black p-8',
                                {
                                    'col-span-2': index % 4 === 0 || index % 4 === 3,
                                    'col-span-1 flex flex-col': index % 4 !== 0 && index % 4 !== 3,
                                }
                            )}
                            initial={index % 2 === 0 ? 'hidden' : 'hiddenOdd'}
                            animate={index % 2 === 0 ? 'visible' : 'reverseVisible'}
                            variants={variants}
                            transition={{ duration: 1, delay: index * staggerDelay, type: 'spring', bounce: 0.25 }}
                        >
                            <div className="flex flex-col">
                                <span className="text-2xl font-semibold">{item.title}</span>
                                <span className="italic">{item.time}</span>
                            </div>
                            
                            {index % 4 === 0 || index % 4 === 3 ? (
                                <div className="flex justify-between mt-4">
                                    <div className="flex flex-col">
                                        <span>"{item.desc}"</span>
                                        <a href={item.link} target="_blank" rel="noreferrer">{item.link}</a>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col mt-4">
                                    <span>"{item.desc}"</span>
                                    <a href={item.link} target="_blank" rel="noreferrer">{item.link}</a>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </AnimatePresence>
        </Suspense>
    )
}

export default Experiences