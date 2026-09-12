import { Variants } from 'framer-motion';

// Kurva easing modern dengan durasi yang lebih lambat dan elegan
const smoothEase = [0.16, 1, 0.3, 1] as const;

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.18, 
      delayChildren: 0.1 
    },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.9, ease: smoothEase } 
  },
};

export const aboutItemVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      ease: smoothEase,
    },
  },
};

export const journeyItemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: smoothEase },
  },
};

export const nowCardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: smoothEase },
  },
};

export const quoteVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: smoothEase } 
  },
};

export const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.9, ease: smoothEase } 
  },
};

// Animasi masuk dari samping kiri ke kanan (untuk teks)
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

// Animasi masuk dari samping kanan ke kiri (untuk gambar)
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};