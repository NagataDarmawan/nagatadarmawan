'use client';

import React, { useRef } from 'react';
import { motion, Variants, useInView } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { HERO_TEXT } from '@/constants/heroData';
import { useTypingLoop } from '@/hooks/useTypingLoop';
import { scrollToSection } from '@/utils/scrollTo';

interface HeroSectionProps {
  isReady?: boolean;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] as const } 
  },
};

export default function HeroSection({ isReady = true }: HeroSectionProps) {
  const { displayedFirst, displayedLast } = useTypingLoop(
    HERO_TEXT.firstName,
    HERO_TEXT.lastName,
    isReady
  );

  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, amount: 0.1 });

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen lg:h-screen bg-dark-bg text-white flex flex-col justify-between px-6 sm:px-12 lg:px-20 pt-16 lg:pt-20 pb-6 font-sans border-b border-line select-none overflow-x-hidden"
    >
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-zinc-900/30 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="relative w-full flex flex-col lg:flex-row items-center my-auto py-2 lg:py-0 gap-6 lg:gap-0 z-10">
        
        {/* TEKS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isReady ? "show" : "hidden"}
          className="w-full max-w-xl lg:max-w-2xl flex flex-col justify-center space-y-4 md:space-y-6 mr-auto mt-auto pt-10 lg:pt-0"
        >
          {/* FOTO MOBILE */}
          <motion.div 
            variants={itemVariants}
            className="block lg:hidden w-[calc(100%+3rem)] -mx-6 -mt-28 sm:-mt-32 mb-6"
          >
            <img
              src="/nagataSelf2.jpg"
              alt="Nagata Darmawan"
              className="w-full h-auto object-cover object-top filter drop-shadow-2xl"
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)',
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)',
              }}
            />
          </motion.div>

          {/* Tagline */}
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <div className="relative w-10 h-[2px] overflow-hidden rounded-full bg-zinc-800">
              <motion.div
                animate={{ x: ['-100%', '100%'] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_8px_#ffffff]"
              />
            </div>

            <p className="text-xs sm:text-sm font-mono tracking-[0.25em] text-muted uppercase font-medium">
              {HERO_TEXT.tagline}
            </p>
          </motion.div>

          {/* Headline Name */}
          <motion.div variants={itemVariants} className="space-y-1 sm:space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight text-white leading-[0.9] flex flex-col">
              <span className="block min-h-[0.9em]">
                {displayedFirst}

                {displayedLast.length === 0 && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.6, ease: 'easeInOut' }}
                    className="inline-block w-[4px] h-[0.75em] bg-white ml-2 align-baseline"
                  />
                )}
              </span>

              <span className="block min-h-[0.9em]">
                {displayedLast}

                {displayedLast.length > 0 && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.6, ease: 'easeInOut' }}
                    className="inline-block w-[4px] h-[0.75em] bg-white ml-2 align-baseline"
                  />
                )}
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl font-bold text-offwhite tracking-tight pt-1">
              {HERO_TEXT.subHeadline}
            </p>
          </motion.div>

          {/* Paragraphs */}
          <motion.div
            variants={itemVariants}
            className="space-y-2.5 text-xs sm:text-sm md:text-base leading-relaxed"
          >
            <p className="text-offwhite font-normal">
              {HERO_TEXT.paragraph1.before}
              <strong className="font-bold text-white">{HERO_TEXT.paragraph1.bold1}</strong>
              {HERO_TEXT.paragraph1.middle1}
              <strong className="font-bold text-white">{HERO_TEXT.paragraph1.bold2}</strong>
              {HERO_TEXT.paragraph1.middle2}
              <strong className="font-bold text-white">{HERO_TEXT.paragraph1.bold3}</strong>
              {HERO_TEXT.paragraph1.middle3}
              <strong className="font-bold text-white">{HERO_TEXT.paragraph1.bold4}</strong>
              {HERO_TEXT.paragraph1.after}
            </p>

            <p className="text-offwhite font-normal">
              {HERO_TEXT.paragraph2.before}
              <strong className="font-bold text-white">{HERO_TEXT.paragraph2.bold1}</strong>
              {HERO_TEXT.paragraph2.middle}
              <strong className="font-bold text-white">{HERO_TEXT.paragraph2.bold2}</strong>
              {HERO_TEXT.paragraph2.after}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-row items-center gap-3 sm:gap-4 pt-1"
          >
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, '#about')}
              className="flex-1 sm:flex-initial text-center px-4 sm:px-7 py-3.5 rounded-full bg-white text-black font-bold text-xs sm:text-sm transition-transform duration-300 hover:-translate-y-1 active:scale-95 cursor-pointer whitespace-nowrap"
            >
              Kenali Saya
            </a>

            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, '#projects')}
              className="flex-1 sm:flex-initial text-center px-4 sm:px-7 py-3.5 rounded-full border border-line bg-zinc-950 text-offwhite font-medium text-xs sm:text-sm transition-transform duration-300 hover:-translate-y-1 hover:text-white cursor-pointer whitespace-nowrap"
            >
              Lihat Yang Saya Bangun
            </a>
          </motion.div>
        </motion.div>

        {/* FOTO DESKTOP - Transisi Gradien Pudar Diperhalus Mulus */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isReady && isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:flex absolute right-0 -mr-6 sm:-mr-12 lg:-mr-20 bottom-[-24px] z-0 w-[55vw] max-w-[750px] xl:max-w-[850px] h-[95vh] items-end justify-end pointer-events-none"
        >
          <img
            src="/nagataSelf.jpg"
            alt="Nagata Darmawan"
            className="h-full w-full object-cover object-right-bottom filter drop-shadow-2xl pointer-events-auto"
            style={{
              WebkitMaskImage:
                'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 15%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,1) 55%, rgba(0,0,0,1) 100%), linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.4) 88%, rgba(0,0,0,0) 100%)',
              WebkitMaskComposite: 'intersect',
              maskImage:
                'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 15%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,1) 55%, rgba(0,0,0,1) 100%), linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.4) 88%, rgba(0,0,0,0) 100%)',
              maskComposite: 'intersect',
            }}
          />
          {/* Overlay pendukung agar pudar bagian bawah semakin sempurna */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-transparent pointer-events-none" />
        </motion.div>

      </div>

      {/* Footer / Indicator */}
      <div className="w-full flex items-center justify-between text-xs text-muted font-mono pt-4 border-t border-line shrink-0 z-10 mt-6 lg:mt-0">
        <div className="flex items-center gap-2">
          <span>SCROLL DOWN</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-white" />
        </div>

        <span>EST. 2026</span>
      </div>
    </section>
  );
}