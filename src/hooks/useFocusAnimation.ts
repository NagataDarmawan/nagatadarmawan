import { useRef, useState, useEffect } from 'react';
import { Variants, useInView } from 'framer-motion';

export const useFocusAnimation = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  // State untuk melacak urutan badge yang sedang aktif serentak
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    // Timer pergantian sorotan serentak setiap 1.5 detik
    const interval = setInterval(() => {
      setActiveStep((prev) => prev + 1);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } 
    },
  };

  return {
    sectionRef,
    isInView,
    activeStep,
    containerVariants,
    itemVariants,
  };
};