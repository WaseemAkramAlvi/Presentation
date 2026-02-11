
import React from 'react';
import { INSTITUTION_NAME, AFFILIATION } from '../constants';
import { Building2 } from 'lucide-react';

export const Header: React.FC<{ isDark?: boolean }> = ({ isDark }) => {
  return (
    <header className={`flex justify-between items-center px-12 py-6 border-b ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
      <div className="flex items-center gap-4">
        <div className={`p-2 rounded-lg ${isDark ? 'bg-white/10' : 'bg-primary/10'}`}>
          <Building2 className={isDark ? 'text-white' : 'text-primary'} size={28} />
        </div>
        <div>
          <h1 className={`font-heading font-bold text-lg leading-tight uppercase ${isDark ? 'text-white' : 'text-primary'}`}>
            {INSTITUTION_NAME}
          </h1>
          <p className={`text-xs font-medium tracking-widest uppercase ${isDark ? 'text-white/60' : 'text-accent'}`}>
            {AFFILIATION}
          </p>
        </div>
      </div>
      <div className={`hidden md:block text-right ${isDark ? 'text-white/40' : 'text-gray-400'}`}>
        <p className="text-[10px] font-bold tracking-tighter uppercase italic">Institutional Review - FY 2023-24</p>
      </div>
    </header>
  );
};
