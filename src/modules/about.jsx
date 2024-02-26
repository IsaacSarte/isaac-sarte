"use client"
import { AnimatePresence } from 'framer-motion';
import React, { Suspense } from 'react';
import GoBack from './nav/go-back';
import AboutMe from '@/components/about/about-me';
import AboutSkills from '@/components/about/about-skills';

const About = () => {
    return (
        <Suspense fallback={null}>
            <AnimatePresence>
                <GoBack />
                <AboutMe />
                <AboutSkills />
            </AnimatePresence>
        </Suspense>
    )
}

export default About;