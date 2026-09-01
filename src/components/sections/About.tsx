"use client";

import React from "react";
import { motion } from "framer-motion";
import { ABOUT_TEXT } from "@/constants/aboutData";
import { useAboutAnimation } from "@/hooks/useAboutAnimation";
import { use3DTilt } from "@/hooks/use3DTilt";

export default function AboutSection() {
  const { containerVariants, itemVariants } = useAboutAnimation();
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = use3DTilt();

  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-[#EAE7E0] text-[#111111] py-24 px-4 sm:px-8 lg:px-12 overflow-hidden font-sans border-b border-[#DCD8D0] select-none"
    >
      <div className="max-w-7xl mx-auto space-y-12 z-10 relative">
        {/* Headline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          className="max-w-4xl"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#111111] leading-[1.05] tracking-tight"
          >
            {ABOUT_TEXT.headline}
          </motion.h2>
        </motion.div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch pt-2">
          {/* Column Card 3D */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            className="lg:col-span-6 [perspective:1000px]"
          >
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative bg-[#0D0D0D] rounded-xl overflow-hidden text-white p-6 sm:p-8 flex flex-col justify-between h-[560px] sm:h-[680px] shadow-2xl group cursor-pointer border border-white/5"
            >
              {/* Photo Background */}
              <div className="absolute inset-0 overflow-hidden [transform:translateZ(10px)]">
                <img
                  src="/nagatahp.png"
                  alt="Nagata Darmawan"
                  className="w-full h-full object-cover object-top grayscale contrast-125 filter transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient Soft Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40 pointer-events-none" />
              </div>

              {/* Badge */}
              <div className="z-10 [transform:translateZ(25px)]">
                <span className="inline-block px-3.5 py-1.5 bg-black/80 backdrop-blur-md text-[11px] font-mono uppercase tracking-wider font-bold rounded text-white border border-white/10">
                  {ABOUT_TEXT.imageBadge}
                </span>
              </div>

              {/* Caption */}
              <div className="z-10 space-y-1 mt-auto [transform:translateZ(20px)]">
                <span className="text-xs font-mono font-bold text-white block">
                  {ABOUT_TEXT.imageYear}
                </span>
                <p className="text-xs text-zinc-300 font-medium leading-tight">
                  {ABOUT_TEXT.imageCaption}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Text Story */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="lg:col-span-6 flex flex-col justify-between space-y-8 text-sm sm:text-base md:text-lg leading-relaxed text-[#5F5F5B]"
          >
            <div className="space-y-4">
              <motion.p
                variants={itemVariants}
                className="font-bold text-[#111111] text-xl sm:text-2xl"
              >
                {ABOUT_TEXT.bioParagraphs.greeting}
              </motion.p>

              <motion.p variants={itemVariants}>
                {ABOUT_TEXT.bioParagraphs.p1.before}
                <strong className="font-bold text-[#111111]">
                  {ABOUT_TEXT.bioParagraphs.p1.bold1}
                </strong>
                {ABOUT_TEXT.bioParagraphs.p1.middle}
                <strong className="font-bold text-[#111111]">
                  {ABOUT_TEXT.bioParagraphs.p1.bold2}
                </strong>
                {ABOUT_TEXT.bioParagraphs.p1.after}
              </motion.p>

              <motion.p variants={itemVariants}>
                {ABOUT_TEXT.bioParagraphs.p2.before}
                <strong className="font-bold text-[#111111]">
                  {ABOUT_TEXT.bioParagraphs.p2.bold1}
                </strong>
                {ABOUT_TEXT.bioParagraphs.p2.middle}
                <strong className="font-bold text-[#111111]">
                  {ABOUT_TEXT.bioParagraphs.p2.bold2}
                </strong>
                {ABOUT_TEXT.bioParagraphs.p2.after}
              </motion.p>

              <motion.p variants={itemVariants}>
                {ABOUT_TEXT.bioParagraphs.p3.before}
                <strong className="font-bold text-[#111111]">
                  {ABOUT_TEXT.bioParagraphs.p3.bold1}
                </strong>
                {ABOUT_TEXT.bioParagraphs.p3.after}
              </motion.p>

              <motion.p variants={itemVariants}>
                {ABOUT_TEXT.bioParagraphs.p4}
              </motion.p>

              <motion.p variants={itemVariants}>
                {ABOUT_TEXT.bioParagraphs.p5.before}
                <strong className="font-bold text-[#111111]">
                  {ABOUT_TEXT.bioParagraphs.p5.bold1}
                </strong>
                {ABOUT_TEXT.bioParagraphs.p5.after}
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="font-bold text-[#111111] text-lg sm:text-xl pt-2"
              >
                {ABOUT_TEXT.bioParagraphs.p6.part1}
                <span>{ABOUT_TEXT.bioParagraphs.p6.part2}</span>
              </motion.p>

              {/* Prinsip Sederhana */}
              <motion.div
                variants={itemVariants}
                className="pt-6 border-t border-[#DCD8D0] space-y-1"
              >
                <span className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-[#111111] block">
                  {ABOUT_TEXT.bioParagraphs.principle.label}
                </span>
                <p className="text-sm sm:text-base font-semibold text-[#111111] italic">
                  {`"${ABOUT_TEXT.bioParagraphs.principle.value}"`}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
