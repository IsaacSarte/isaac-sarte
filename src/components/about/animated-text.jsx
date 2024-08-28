"use client";
import { motion } from 'framer-motion';

const AnimatedText = ({ text, delayPerLetter = 0.25, className }) => {
  return (
    <div>
      {text.split('').map((letter, index) => (
        <motion.span
          key={index + 1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * delayPerLetter, duration: 0.5 }}
          className={className}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedText;