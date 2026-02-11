
import React from 'react';

export const Footer: React.FC<{ pageNumber: number; isDark?: boolean }> = ({ pageNumber, isDark }) => {
  return (
    <footer className={`flex justify-between items-center px-12 py-4 border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
      <div className={`text-xs font-semibold ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
        Official Institutional Report &copy; 2024
      </div>
      <div className={`text-xs font-bold ${isDark ? 'text-white/40' : 'text-gray-400'}`}>
        TEVTA PUNJAB • STRIVING FOR EXCELLENCE
      </div>
      <div className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold ${isDark ? 'bg-white/20 text-white' : 'bg-primary text-white'}`}>
        {pageNumber}
      </div>
    </footer>
  );
};
