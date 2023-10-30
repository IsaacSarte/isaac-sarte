"use client"
import { AnimatePresence } from 'framer-motion';
import React, { Suspense } from 'react';
import GoBack from './nav/go-back';

const Techs = () => {
  return (
    <Suspense fallback={null}>
        <AnimatePresence>
            <GoBack />
            <div className="">
                Tech Skills
            </div>
        </AnimatePresence>
    </Suspense>
  )
}

export default Techs;