"use client"
import { AnimatePresence } from 'framer-motion';
import React, { Suspense } from 'react';

const Techs = () => {
  return (
    <Suspense fallback={null}>
        <AnimatePresence>
            <div className="">
                Tech Skills
            </div>
        </AnimatePresence>
    </Suspense>
  )
}

export default Techs;