"use client"
import { AnimatePresence } from 'framer-motion';
import React, { Suspense } from 'react';
import GoBack from './nav/go-back';

const About = () => {
  return (
    <Suspense fallback={null}>
        <AnimatePresence>
            <GoBack />
            <div className="">
                About Me
            </div>
        </AnimatePresence>
    </Suspense>
  )
}

export default About;