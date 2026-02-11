
import React from 'react';

interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

export const Timeline: React.FC<{ items: TimelineItem[] }> = ({ items }) => {
  return (
    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
      {items.map((item, index) => (
        <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary text-accent shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <span className="text-[10px] font-bold">{index + 1}</span>
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-heading font-bold text-primary">{item.title}</div>
              <time className="font-heading font-medium text-accent text-xs uppercase">{item.date}</time>
            </div>
            <div className="text-gray-500 text-xs leading-relaxed">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
