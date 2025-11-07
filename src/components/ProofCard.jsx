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

  const isCreative = caseStudy.type === 'Creative';

  return (
    <div className={`${isCreative ? 'bg-gradient-to-br from-pink-50 to-purple-50 relative' : 'bg-black'} border-2 ${isCreative ? 'border-pink-300' : 'border-white/20'} overflow-hidden`}>
      {/* Creative Background Pattern */}
      {isCreative && (
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          {/* Watercolor-like organic shapes */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="watercolor">
                <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise"/>
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
              </filter>
            </defs>
            <circle cx="10%" cy="20%" r="60" fill="#ec4899" opacity="0.2" filter="url(#watercolor)" />
            <circle cx="85%" cy="15%" r="40" fill="#a855f7" opacity="0.15" filter="url(#watercolor)" />
            <circle cx="70%" cy="80%" r="50" fill="#f97316" opacity="0.18" filter="url(#watercolor)" />
            <circle cx="20%" cy="85%" r="35" fill="#fbbf24" opacity="0.12" filter="url(#watercolor)" />
          </svg>
        </div>
      )}

      {/* Creative Header with Paint Splotches or Terminal Header */}
      {isCreative ? (
        <div className="relative px-4 py-3 border-b border-pink-300 bg-white/40">
          {/* Paint splotch decorations */}
          <div className="absolute top-0 left-0 w-12 h-12 bg-pink-400/30 rounded-full blur-xl"></div>
          <div className="absolute top-2 right-4 w-8 h-8 bg-purple-400/30 rounded-full blur-lg"></div>
          <div className="absolute bottom-1 left-8 w-6 h-6 bg-yellow-400/30 rounded-full blur-md"></div>
          <span className={`relative text-xs font-bold uppercase tracking-wide px-3 py-1 ${typeColor} bg-white rounded-full shadow-sm`}>
            {caseStudy.type}
          </span>
        </div>
      ) : (
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
      )}

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-full text-left p-6 ${isCreative ? 'hover:bg-white/40' : 'hover:bg-white/5'} transition-colors relative z-10`}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            {!isCreative && <p className="text-green-400 font-mono text-xs mb-2">$ cat case_study.md</p>}
            <h3 className={`text-lg font-bold mb-2 ${isCreative ? 'text-gray-900' : 'text-white font-mono'}`}>{caseStudy.title}</h3>
            <p className={`text-sm ${isCreative ? 'text-gray-700' : 'text-gray-400 font-mono'}`}>{caseStudy.context}</p>
          </div>
          <div className={`text-2xl ${isCreative ? 'text-pink-500' : 'text-cyan-400'}`}>{isExpanded ? '−' : '+'}</div>
        </div>
      </button>

      {isExpanded && (
        <div className={`border-t-2 ${isCreative ? 'border-pink-300 bg-white/20' : 'border-white/20 bg-white/5'} p-6 relative z-10`}>
          <div className={`${caseStudy.type === 'Hybrid' ? 'grid grid-cols-2 gap-4' : ''} text-sm mb-4`}>
            {(caseStudy.type === 'Creative' || caseStudy.type === 'Hybrid') && (
              <div>
                <h4 className={`font-bold mb-2 uppercase text-xs tracking-wide ${isCreative ? 'text-pink-600' : 'text-cyan-400 font-mono'}`}>
                  {isCreative ? 'Creative' : '$ Creative'}
                </h4>
                <p className={`text-xs ${isCreative ? 'text-gray-800 leading-relaxed' : 'text-gray-300 font-mono'}`}>{caseStudy.creative}</p>
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
            <h4 className={`font-bold mb-2 uppercase text-xs tracking-wide ${isCreative ? 'text-purple-600' : 'text-green-400 font-mono'}`}>
              {isCreative ? 'Results' : '$ Results'}
            </h4>
            <div className="flex flex-wrap gap-2">
              {caseStudy.results.map((r, i) => (
                <div key={i} className={`text-xs py-1 px-3 font-semibold ${isCreative ? 'bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 border border-purple-300 rounded-full' : 'bg-green-400/20 text-green-400 border border-green-400/40 font-mono'}`}>{r}</div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProofCard;
