'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FOCUS_TEXT } from '@/constants/focusData';
import { useFocusAnimation } from '@/hooks/useFocusAnimation';

export default function FocusSection() {
  const { 
    sectionRef, 
    isInView, 
    activeStep, 
    containerVariants, 
    itemVariants 
  } = useFocusAnimation();

  return (
    <section 
      id="focus" 
      ref={sectionRef} 
      className="relative w-full bg-[#0A0A0A] text-white py-16 pl-6 sm:pl-12 lg:pl-20 pr-6 sm:pr-12 lg:pr-0 font-sans select-none overflow-hidden"
    >
      <div className="max-w-7xl ml-auto space-y-10">
        
        {/* Header Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
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
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
              
              {/* Foto Container */}
              <div className="order-1 md:order-2 md:col-span-6 lg:col-span-6 w-[calc(100%+3rem)] -mx-6 md:w-full md:mx-0">
                <div className="relative w-full h-[240px] sm:h-[280px] overflow-hidden group">
                  
                  {/* Foto Utama - Warna Asli (Grayscale Dihapus) */}
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
              </div>

              {/* Teks Deskripsi */}
              <div className="order-2 md:order-1 md:col-span-6 lg:col-span-6 pr-0 md:pr-0 space-y-2">
                <span className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white block">
                  {item.title}
                </span>
                
                <p className="text-xs sm:text-sm leading-relaxed text-zinc-200 font-medium">
                  {item.p1}
                </p>
                
                <p className="text-xs sm:text-sm leading-relaxed text-zinc-400">
                  {item.p2}
                </p>

                {/* Badges Menyala Serentak (Kotak Tegas) */}
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
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}