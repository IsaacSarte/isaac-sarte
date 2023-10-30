import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ArrowLeft from '@/assets/svgs/arrowLeft.svg';

const GoBack = () => {
    const handleGoBackClick = () => {
        window.location.reload('/');
    };

    return (
        <AnimatePresence>
            <motion.div 
                initial={{ visibility: 0 }}
                animate={{ visibility: 1 }}
                transition={{ type: 'spring', bounce: 0.25 }}
                className="p-12 flex items-center gap-2"
                onClick={() => handleGoBackClick()}
            >
                <ArrowLeft className="arrow-left cursor-pointer hover:scale-125"/>
                <span className="cursor-pointer hover:scale-125">Go Back</span>
            </motion.div>
        </AnimatePresence>
    )
}

export default GoBack;