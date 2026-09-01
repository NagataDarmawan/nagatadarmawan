'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectName: string;
}

export default function ProjectModal({ isOpen, onClose, projectName }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 select-none">
          
          {/* Backdrop Gelap dengan Efek Blur */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Kotak Modal Brutalist-Modern */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
            className="relative z-10 w-full max-w-md bg-[#0A0A0A] border border-zinc-800 p-6 sm:p-8 space-y-6 shadow-2xl"
          >
            {/* Header Modal */}
            <div className="flex items-start justify-between border-b border-zinc-900 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 font-bold block">
                  STATUS: DEVELOPMENT
                </span>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mt-1">
                  {projectName || "Project"}
                </h3>
              </div>
              <button 
                onClick={onClose}
                className="text-zinc-500 hover:text-white font-mono text-sm px-2 py-1 border border-zinc-800 hover:border-white transition-colors duration-200"
              >
                [ESC]
              </button>
            </div>

            {/* Isi Pesan */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-medium text-zinc-300 leading-relaxed">
                Sabar ya, project ini lagi dalam tahap pengembangan.
              </p>
              <p className="text-sm sm:text-base font-bold text-white tracking-wide">
                Pantau terus perkembangannya!
              </p>
            </div>

            {/* Tombol Aksi */}
            <div className="pt-2">
              <button 
                onClick={onClose}
                className="w-full py-3 bg-white text-black font-black uppercase text-xs tracking-widest hover:bg-zinc-200 transition-colors duration-200 rounded-none cursor-pointer"
              >
                SIAP, MENUNGGU
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}