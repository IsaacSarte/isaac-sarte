import React from 'react'
import { AnimatePresence } from 'framer-motion';
import React, { Suspense } from 'react';
import GoBack from './nav/go-back';

const Experiences = () => {
  return (
    <Suspense fallback={null}>
        <AnimatePresence>
            <GoBack />
            <div className="">
                Experiences
            </div>
        </AnimatePresence>
    </Suspense>
  )
}

export default Experiences