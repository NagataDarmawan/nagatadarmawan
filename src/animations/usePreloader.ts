'use client';

import { useState, useEffect } from 'react';

export function usePreloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Waktu tunggu ditambah sedikit (misal 1200ms = 1.2 detik) 
          // agar teks "NAGATA DARMAWAN" punya cukup waktu untuk selesai mengetik
          setTimeout(() => setIsLoading(false), 1200);
          return 100;
        }
        return prev + Math.floor(Math.random() * 3) + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return { progress: Math.min(progress, 100), isLoading };
}