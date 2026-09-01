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
      className="relative w-full bg-[#0A0A0A] text-white py-16 lg:py-20 font-sans select-none overflow-hidden -mt-px"
    >
      {/* Background Foto Mobile (Pudar Atas dan Bawah Mulus) */}
      <div className="block lg:hidden absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img 
          src={JOURNEY_TEXT.image} 
          alt={JOURNEY_TEXT.author}
          className="w-full h-full object-cover object-center grayscale brightness-95 contrast-[110%] opacity-70"
          style={{
            WebkitMaskImage:
              'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)',
            maskImage:
              'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-transparent to-[#0A0A0A]/80" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center">
        
        {/* Sisi Kiri: Teks Narasi & Filosofi */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="w-full lg:max-w-2xl xl:max-w-3xl pl-6 sm:pl-12 lg:pl-20 pr-6 lg:pr-12 space-y-8 z-10"
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
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:flex absolute right-0 bottom-0 z-0 w-[50vw] max-w-[700px] xl:max-w-[800px] h-full items-center justify-end pointer-events-none"
        >
          <img 
            src={JOURNEY_TEXT.image} 
            alt={JOURNEY_TEXT.author}
            className="w-full h-full object-cover object-[center_35%] grayscale brightness-90 contrast-[125%] filter pointer-events-auto"
            style={{
              WebkitMaskImage:
                'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 100%), linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)',
              WebkitMaskComposite: 'intersect',
              maskImage:
                'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 100%), linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)',
              maskComposite: 'intersect',
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
}