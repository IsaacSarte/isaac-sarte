"use client"
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import AnimatedText from './animated-text';

const AboutMe = () => {
    const [animateStep1, setAnimateStep1] = useState(false);
    const [animateStep2, setAnimateStep2] = useState(false);
    const [animateStep3, setAnimateStep3] = useState(false);
    const [moveToSides, setMoveToSides] = useState(false);

    useEffect(() => {
        setAnimateStep1(true);
        const timeout1 = setTimeout(() => setAnimateStep2(true), 1000);
        const timeout2 = setTimeout(() => setMoveToSides(true), 2000); // Start moving to sides after another 1 second
        const timeout3 = setTimeout(() => setAnimateStep3(true), 3000);
        return () => {
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
        };
    }, []);

    return (
        <div className="relative">
            <section className="text-center mt-20 flex flex-col">
                {animateStep2 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="relative inline-block"
                    >
                        <motion.div
                            animate={moveToSides ? { x: '-35dvw', y: '-10dvh' } : {}}
                            transition={{ duration: 1 }}
                        >
                            <AnimatedText text="ISAAC" delayPerLetter={0.15} className="text-8xl m-2" />
                        </motion.div>
                    </motion.div>
                )}
                {animateStep1 && (
                    <motion.div
                        className="relative inline-block"
                    >
                        <motion.div
                            animate={moveToSides ? { x: '35dvw', y: '-25dvh' } : {}}
                            transition={{ duration: 1 }}
                        >
                            <AnimatedText text="SARTE" delayPerLetter={0.15} className="text-8xl m-2" />
                        </motion.div>
                    </motion.div>
                )}
            </section>
            
            {animateStep3 && (
                <div className="flex justify-between -mt-32 px-12 items-center">
                    <div className="relative flex flex-col items-center">
                        <div className="flex flex-col text-left -ml-40">
                            <AnimatedText 
                                text="Hi, I am a Fullstack Software Engineer with work experience and many successful projects under my belt." 
                                delayPerLetter={0.0015}  
                            />
                            <AnimatedText 
                                text="I&apos;ve always been interested in giving well defined solutions for well defined problems and " 
                                delayPerLetter={0.0015}  
                            />
                            <AnimatedText 
                                text="I will always be looking for opportunities to grow and learn."
                                delayPerLetter={0.0015}  
                            />
                        </div>

                        <div className="ml-40 pl-40 mt-4 flex flex-col text-left">
                            <AnimatedText 
                                text="Different areas of this industry are the ones I want to explore. Let us explore together."
                                delayPerLetter={0.0015}  
                            />
                            <AnimatedText 
                                text="If you are looking for an engineer who can bring your ideas to life, then I am your man."
                                delayPerLetter={0.0015}  
                            />
                            <AnimatedText 
                                text="Do not hesitate to reach me out and let us create something amazing together."
                                delayPerLetter={0.0015}  
                            />
                        </div>
                    </div>
                    

                    <div className="flex flex-col text-right gap-2">
                        <AnimatedText text="Resume" delayPerLetter={0.0015} className="border-b-2" />
                        <AnimatedText text="LinkedIn" delayPerLetter={0.0015} className="border-b-2" />
                        <AnimatedText text="Github" delayPerLetter={0.0015} className="border-b-2" />
                    </div>
                </div>
            )}
        </div>
    )
}

export default AboutMe;