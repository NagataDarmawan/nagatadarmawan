'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FOCUS_TEXT } from '@/constants/focusData';
import { useFocusAnimation } from '@/animations/useFocusAnimation';
import { 
  staggerContainer as containerVariants, 
  fadeInUp as itemVariants,
  slideInLeft,
  slideInRight
} from '@/animations/variants';

export default function FocusSection() {
  const { activeStep } = useFocusAnimation();

  return (
    <section 
      id="focus" 
      className="relative w-full bg-[#0A0A0A] text-white py-16 pl-6 sm:pl-12 lg:pl-20 pr-6 sm:pr-12 lg:pr-0 font-sans select-none overflow-hidden"
    >
      <div className="max-w-7xl ml-auto space-y-10">
        
        {/* Header Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-2 max-w-3xl pr-0 md:pr-12 lg:pr-20"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            {FOCUS_TEXT.headline}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-sm sm:text-base text-zinc-400 font-medium">
            {FOCUS_TEXT.subHeadline}
          </motion.p>
        </motion.div>

        {/* List Per Poin */}
        <div className="space-y-10 md:space-y-6 lg:space-y-8">
          {FOCUS_TEXT.items.map((item) => (
            <div 
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center overflow-hidden"
            >
              
              {/* Foto Container (Datang dari Samping Kanan) */}
              <motion.div 
                variants={slideInRight}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                className="order-1 md:order-2 md:col-span-6 lg:col-span-6 w-[calc(100%+3rem)] -mx-6 md:w-full md:mx-0"
              >
                <div className="relative w-full h-[240px] sm:h-[280px] overflow-hidden group">
                  
                  {/* Foto Utama - Warna Asli */}
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Gradien Kiri (Desktop saja) */}
                  <div className="hidden md:block absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent pointer-events-none" />
                  
                  {/* Gradien Atas & Bawah */}
                  <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent pointer-events-none" />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent pointer-events-none" />

                </div>
              </motion.div>

              {/* Teks Deskripsi (Datang dari Samping Kiri) */}
              <motion.div 
                variants={slideInLeft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                className="order-2 md:order-1 md:col-span-6 lg:col-span-6 pr-0 md:pr-0 space-y-3"
              >
                <span className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white block">
                  {item.title}
                </span>
                
                <p className="text-xs sm:text-sm leading-relaxed text-zinc-300 font-medium">
                  {item.description}
                </p>

                {/* Badges Menyala Serentak */}
                <div className="pt-2 space-y-1.5">
                  <span className="text-[11px] font-mono text-zinc-500 block">
                    {item.focusLabel}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((skill, skillIdx) => (
                      <motion.span 
                        key={skillIdx}
                        animate={
                          (activeStep % item.skills.length) === skillIdx
                            ? { 
                                backgroundColor: "#FFFFFF", 
                                color: "#000000",
                                borderColor: "#FFFFFF",
                                scale: 1.05,
                                boxShadow: "0 0 12px rgba(255, 255, 255, 0.4)"
                              } 
                            : { 
                                backgroundColor: "rgba(9, 9, 11, 0.6)", 
                                color: "#A1A1AA",
                                borderColor: "#27272A",
                                scale: 1,
                                boxShadow: "0 0 0px rgba(0, 0, 0, 0)"
                              }
                        }
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="px-3 py-1 rounded-none border text-[11px] font-mono font-semibold cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}