
import React from 'react';
import { SLIDES } from '../constants';

interface SidebarProps {
  currentSlide: number;
  onNavigate: (id: number) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentSlide, onNavigate }) => {
  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-gray-100 z-50 overflow-y-auto hidden lg:block no-print shadow-xl">
      <div className="p-8 border-b border-gray-50">
        <h2 className="text-primary font-heading font-bold text-xl uppercase tracking-wider">Index</h2>
        <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mt-1">Presentation Outline</p>
      </div>
      <nav className="py-4">
        {SLIDES.map((slide) => (
          <button
            key={slide.id}
            onClick={() => onNavigate(slide.id)}
            className={`w-full text-left px-8 py-3 transition-all duration-300 flex items-center gap-3 border-l-4 ${
              currentSlide === slide.id
                ? 'bg-primary/5 text-primary border-primary font-semibold'
                : 'text-gray-400 border-transparent hover:bg-gray-50 hover:text-gray-600'
            }`}
          >
            <span className={`text-[10px] w-5 h-5 flex items-center justify-center rounded-full border ${
              currentSlide === slide.id ? 'border-primary' : 'border-gray-200'
            }`}>
              {slide.id}
            </span>
            <span className="text-xs uppercase tracking-tight">{slide.title}</span>
          </button>
        ))}
      </nav>
      <div className="absolute bottom-0 left-0 right-0 p-8 bg-gray-50/50">
        <div className="flex flex-col gap-2">
           <button 
             onClick={() => window.print()}
             className="w-full bg-primary text-white text-[10px] font-bold py-2 px-4 rounded hover:bg-opacity-90 transition-all uppercase tracking-widest"
           >
             Export to PDF
           </button>
        </div>
      </div>
    </aside>
  );
};
