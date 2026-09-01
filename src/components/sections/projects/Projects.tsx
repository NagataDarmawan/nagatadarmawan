'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS_TEXT } from '@/constants/projectsData';
import { useProjectsSlider } from '@/hooks/useProjectsSlider';
import { useProjectsAnimation } from '@/hooks/useProjectsAnimation';
import ProjectContent from './ProjectContent';
import ProjectControls from './ProjectsControls';
import ProjectModal from '@/components/ui/projectModal';

export default function ProjectsSection() {
  const {
    currentIndex,
    totalItems,
    currentProject,
    isPaused,
    handleNext,
    handlePrev,
    handleSelect,
    togglePause,
  } = useProjectsSlider();

  const { headerContainerVariants, headerItemVariants, quoteVariants } = useProjectsAnimation();

  // State & Handler untuk Modal Demo Project
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState('');

  const handleOpenDemoModal = (projectName: string) => {
    setSelectedProject(projectName);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="w-full bg-[#0A0A0A] text-white font-sans select-none overflow-hidden py-12">
      {/* 1. Header Section */}
      <motion.div
        variants={headerContainerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 mb-8 space-y-2"
      >
        <motion.span variants={headerItemVariants} className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 font-bold block">
          {PROJECTS_TEXT.sectionTag}
        </motion.span>
        <motion.h2 variants={headerItemVariants} className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
          {PROJECTS_TEXT.headline}
        </motion.h2>
        <motion.p variants={headerItemVariants} className="text-sm sm:text-base text-zinc-400 font-medium leading-relaxed max-w-3xl">
          {PROJECTS_TEXT.subHeadline}
        </motion.p>
      </motion.div>

      {/* 2. Banner Slider Full-Width */}
      <div onClick={togglePause} className="relative w-full h-[540px] sm:h-[620px] lg:h-[670px] bg-[#0A0A0A] cursor-pointer">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.id}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
          >
            <img src={currentProject.image} alt={currentProject.title} className="w-full h-full object-cover object-top brightness-90 filter transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-[#0A0A0A]/40 to-transparent pointer-events-none" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-8 flex flex-col justify-between">
          {/* Top Bar */}
          <div className="flex justify-between items-center w-full">
            <span className="px-3.5 py-1 rounded-none border border-white/20 bg-black/60 text-[11px] font-mono uppercase tracking-wider text-zinc-200 backdrop-blur-md">
              {currentProject.category}
            </span>
            <div className="flex items-center gap-3 text-xs font-mono font-bold tracking-widest text-zinc-400">
              {isPaused && <span className="text-[10px] text-zinc-400 bg-zinc-800/80 px-2 py-0.5 border border-zinc-700 animate-pulse">PAUSED</span>}
              <div>
                <span className="text-white font-extrabold text-base">{currentProject.id}</span> / 0{totalItems}
              </div>
            </div>
          </div>

          {/* Bottom Area: Menampilkan Komponen Teks & Navigasi */}
          <div className="space-y-6">
            <ProjectContent 
              currentProject={currentProject} 
              onDemoClick={handleOpenDemoModal} 
            />
            <ProjectControls
              currentIndex={currentIndex}
              isPaused={isPaused}
              handleSelect={handleSelect}
              handlePrev={handlePrev}
              handleNext={handleNext}
            />
          </div>
        </div>
      </div>

      {/* 3. Quote Penutup */}
      <motion.div
        variants={quoteVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pt-8 text-center"
      >
        <p className="text-xs sm:text-sm font-mono text-zinc-500 italic">
          {`"${PROJECTS_TEXT.closingQuote}"`}
        </p>
      </motion.div>

      {/* Komponen Modal Pop-up */}
      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        projectName={selectedProject} 
      />
    </section>
  );
}