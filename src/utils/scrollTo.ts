export const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
  e.preventDefault();
  
  const globalWindow = window as unknown as { lenis?: { scrollTo: (target: string, options?: object) => void } };

  if (globalWindow.lenis && typeof globalWindow.lenis.scrollTo === 'function') {
    globalWindow.lenis.scrollTo(targetId, {
      duration: 1.8,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  } else {
    document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
  }
};