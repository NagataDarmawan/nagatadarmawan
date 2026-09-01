'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { NOW_FOCUS_TEXT } from '@/constants/nowFocusData';
import { useNowFocusAnimation } from '@/hooks/useNowFocusAnimation';

export default function NowFocusSection() {
  const { containerVariants, headerVariants, cardVariants } = useNowFocusAnimation();

  return (
    <section 
      id="now-focus" 
      className="relative w-full bg-[#0A0A0A] text-white py-20 px-6 sm:px-12 lg:px-20 font-sans border-b border-zinc-900 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-3 max-w-3xl"
        >
          <motion.span 
            variants={headerVariants}
            className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 font-bold block"
          >
            {NOW_FOCUS_TEXT.sectionTag}
          </motion.span>
          <motion.h2 
            variants={headerVariants}
            className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight"
          >
            {NOW_FOCUS_TEXT.headline}
          </motion.h2>
        </motion.div>

        {/* List Per Poin */}
        <div className="space-y-16 md:space-y-24">
          {NOW_FOCUS_TEXT.items.map((item, index) => {
            const isEven = index % 2 === 1;
            const numberDisplay = index + 1;

            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                className="flex flex-row items-center gap-6 md:grid md:grid-cols-12 md:gap-12 md:items-center group cursor-pointer"
              >
                
                {/* Blok Angka Raksasa (Mobile: Warna Asli / Desktop: Grayscale ke Full Color) */}
                <div 
                  className={`shrink-0 flex items-center justify-center ${
                    isEven 
                      ? 'md:order-1 md:col-span-4' 
                      : 'md:order-2 md:col-span-4'
                  }`}
                >
                  <span 
                    className="font-mono text-6xl sm:text-8xl md:text-9xl lg:text-[13rem] font-black leading-none text-transparent bg-clip-text bg-cover bg-center filter grayscale-0 md:grayscale md:brightness-90 md:contrast-[130%] md:group-hover:grayscale-0 md:group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out select-none block"
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    {numberDisplay}
                  </span>
                </div>

                {/* Blok Teks Deskripsi */}
                <div 
                  className={`flex-1 space-y-3 sm:space-y-4 ${
                    isEven ? 'md:order-2 md:col-span-8' : 'md:order-1 md:col-span-8'
                  }`}
                >
                  <h3 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-none">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm md:text-base leading-relaxed text-zinc-400 group-hover:text-zinc-200 transition-colors duration-300 font-medium max-w-2xl">
                    {item.description}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}