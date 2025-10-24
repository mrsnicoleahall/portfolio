
import React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactNode = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const sequence = [1, 2];
    let i = 0;
    const timer = setInterval(() => {
      setStep(sequence[i]);
      i++;
      if (i >= sequence.length) clearInterval(timer);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-mono text-sm md:text-base bg-foreground/5 dark:bg-foreground/10 p-6 rounded-lg text-left text-muted-foreground">
      <AnimatePresence>
        {step >= 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span className="text-creative-accent">&gt;</span> connect
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {step >= 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-2"
          >
            <span className="text-creative-accent">&gt;</span> enter command: message
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {step >= 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-2"
          >
            <span className="text-creative-accent">&gt;</span>
            <motion.span
              className="w-2 h-4 bg-creative-accent inline-block ml-1"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactNode;
