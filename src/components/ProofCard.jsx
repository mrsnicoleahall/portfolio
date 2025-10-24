import React from 'react';
import { useState } from 'react';

const ProofCard = ({ caseStudy }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const typeColors = {
    'Hybrid': 'border-purple-400 text-purple-400',
    'Creative': 'border-pink-400 text-pink-400',
    'Technical': 'border-green-400 text-green-400'
  };
  const typeColor = typeColors[caseStudy.type] || 'border-cyan-400 text-cyan-400';

  return (
    <div className="bg-black border-2 border-white/20">
      {/* Terminal Header */}
      <div className="flex items-center gap-3 px-4 py-2 border-b border-white/20">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
        </div>
        <span className={`text-xs font-mono font-semibold uppercase tracking-wide px-2 py-0.5 border ${typeColor}`}>
          {caseStudy.type}
        </span>
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left p-6 hover:bg-white/5 transition-colors"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-green-400 font-mono text-xs mb-2">$ cat case_study.md</p>
            <h3 className="text-lg font-bold mb-2 text-white font-mono">{caseStudy.title}</h3>
            <p className="text-sm text-gray-400 font-mono">{caseStudy.context}</p>
          </div>
          <div className="text-2xl text-cyan-400">{isExpanded ? '−' : '+'}</div>
        </div>
      </button>

      {isExpanded && (
        <div className="border-t-2 border-white/20 p-6 bg-white/5">
          <div className={`${caseStudy.type === 'Hybrid' ? 'grid grid-cols-2 gap-4' : ''} text-sm mb-4`}>
            {(caseStudy.type === 'Creative' || caseStudy.type === 'Hybrid') && (
              <div>
                <h4 className="font-bold mb-2 uppercase text-xs tracking-wide text-cyan-400 font-mono">$ Creative</h4>
                <p className="text-gray-300 font-mono text-xs">{caseStudy.creative}</p>
              </div>
            )}
            {(caseStudy.type === 'Technical' || caseStudy.type === 'Hybrid') && (
              <div>
                <h4 className="font-bold mb-2 uppercase text-xs tracking-wide text-purple-400 font-mono">$ Technical</h4>
                <p className="text-gray-300 font-mono text-xs">{caseStudy.technical}</p>
              </div>
            )}
          </div>
          <div>
            <h4 className="font-bold mb-2 uppercase text-xs tracking-wide text-green-400 font-mono">$ Results</h4>
            <div className="flex flex-wrap gap-2">
              {caseStudy.results.map((r, i) => (
                <div key={i} className="text-xs bg-green-400/20 text-green-400 border border-green-400/40 py-1 px-3 font-mono font-semibold">{r}</div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProofCard;
