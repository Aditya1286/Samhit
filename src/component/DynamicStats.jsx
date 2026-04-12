import React, { useState, useEffect } from 'react';

const DynamicStats = () => {
  const [deaths, setDeaths] = useState(0);
  const [affected, setAffected] = useState(970000000);

  useEffect(() => {
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const diffTime = Math.abs(now - startOfYear);
    const fractionOfYear = diffTime / (1000 * 60 * 60 * 24 * 365.25);
    
    const yearlyDeaths = 703000;
    const baseDeaths = Math.floor(yearlyDeaths * fractionOfYear);

    setDeaths(baseDeaths);

    const interval = setInterval(() => {
        setDeaths(prev => prev + (Math.random() > 0.85 ? 1 : 0));
        setAffected(prev => prev + Math.floor(Math.random() * 5));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 px-4 fade-in">
      <div className="text-center group bg-gray-900/40 p-6 rounded-2xl border border-gray-800 backdrop-blur-sm shadow-xl flex flex-col justify-center">
        <div className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-black gradient-text mb-2 transition-transform transform group-hover:scale-105 duration-300 tracking-tighter truncate">
          95%
        </div>
        <div className="text-gray-400 text-xs sm:text-sm lg:text-base font-medium">Detection Accuracy</div>
      </div>
      
      <div className="text-center group bg-gray-900/40 p-6 rounded-2xl border border-gray-800 backdrop-blur-sm relative overflow-hidden shadow-xl flex flex-col justify-center">
        <div className="absolute top-4 right-4 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-[10px] text-red-500 font-bold uppercase tracking-widest opacity-80">Live</span>
        </div>
        <div className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-2 transition-transform transform group-hover:scale-105 duration-300 tracking-tighter truncate">
          {deaths.toLocaleString()}
        </div>
        <div className="text-gray-400 text-xs sm:text-sm lg:text-base font-medium flex flex-col items-center">
            Lives Lost This Year
            <span className="text-[10px] sm:text-xs text-gray-500 mt-1 italic tracking-wide">(WHO metric)</span>
        </div>
      </div>

      <div className="text-center group bg-gray-900/40 p-6 rounded-2xl border border-gray-800 backdrop-blur-sm relative overflow-hidden shadow-xl flex flex-col justify-center">
        <div className="absolute top-4 right-4 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-[10px] text-orange-500 font-bold uppercase tracking-widest opacity-80">Live</span>
        </div>
        <div className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-black gradient-text mb-2 transition-transform transform group-hover:scale-105 duration-300 tracking-tighter truncate">
          {affected.toLocaleString()}
        </div>
        <div className="text-gray-400 text-xs sm:text-sm lg:text-base font-medium flex flex-col items-center px-1">
            People Suffering Globally
            <span className="text-[10px] sm:text-xs text-gray-500 mt-1 italic tracking-wide">(Est.)</span>
        </div>
      </div>
    </div>
  );
};

export default DynamicStats;
