
import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Maximize2 } from 'lucide-react';
import ReceiptModal from '@/components/ReceiptModal';

const ProofCard = ({ caseStudy }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const accentColor = caseStudy.type === 'Creative' ? 'var(--creative-accent)'
                    : caseStudy.type === 'Technical' ? 'var(--technical-accent)'
                    : '#64748b'; // Darker slate-500 for Hybrid

  const cardVariants = {
    initial: { opacity: 0, y: 50, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -30, scale: 0.95 },
  };

  return (
    <>
      <motion.div
        layout
        variants={cardVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="glass-card overflow-hidden"
        whileHover="hover"
      >
        <motion.div 
            className="p-6 relative cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
        >
          <motion.div className="absolute -inset-px rounded-2xl" style={{ 
              background: `radial-gradient(400px at 50% 0%, ${accentColor}20, transparent 80%)`
          }}/>

          <motion.div 
            className="absolute top-4 right-4 text-muted-foreground group"
            variants={{ hover: { scale: 1.2, color: accentColor } }}
          >
            <Maximize2 className="w-4 h-4" />
          </motion.div>
          
          <span className="text-xs font-bold py-1 px-3 rounded-full border-2 bg-card" style={{ borderColor: accentColor, color: accentColor }}>
            {caseStudy.type}
          </span>
          <h3 className="text-xl font-bold mt-4 mb-2">{caseStudy.title}</h3>
          <p className="text-sm text-muted-foreground">{caseStudy.context}</p>
        </motion.div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-border/50"
            >
              <div className="p-6 space-y-4">
                 <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                        <h4 className="font-bold mb-2 text-creative-accent">Creative</h4>
                        <p className="text-muted-foreground">{caseStudy.creative}</p>
                    </div>
                     <div>
                        <h4 className="font-bold mb-2 text-technical-accent">Technical</h4>
                        <p className="text-muted-foreground">{caseStudy.technical}</p>
                    </div>
                </div>
                 <div>
                    <h4 className="font-bold mb-2 text-primary">Results</h4>
                    <div className="flex flex-wrap gap-2">
                        {caseStudy.results.map((r, i) => (
                            <div key={i} className="text-xs bg-primary/10 text-primary py-1 px-2 rounded">{r}</div>
                        ))}
                    </div>
                </div>
                <motion.button
                  onClick={(e) => { e.stopPropagation(); setIsModalOpen(true); }}
                  className="w-full text-center py-2 mt-2 rounded-md bg-primary/10 text-primary font-semibold text-sm flex items-center justify-center gap-2"
                  whileHover={{ backgroundColor: 'var(--primary)', color: 'var(--background)' }}
                >
                  <Layers className="w-4 h-4"/> View Receipts
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <ReceiptModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} receipts={caseStudy.receipts} />
    </>
  );
};

export default ProofCard;
