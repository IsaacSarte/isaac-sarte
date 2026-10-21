"use client"
import { AnimatePresence, motion } from 'framer-motion';
import React, { Suspense } from 'react';
import GoBack from './nav/go-back';
import cn from 'classnames';
import { experiencesList } from '@/utils/experiences/experiences';
import Image from 'next/image';

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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5 md:px-12 pb-10 overflow-x-clip">
                    {experiencesList.map((item, index) => {
                        const isWide = index === 0;
                        return (
                        <motion.div
                            key={index + 1}
                            className={cn(
                                `relative bg-white bg-no-repeat text-black p-5 md:p-8`,
                                {
                                    'md:col-span-2 lg:col-span-2': isWide,
                                    'col-span-1 flex flex-col': !isWide,
                                }
                            )}
                            initial={index % 2 === 0 ? 'hidden' : 'hiddenOdd'}
                            animate={index % 2 === 0 ? 'visible' : 'reverseVisible'}
                            variants={variants}
                            transition={{ duration: 1, delay: index * staggerDelay, type: 'spring', bounce: 0.25 }}
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                className="absolute top-0 opacity-30 h-full w-full object-cover left-0"
                                priority
                            />
                            <div className="flex flex-col">
                                <span className="text-xl md:text-2xl font-semibold">{item.title}</span>
                                <span className="italic">{item.time}</span>
                            </div>
                            
                            <div className="flex flex-col mt-4">
                                <span>"{item.desc}"</span>
                                <a href={item.link} target="_blank" rel="noreferrer" className="z-50 break-all">{item.link}</a>
                            </div>
                        </motion.div>
                        );
                    })}
                </div>
            </AnimatePresence>
        </Suspense>
    )
}

export default Experiences