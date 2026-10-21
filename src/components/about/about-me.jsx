"use client"
import { motion } from 'framer-motion';
import { useState, useEffect, useRef, useCallback } from 'react';
import AnimatedText from './animated-text';

const EDGE_PADDING = 24;
const TITLE_GAP = 24;
const MIN_TOP = { isaac: 100, sarte: 16 };
const DEFAULT_LAYOUT = { stacked: false, isaac: { x: 0, y: 0 }, sarte: { x: 0, y: 0 } };

const AboutMe = () => {
    const [animateStep1, setAnimateStep1] = useState(false);
    const [animateStep2, setAnimateStep2] = useState(false);
    const [animateStep3, setAnimateStep3] = useState(false);
    const [moveToSides, setMoveToSides] = useState(false);
    const [layout, setLayout] = useState(DEFAULT_LAYOUT);
    const isaacRef = useRef(null);
    const sarteRef = useRef(null);

    // Places each word against its own side of the viewport, based on its measured size.
    // If both words can't fit on one row, they stay on separate rows instead of overlapping.
    const measureLayout = useCallback(() => {
        const isaacEl = isaacRef.current;
        const sarteEl = sarteRef.current;
        if (!isaacEl || !sarteEl) return;

        const viewportWidth = document.documentElement.clientWidth;
        const viewportHeight = window.innerHeight;
        const isaacRect = isaacEl.getBoundingClientRect();
        const sarteRect = sarteEl.getBoundingClientRect();

        const fitsSideBySide =
            viewportWidth >= 768 &&
            isaacRect.width + sarteRect.width + TITLE_GAP + EDGE_PADDING * 2 <= viewportWidth;

        const isaacX = EDGE_PADDING - isaacRect.left;
        const sarteX = viewportWidth - EDGE_PADDING - sarteRect.right;

        const clampUp = (desired, rect, minTop) => -Math.max(0, Math.min(desired, rect.top - minTop));

        setLayout({
            stacked: !fitsSideBySide,
            isaac: { x: isaacX, y: fitsSideBySide ? clampUp(viewportHeight * 0.1, isaacRect, MIN_TOP.isaac) : 0 },
            sarte: { x: sarteX, y: fitsSideBySide ? clampUp(viewportHeight * 0.25, sarteRect, MIN_TOP.sarte) : 0 },
        });
    }, []);

    useEffect(() => {
        if (!moveToSides) return;
        measureLayout();
        window.addEventListener('resize', measureLayout);
        return () => window.removeEventListener('resize', measureLayout);
    }, [moveToSides, measureLayout]);

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
        <div className="relative overflow-x-clip pb-10">
            <section className="text-center mt-10 md:mt-20 flex flex-col items-center">
                {animateStep2 && (
                    <motion.div
                        ref={isaacRef}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="relative inline-block"
                    >
                        <motion.div
                            animate={moveToSides ? layout.isaac : {}}
                            transition={{ duration: 1 }}
                        >
                            <AnimatedText text="ISAAC" delayPerLetter={0.15} className="text-[clamp(2.5rem,11vw,6rem)] m-2" />
                        </motion.div>
                    </motion.div>
                )}
                {animateStep1 && (
                    <motion.div
                        ref={sarteRef}
                        className="relative inline-block"
                    >
                        <motion.div
                            animate={moveToSides ? layout.sarte : {}}
                            transition={{ duration: 1 }}
                        >
                            <AnimatedText text="SARTE" delayPerLetter={0.15} className="text-[clamp(2.5rem,11vw,6rem)] m-2" />
                        </motion.div>
                    </motion.div>
                )}
            </section>
            
            {animateStep3 && (
                <div className={`flex flex-col md:flex-row justify-between ${layout.stacked ? 'mt-4' : 'md:-mt-32 mt-4'} px-5 md:px-12 items-start md:items-center gap-8 md:gap-0`}>
                    <div className="relative flex flex-col w-full md:w-auto md:items-center">
                        <div className="flex flex-col text-left md:-ml-40">
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

                        <div className="mt-4 md:ml-40 md:pl-40 flex flex-col text-left">
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
                    

                    <div className="flex flex-col text-right gap-2 self-end md:self-auto">
                        <a
                            href="https://github.com/IsaacSarte"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                        >
                            <AnimatedText text="GitHub" delayPerLetter={0.0015} className="border-b-2" />
                        </a>
                        <a
                            href="https://www.instagram.com/isaac_sarte/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                        >
                            <AnimatedText text="Instagram" delayPerLetter={0.0015} className="border-b-2" />
                        </a>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AboutMe;