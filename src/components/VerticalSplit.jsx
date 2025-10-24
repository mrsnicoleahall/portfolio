
import React from 'react';

const VerticalSplit = ({ leftContent, rightContent, leftTitle, rightTitle, toc }) => {
  return (
    <div className="relative">
      {toc && (
        <div className="sticky top-24 z-10 flex justify-center mb-8">
          <div className="bg-background/80 backdrop-blur-sm p-2 rounded-md border border-border flex gap-4">
            {toc.map(item => (
              <a key={item.id} href={`#${item.id}`} className="text-xs text-muted-foreground hover:text-foreground transition-colors px-2 py-1">{item.label}</a>
            ))}
          </div>
        </div>
      )}
      <div className="grid md:grid-cols-2 gap-8 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-px bg-border hidden md:block"></div>
        
        {/* Left Column */}
        <div className="relative md:pr-4">
          <div className="sticky top-24 md:top-32">
            <h2 className="text-2xl font-bold mb-6 creative-accent-light">{leftTitle}</h2>
          </div>
          <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground space-y-6">
            {leftContent}
          </div>
        </div>
        
        {/* Right Column */}
        <div className="relative md:pl-4">
          <div className="sticky top-24 md:top-32">
            <h2 className="text-2xl font-bold mb-6 technical-accent-light">{rightTitle}</h2>
          </div>
          <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground space-y-6">
            {rightContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalSplit;
