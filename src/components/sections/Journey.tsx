'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { JOURNEY_TEXT } from '@/constants/journeyData';
import { useJourneyAnimation } from '@/hooks/useJourneyAnimation';

export default function JourneySection() {
  const { containerVariants, itemVariants } = useJourneyAnimation();

  return (
    <section 
      id="journey" 
      className="relative w-full bg-[#0A0A0A] text-white py-16 lg:py-20 font-sans select-none overflow-hidden -mt-px"
    >
      {/* Main Container */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center">
        
        {/* Sisi Kiri: Teks Narasi & Filosofi */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="w-full lg:max-w-2xl xl:max-w-3xl pl-6 sm:pl-12 lg:pl-20 pr-6 sm:pr-12 lg:pr-12 space-y-6 z-10"
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
              className="text-base sm:text-lg font-medium text-zinc-300 lg:text-zinc-400 italic"
            >
              {JOURNEY_TEXT.subHeadline}
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="space-y-4 text-sm sm:text-base text-zinc-200 lg:text-zinc-300 font-normal leading-relaxed drop-shadow-sm">
            {JOURNEY_TEXT.story.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="pt-4 space-y-1 border-t border-zinc-800">
            <p className="text-xs sm:text-sm font-mono text-zinc-400 italic">
              &quot;{JOURNEY_TEXT.closing.quote}&quot;
            </p>
            <p className="text-sm font-mono font-bold uppercase tracking-widest text-white drop-shadow-sm pt-1">
              {JOURNEY_TEXT.closing.author}
            </p>
          </motion.div>
        </motion.div>

        {/* Sisi Kanan: Foto Desktop Saja */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:flex absolute right-0 bottom-0 z-0 w-[50vw] max-w-[700px] xl:max-w-[800px] h-full items-center justify-end pointer-events-none"
        >
          <img 
            src={JOURNEY_TEXT.image} 
            alt={JOURNEY_TEXT.closing.author}
            className="w-full h-full object-cover object-[center_35%] filter drop-shadow-2xl pointer-events-auto"
            style={{
              WebkitMaskImage:
                'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 15%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 100%), linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)',
              WebkitMaskComposite: 'intersect',
              maskImage:
                'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 15%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 100%), linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)',
              maskComposite: 'intersect',
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
}