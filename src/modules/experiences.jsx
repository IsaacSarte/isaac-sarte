"use client"
import { AnimatePresence } from 'framer-motion';
import React, { Suspense } from 'react';

const Experiences = () => {
  return (
    <Suspense fallback={null}>
        <AnimatePresence>
            <div className="">
                Experiences
            </div>
        </AnimatePresence>
    </Suspense>
  )
}

export default Experiences;