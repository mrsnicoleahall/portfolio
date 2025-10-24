import React from 'react';
import { useState } from 'react';

const ProofCard = ({ caseStudy }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-2 border-black">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left p-6 hover:bg-gray-100 transition-colors"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wide border border-black px-2 py-1 inline-block mb-3">
              {caseStudy.type}
            </span>
            <h3 className="text-xl font-bold mb-2">{caseStudy.title}</h3>
            <p className="text-sm text-gray-600">{caseStudy.context}</p>
          </div>
          <div className="text-2xl">{isExpanded ? '−' : '+'}</div>
        </div>
      </button>

      {isExpanded && (
        <div className="border-t-2 border-black p-6 bg-gray-50">
          <div className="grid grid-cols-2 gap-4 text-sm mb-4">
            <div>
              <h4 className="font-bold mb-2 uppercase text-xs tracking-wide">Creative</h4>
              <p className="text-gray-700">{caseStudy.creative}</p>
            </div>
            <div>
              <h4 className="font-bold mb-2 uppercase text-xs tracking-wide">Technical</h4>
              <p className="text-gray-700">{caseStudy.technical}</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-2 uppercase text-xs tracking-wide">Results</h4>
            <div className="flex flex-wrap gap-2">
              {caseStudy.results.map((r, i) => (
                <div key={i} className="text-xs bg-black text-white py-1 px-3 font-semibold">{r}</div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProofCard;
