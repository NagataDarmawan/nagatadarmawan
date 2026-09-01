"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ABOUT_TEXT } from "@/constants/aboutData";
import { useAboutAnimation } from "@/hooks/useAboutAnimation";

export default function AboutSection() {
  const { containerVariants, itemVariants } = useAboutAnimation();

  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-[#EAE7E0] text-[#111111] py-16 sm:py-24 px-0 sm:px-8 lg:px-12 overflow-hidden font-sans border-b border-[#DCD8D0] select-none"
    >
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 z-10 relative">
        {/* Headline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          className="max-w-4xl px-4 sm:px-0"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#111111] leading-[1.05] tracking-tight"
          >
            {ABOUT_TEXT.headline}
          </motion.h2>
        </motion.div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-2">
          {/* Kolom Foto: Mentok Full Kanan Kiri di Mobile dengan Efek Pudar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            className="lg:col-span-6 w-full flex justify-center items-center relative"
          >
            <div className="relative w-full h-[420px] sm:h-[600px] max-w-none sm:max-w-lg overflow-hidden">
              <Image
                src="/nagatahp2.jpg"
                alt="Nagata Darmawan"
                fill
                priority
                sizes="100vw"
                className="object-cover object-top grayscale contrast-125 filter"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%), linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)",
                  WebkitMaskComposite: "intersect",
                  maskImage:
                    "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%), linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)",
                  maskComposite: "intersect",
                }}
              />

              {/* Overlap Gradien Warna Latar (#EAE7E0) untuk Transisi Halus di Bawah */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#EAE7E0] via-[#EAE7E0]/70 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Column: Text Story */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="lg:col-span-6 flex flex-col justify-between space-y-6 sm:space-y-8 text-sm sm:text-base md:text-lg leading-relaxed text-[#5F5F5B] px-4 sm:px-0"
          >
            <div className="space-y-4">
              <motion.p
                variants={itemVariants}
                className="font-bold text-[#111111] text-xl sm:text-2xl"
              >
                {ABOUT_TEXT.bioParagraphs.greeting}
              </motion.p>

              <motion.p variants={itemVariants}>
                {ABOUT_TEXT.bioParagraphs.p1.before}{" "}
                <strong className="font-bold text-[#111111]">
                  {ABOUT_TEXT.bioParagraphs.p1.bold1}
                </strong>{" "}
                {ABOUT_TEXT.bioParagraphs.p1.middle}{" "}
                <strong className="font-bold text-[#111111]">
                  {ABOUT_TEXT.bioParagraphs.p1.bold2}
                </strong>{" "}
                {ABOUT_TEXT.bioParagraphs.p1.after}
              </motion.p>

              <motion.p variants={itemVariants}>
                {ABOUT_TEXT.bioParagraphs.p2.before}{" "}
                <strong className="font-bold text-[#111111]">
                  {ABOUT_TEXT.bioParagraphs.p2.bold1}
                </strong>{" "}
                {ABOUT_TEXT.bioParagraphs.p2.middle}{" "}
                <strong className="font-bold text-[#111111]">
                  {ABOUT_TEXT.bioParagraphs.p2.bold2}
                </strong>{" "}
                {ABOUT_TEXT.bioParagraphs.p2.after}
              </motion.p>

              <motion.p variants={itemVariants}>
                {ABOUT_TEXT.bioParagraphs.p3.before}{" "}
                <strong className="font-bold text-[#111111]">
                  {ABOUT_TEXT.bioParagraphs.p3.bold1}
                </strong>{" "}
                {ABOUT_TEXT.bioParagraphs.p3.after}
              </motion.p>

              <motion.p variants={itemVariants}>
                {ABOUT_TEXT.bioParagraphs.p4}
              </motion.p>

              <motion.p variants={itemVariants}>
                {ABOUT_TEXT.bioParagraphs.p5.before}{" "}
                <strong className="font-bold text-[#111111]">
                  {ABOUT_TEXT.bioParagraphs.p5.bold1}
                </strong>{" "}
                {ABOUT_TEXT.bioParagraphs.p5.after}
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="font-bold text-[#111111] text-lg sm:text-xl pt-2"
              >
                {ABOUT_TEXT.bioParagraphs.p6.part1}{" "}
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
                  &quot;{ABOUT_TEXT.bioParagraphs.principle.value}&quot;
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}