'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { JOURNEY_TEXT } from '@/constants/journeyData';

// Variasi Animasi Framer Motion
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  },
};

export default function JourneySection() {
  return (
    <section 
      id="journey" 
      className="relative w-full bg-[#0A0A0A] text-white py-16 lg:py-20 font-sans select-none overflow-hidden"
    >
      {/* Background Foto Mobile */}
      <div className="block lg:hidden absolute inset-0 z-0 overflow-hidden">
        <img 
          src={JOURNEY_TEXT.image} 
          alt={JOURNEY_TEXT.author}
          className="w-full h-full object-cover object-center grayscale brightness-95 contrast-[110%] opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/50 to-[#0A0A0A]/85" />
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">
        
        {/* Sisi Kiri: Teks Narasi & Filosofi */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="lg:col-span-7 pl-6 sm:pl-12 lg:pl-20 pr-6 lg:pr-12 space-y-8"
        >
          <div className="space-y-2">
            <motion.span 
              variants={itemVariants}
              className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 lg:text-zinc-500 font-bold block drop-shadow-sm"
            >
              {JOURNEY_TEXT.sectionTag}
            </motion.span>
            
            <motion.h2 
              variants={itemVariants}
              className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight drop-shadow-md"
            >
              {JOURNEY_TEXT.headline}
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl font-medium text-zinc-300 lg:text-zinc-400 italic"
            >
              {JOURNEY_TEXT.subHeadline}
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="space-y-1 text-sm sm:text-base text-zinc-200 lg:text-zinc-400 font-medium drop-shadow-sm">
            {JOURNEY_TEXT.paragraphs.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-3 pt-2">
            <p className="text-base sm:text-lg font-bold text-white font-mono uppercase tracking-wide drop-shadow-sm">
              {JOURNEY_TEXT.trialQuote}
            </p>
            
            <div className="space-y-1.5 pl-4 border-l-2 border-white">
              {JOURNEY_TEXT.actionPoints.map((action, idx) => (
                <p key={idx} className="text-sm sm:text-base font-black uppercase text-white lg:text-zinc-200 tracking-wider">
                  {action}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-xs sm:text-sm text-zinc-200 lg:text-zinc-400 leading-relaxed font-medium max-w-xl drop-shadow-sm"
          >
            {JOURNEY_TEXT.philosophyQuote}
          </motion.p>

          <motion.div variants={itemVariants} className="pt-4 space-y-1 border-t border-zinc-700 lg:border-zinc-900">
            <p className="text-sm font-mono text-zinc-300 lg:text-zinc-500 italic">
              {JOURNEY_TEXT.closingText}
            </p>
            <p className="text-base sm:text-lg font-mono font-black uppercase tracking-widest text-white drop-shadow-sm">
              {JOURNEY_TEXT.author}
            </p>
          </motion.div>
        </motion.div>

        {/* Sisi Kanan: Foto Desktop */}
        <div className="hidden lg:block lg:col-span-5 relative w-full h-[720px] overflow-hidden">
          <img 
            src={JOURNEY_TEXT.image} 
            alt={JOURNEY_TEXT.author}
            className="w-full h-full object-cover object-center grayscale brightness-90 contrast-[125%] filter"
          />
          <div className="absolute inset-y-0 left-0 w-3/4 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent pointer-events-none" />
        </div>

      </div>
    </section>
  );
}