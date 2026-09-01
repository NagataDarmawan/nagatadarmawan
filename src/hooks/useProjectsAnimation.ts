import { Variants } from 'framer-motion';

export const useProjectsAnimation = () => {
  // Container stagger untuk Header
  const headerContainerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // Item Fade-Up untuk judul & subheadline
  const headerItemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } 
    },
  };

  // Fade In untuk Quote Penutup
  const quoteVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 } 
    },
  };

  return {
    headerContainerVariants,
    headerItemVariants,
    quoteVariants,
  };
};