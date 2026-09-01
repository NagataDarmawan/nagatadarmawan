'use client';

import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-dark-section/80 backdrop-blur-md border-b border-zinc-900 px-6 sm:px-12 lg:px-20 py-4 flex items-center justify-between text-xs font-mono">
      <a href="#" className="font-bold tracking-widest text-white uppercase hover:text-accent-gold transition-colors">
        NAGATA DARMAWAN.
      </a>
      <nav className="flex items-center gap-6 text-zinc-400">
        <a href="#about" className="hover:text-white transition-colors">TENTANG</a>
        <a href="#exploration" className="hover:text-white transition-colors">EKLSPORASI</a>
        <a href="#projects" className="hover:text-white transition-colors">PROJECTS</a>
        <a href="#connect" className="hover:text-white transition-colors">CONNECT</a>
      </nav>
    </header>
  );
}