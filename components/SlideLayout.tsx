
import React from 'react';
import { motion } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';

interface SlideLayoutProps {
  children: React.ReactNode;
  pageNumber: number;
  title?: string;
  isDark?: boolean;
}

export const SlideLayout: React.FC<SlideLayoutProps> = ({ children, pageNumber, title, isDark = false }) => {
  return (
    <div className={`slide slide-snap min-h-screen h-screen flex flex-col ${isDark ? 'bg-primary text-white' : 'bg-report-bg text-report-text'}`}>
      <Header isDark={isDark} />
      
      <main className="flex-grow p-12 overflow-hidden flex flex-col">
        {title && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className={`font-heading text-3xl font-bold uppercase tracking-tight relative pb-4 inline-block ${isDark ? 'text-accent' : 'text-primary'}`}>
              {title}
              <span className={`absolute bottom-0 left-0 w-24 h-1.5 rounded-full ${isDark ? 'bg-white/20' : 'bg-accent'}`}></span>
            </h2>
          </motion.div>
        )}
        <div className="flex-grow">
          {children}
        </div>
      </main>

      <Footer pageNumber={pageNumber} isDark={isDark} />
    </div>
  );
};
