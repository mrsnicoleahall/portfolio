
import React from 'react';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProofCard from '@/components/ProofCard';
import caseStudiesData from '@/data/case-studies.json';

const Proof = () => {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Hybrid', 'Creative', 'Technical'];

  const filteredCases = filter === 'All'
    ? caseStudiesData
    : caseStudiesData.filter(cs => cs.type === filter);

  return (
    <>
      <Helmet>
        <title>Proof | Case Studies | Marketing Engineer</title>
        <meta name="description" content="Dynamic, interactive proof of my work. Real results from real projects, backed by receipts." />
      </Helmet>

      <div className="py-16 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">The Proof is in the Pixels</h1>
          <p className="text-xl text-muted-foreground">Click any card to see the system behind the stats.</p>
        </motion.div>

        <div className="flex justify-center gap-2 mb-12">
          {filters.map(f => (
            <motion.button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 text-sm font-semibold rounded-full relative transition-colors ${filter === f ? 'text-background' : 'text-foreground'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter === f && (
                <motion.div
                  layoutId="proof-filter-underline"
                  className="absolute inset-0 bg-primary rounded-full z-0"
                />
              )}
              <span className="relative z-10">{f}</span>
            </motion.button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredCases.map((caseStudy) => (
              <ProofCard key={caseStudy.slug} caseStudy={caseStudy} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
};

export default Proof;
