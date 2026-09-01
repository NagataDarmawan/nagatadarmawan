'use client';

import { useEffect } from 'react';
import Preloader from '@/components/common/Preloader'; // sesuaikan path preloader kamu
import HeroSection from '@/components/sections/Hero';
import AboutSection from '@/components/sections/About';
import { usePreloader } from '@/hooks/usePreloader';
import FocusSection from '@/components/sections/Focus';
import ProjectsSection from '@/components/sections/projects/Projects';
import NowFocusSection from '@/components/sections/NowFocus';
import JourneySection from '@/components/sections/Journey';
import FooterSection from '@/components/sections/Footer';

export default function HomePage() {
  const { isLoading } = usePreloader();

  // Memaksa scroll kembali ke atas (0,0) saat halaman di-refresh / pertama dibuka
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-dark-bg min-h-screen">
      <Preloader />
      <HeroSection isReady={!isLoading} />
      <AboutSection />
      <FocusSection />
      <ProjectsSection />
      <NowFocusSection />
      <JourneySection />
      <FooterSection />
    </main>
  );
}