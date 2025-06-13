
import React from 'react';

const PlanetSphere = () => {
  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-96 h-96 opacity-80">
      <div className="relative w-full h-full">
        {/* Main planet glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-blue-500 to-purple-700 animate-pulse"></div>
        
        {/* Outer glow rings */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/30 via-blue-400/30 to-purple-600/30 scale-110 animate-spin-slow"></div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-blue-600/20 scale-125 animate-reverse-spin"></div>
        
        {/* Inner planet surface */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-purple-800 via-blue-900 to-indigo-900 shadow-inner"></div>
        
        {/* Surface details */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-purple-700/50 via-transparent to-blue-700/50"></div>
        
        {/* Highlight */}
        <div className="absolute top-8 left-8 w-16 h-16 rounded-full bg-gradient-to-br from-white/30 to-transparent blur-sm"></div>
      </div>
    </div>
  );
};

export default PlanetSphere;
