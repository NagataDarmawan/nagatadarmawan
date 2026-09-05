'use client';

import React, { useState } from 'react';
import { FOOTER_DATA } from '@/constants/footerData';
import ProjectModal from '@/components/ui/projectModal';
import { scrollToSection } from '@/utils/scrollTo';
import { useTypingLoop } from '@/hooks/useTypingLoop';

// Kumpulan SVG Icons untuk Footer
const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const TikTokIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.34-6.34V9.37a8.16 8.16 0 0 0 4.91 1.62v-3.5a4.85 4.85 0 0 1-1.00-.8z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><polygon points="10 15 15 12 10 9 10 15"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const MailIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
  </svg>
);

// Helper function untuk merender ikon berdasarkan nama
const renderSocialIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case 'instagram': return <InstagramIcon />;
    case 'tiktok': return <TikTokIcon />;
    case 'youtube': return <YoutubeIcon />;
    case 'facebook': return <FacebookIcon />;
    case 'github': return <GithubIcon />;
    case 'linkedin': return <LinkedinIcon />;
    case 'email': return <MailIcon />;
    default: return null;
  }
};

export default function FooterSection() {
  const { displayedFirst: displayedTagline } = useTypingLoop(FOOTER_DATA.tagline, '');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState('');

  // Handler disamakan persis logikanya dengan ProjectContent:
  const handleProjectClick = (e: React.MouseEvent, proj: { name: string; url?: string; href?: string }) => {
    e.preventDefault(); 
    const url = proj.url ?? proj.href ?? '';

    // Jika URL mengandung 'demo', 'staging', '#', atau kosong -> TAMPILKAN MODAL
    if (!url || url === '#' || url.includes('demo') || url.includes('staging')) {
      setSelectedProject(proj.name);
      setIsModalOpen(true);
    } else {
      // Jika URL live/aktif (seperti ribuanmdpl.vercel.app), langsung buka tab baru
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <footer id="footer" className="w-full bg-[#0A0A0A] text-white py-16 px-6 sm:px-12 lg:px-20 font-sans select-none -mt-px">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* 1. Tagline dengan Animasi Mengetik & Sosial Media */}
        <div className="space-y-6 max-w-2xl">
          <p className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white leading-snug min-h-[3.5rem]">
            {displayedTagline}
            <span className="inline-block w-2 h-5 bg-white ml-1 animate-pulse align-middle" />
          </p>

          <div className="flex flex-wrap items-center gap-3">
            {FOOTER_DATA.socials.map((social, idx) => (
              <a 
                key={idx}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={social.name}
                className="p-3 border border-zinc-800 bg-zinc-950/85 rounded-none text-zinc-400 hover:text-white hover:border-white transition-colors duration-300"
              >
                {renderSocialIcon(social.name)}
              </a>
            ))}
          </div>
        </div>

        {/* 2. Grid Links: Projects & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-4 border-t border-zinc-900/80">
          
          {/* Kolom Projects */}
          <div className="md:col-span-6 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 font-bold block">
              PROJECTS
            </span>
            <ul className="space-y-3">
              {FOOTER_DATA.projects.map((proj, idx) => (
                <li key={idx}>
                  <button 
                    onClick={(e) => handleProjectClick(e, proj)}
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-bold uppercase text-zinc-300 hover:text-white group transition-colors duration-300 text-left cursor-pointer"
                  >
                    <span>{proj.name}</span>
                    <span className="text-zinc-500 group-hover:text-white transition-colors duration-300">
                      <ExternalLinkIcon />
                    </span>
                  </button>
                </li>
              ))}
              {/* Opsi Lainnya Mengarah langsung ke Section Projects */}
              <li>
                <a 
                  href="#projects"
                  onClick={(e) => scrollToSection(e, '#projects')}
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-bold uppercase text-zinc-300 hover:text-white group transition-colors duration-300 text-left cursor-pointer"
                >
                  <span>Lainnya</span>
                  <span className="text-zinc-500 group-hover:text-white transition-colors duration-300">
                    <ExternalLinkIcon />
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom Contact */}
          <div className="md:col-span-6 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 font-bold block">
              CONTACT
            </span>
            <ul className="space-y-3">
              {FOOTER_DATA.contacts.map((contact, idx) => (
                <li key={idx}>
                  <a href={contact.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 text-sm sm:text-base font-bold text-zinc-300 hover:text-white transition-colors duration-300">
                    <span className="text-zinc-500">
                      {renderSocialIcon(contact.name)}
                    </span>
                    <span>{contact.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* 3. Hak Cipta */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-zinc-500 font-normal">
          <p>{FOOTER_DATA.copyright}</p>
          <p className="uppercase tracking-widest text-[10px]">ALL RIGHTS RESERVED.</p>
        </div>

      </div>

      {/* Komponen Modal Project */}
      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        projectName={selectedProject} 
      />
    </footer>
  );
}