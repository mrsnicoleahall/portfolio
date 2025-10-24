const TerminalWindow = ({ title, children, className = "" }) => {
  return (
    <div className={`bg-black border-2 border-black ${className}`}>
      {/* Terminal Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-white/20">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-xs text-white/60 font-mono">{title}</span>
      </div>
      {/* Terminal Content */}
      <div className="p-6 md:p-8 font-mono">
        {children}
      </div>
    </div>
  );
};

export default TerminalWindow;
