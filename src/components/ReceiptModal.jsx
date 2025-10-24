
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';

const ReceiptModal = ({ isOpen, onClose, receipts = [] }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-x-4 bottom-4 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:bottom-auto md:top-1/2 md:-translate-y-1/2 glass-card z-50 p-6 w-full max-w-lg"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-foreground">Receipts</h3>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  onClick={onClose}
                  className="text-muted-foreground"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              <ul className="space-y-3 mb-6">
                {receipts.map((receipt, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center space-x-3 text-muted-foreground"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Check className="w-4 h-4 text-creative-accent flex-shrink-0" />
                    <span>{receipt}</span>
                  </motion.li>
                ))}
              </ul>

              <p className="text-sm text-muted-foreground/80 italic border-t border-border/50 pt-4">
                This is a redacted view. Full receipts available under NDA. I never share client secrets.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ReceiptModal;
