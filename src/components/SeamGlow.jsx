
import React from 'react';
import { motion } from 'framer-motion';

const SeamGlow = ({ mouseX = 0.5 }) => {
  return (
    <div className="relative w-1 flex-shrink-0">
      <motion.div
        className="absolute inset-0 seam-glow"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-white"
        style={{
          left: '-3px',
          top: `${mouseX * 100}%`,
        }}
        animate={{
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />

      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#00F5D4]"
          style={{
            left: '-1px',
          }}
          animate={{
            y: [0, 600],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 1.3,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

export default SeamGlow;
