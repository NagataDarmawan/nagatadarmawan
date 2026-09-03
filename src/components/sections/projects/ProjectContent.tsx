'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectItem } from '@/constants/projectsData';

interface ProjectContentProps {
  currentProject: ProjectItem;
  onDemoClick: (projectName: string) => void;
  // Tambahkan prop baru untuk menangani klik "Lihat Gambar"
  onViewImageClick: (imageUrl: string) => void;
}

export default function ProjectContent({ 
  currentProject, 
  onDemoClick, 
  onViewImageClick // Terima prop baru di sini
}: ProjectContentProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentProject.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="space-y-3 max-w-2xl text-left"
      >
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-300 font-semibold">
            {currentProject.subtitle}
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none drop-shadow-md">
          {currentProject.title}
        </h1>

        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium max-w-xl">
          {currentProject.description}
        </p>

        <div className="text-xs font-mono text-zinc-400 pt-1">
          <span className="text-zinc-500 mr-2">Teknologi:</span>
          {currentProject.tags.join(' · ')}
        </div>

        <div className="flex flex-wrap items-center gap-2.5 pt-2">
          <span className="inline-flex items-center px-4 py-1.5 rounded-none border border-zinc-500 bg-black/80 text-zinc-200 font-mono font-bold text-xs uppercase tracking-wider backdrop-blur-md">
            {currentProject.status}
          </span>

          <span className="inline-flex items-center px-4 py-1.5 rounded-none border border-zinc-700 bg-zinc-900/90 text-zinc-300 font-mono font-bold text-xs uppercase tracking-wider backdrop-blur-md">
            {currentProject.role}
          </span>

          {/* TOMBOL LIHAT GAMBAR - Tambahkan di sini */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // Mencegah slider ter-pause
              onViewImageClick(currentProject.image);
            }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-none border border-zinc-600 bg-zinc-950 text-zinc-100 font-mono font-bold text-xs uppercase tracking-wider hover:bg-zinc-800 hover:border-zinc-500 transition-colors duration-300 cursor-pointer backdrop-blur-md"
          >
            {/* Ikon Mata (Lucide React) */}
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
            Lihat Gambar
          </button>

          {currentProject.demoUrl && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                const url = currentProject.demoUrl ?? '';
                if (url.includes('demo') || url.includes('staging') || url === '#') {
                  onDemoClick(currentProject.title);
                } else {
                  window.open(url, '_blank');
                }
              }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-none border border-white bg-white text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-colors duration-300 cursor-pointer"
            >
              Lihat Demo
              <span className="text-sm leading-none">↗</span>
            </button>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}