'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePreloader } from '@/hooks/usePreloader';

export default function Preloader() {
  const { progress, isLoading } = usePreloader();
  
  const fullText = "NAGATA DARMAWAN.";
  
  // Menentukan jumlah huruf yang muncul berdasarkan persentase progress (0 - 100%)
  const letterCount = Math.floor((progress / 100) * fullText.length);
  const displayedText = fullText.slice(0, letterCount);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[999] flex flex-col justify-between bg-[#0D0D0D] text-white px-8 py-10 md:px-16 md:py-14 select-none font-sans pointer-events-auto"
        >
          {/* Top Spacer */}
          <div className="w-full" />

          {/* Center Title dengan Efek Mengetik Otomatis Berdasarkan Progress */}
          <div className="w-full my-auto">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-white leading-none uppercase min-h-[1em]">
              {displayedText}
              {progress < 100 && (
                <span className="inline-block w-3 h-[0.8em] bg-white ml-2 animate-pulse align-baseline" />
              )}
            </h1>
          </div>

          {/* Bottom Info & Progress Line */}
          <div className="w-full flex flex-col justify-end">
            <div className="flex justify-end items-baseline w-full mb-3">
              <span className="text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tight leading-none font-mono">
                {progress}
              </span>
            </div>

            <div className="w-full h-[2px] bg-[#222222] relative overflow-hidden mb-4">
              <div
                className="absolute top-0 left-0 bottom-0 bg-white transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex justify-between items-center w-full">
              <p className="text-[10px] sm:text-xs md:text-sm font-mono tracking-[0.25em] text-[#666666] uppercase font-medium">
                TECH ENTHUSIAST &bull; FINANCE ENTHUSIAST
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}