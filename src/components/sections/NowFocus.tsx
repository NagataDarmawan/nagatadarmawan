'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { NOW_FOCUS_TEXT } from '@/constants/nowFocusData';
import { 
  staggerContainer as containerVariants, 
  fadeInUp as headerVariants,
  slideInLeft,
  slideInRight
} from '@/animations/variants';

export default function NowFocusSection() {
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

            // Di Mobile:
            // - Item 1 (index 0) & Item 3 (index 2): Seluruh blok muncul dari KIRI (slideInLeft)
            // - Item 2 (index 1): Seluruh blok muncul dari KANAN (slideInRight)
            // Di Desktop:
            // - Elemen di sisi Kiri (order 1) muncul dari KIRI, Elemen di sisi Kanan (order 2) muncul dari KANAN
            const leftBlockAnimation = isEven ? slideInRight : slideInLeft;
            const rightBlockAnimation = isEven ? slideInLeft : slideInRight;

            return (
              <div
                key={item.id}
                className="flex flex-row items-center gap-6 md:grid md:grid-cols-12 md:gap-12 md:items-center group cursor-pointer"
              >
                
                {/* Blok Angka Raksasa */}
                <motion.div 
                  variants={isEven ? rightBlockAnimation : leftBlockAnimation}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.2 }}
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
                </motion.div>

                {/* Blok Teks Deskripsi */}
                <motion.div 
                  variants={isEven ? leftBlockAnimation : rightBlockAnimation}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.2 }}
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
                </motion.div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}