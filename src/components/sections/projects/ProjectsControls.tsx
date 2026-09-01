'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_TEXT } from '@/constants/projectsData';

interface ProjectControlsProps {
  currentIndex: number;
  isPaused: boolean;
  handleSelect: (index: number) => void;
  handlePrev: () => void;
  handleNext: () => void;
}

export default function ProjectControls({
  currentIndex,
  isPaused,
  handleSelect,
  handlePrev,
  handleNext,
}: ProjectControlsProps) {
  return (
    <div className="flex items-center justify-between gap-6 pt-2">
      {/* 4 Garis Progress Indicator */}
      <div className="flex items-center gap-2 flex-1 max-w-xs sm:max-w-md">
        {PROJECTS_TEXT.items.map((_, idx) => {
          const isActive = idx === currentIndex;
          const isPassed = idx < currentIndex;

          return (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                handleSelect(idx);
              }}
              className="h-1 flex-1 relative bg-zinc-800/90 rounded-none overflow-hidden transition-all duration-300 cursor-pointer"
            >
              {isActive && (
                <motion.div
                  key={`active-${currentIndex}-${isPaused}`}
                  initial={{ width: '0%' }}
                  animate={{ width: isPaused ? '0%' : '100%' }}
                  transition={{ duration: isPaused ? 0 : 5, ease: 'linear' }}
                  className="absolute inset-y-0 left-0 bg-white"
                />
              )}
              {isPassed && <div className="absolute inset-0 bg-white/60" />}
            </button>
          );
        })}
      </div>

      {/* Tombol Panah Prev / Next */}
      <div className="flex items-center gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="w-10 h-10 rounded-none border border-zinc-700 bg-black/60 hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center font-mono text-sm text-white backdrop-blur-md cursor-pointer"
          aria-label="Previous Project"
        >
          ←
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="w-10 h-10 rounded-none border border-zinc-700 bg-black/60 hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center font-mono text-sm text-white backdrop-blur-md cursor-pointer"
          aria-label="Next Project"
        >
          →
        </button>
      </div>
    </div>
  );
}