import { useState, useEffect, useRef } from 'react';
import { PROJECTS_TEXT } from '@/constants/projectsData';

export const useProjectsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalItems = PROJECTS_TEXT.items.length;

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalItems);
      }, 5000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [totalItems, isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const handleSelect = (index: number) => {
    setCurrentIndex(index);
  };

  // Toggle status pause (klik/tap pertama = pause, klik/tap kedua = jalan lagi)
  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  return {
    currentIndex,
    totalItems,
    currentProject: PROJECTS_TEXT.items[currentIndex],
    isPaused,
    handleNext,
    handlePrev,
    handleSelect,
    togglePause,
  };
};