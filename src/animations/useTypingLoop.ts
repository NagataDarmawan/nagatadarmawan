'use client';

import { useState, useEffect } from 'react';
import { HeroConfig } from '@/constants/heroData';

export function useTypingLoop(firstName: string, lastName: string, isReady: boolean = true) {
  const [displayedFirst, setDisplayedFirst] = useState('');
  const [displayedLast, setDisplayedLast] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!isReady) return;

    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayedFirst.length < firstName.length) {
        timer = setTimeout(() => {
          setDisplayedFirst(firstName.slice(0, displayedFirst.length + 1));
        }, HeroConfig.TYPING_SPEED);
      } else if (displayedLast.length < lastName.length) {
        timer = setTimeout(() => {
          setDisplayedLast(lastName.slice(0, displayedLast.length + 1));
        }, HeroConfig.TYPING_SPEED);
      } else {
        timer = setTimeout(() => setIsDeleting(true), HeroConfig.PAUSE_COMPLETE);
      }
    } else {
      if (displayedLast.length > 0) {
        timer = setTimeout(() => {
          setDisplayedLast(lastName.slice(0, displayedLast.length - 1));
        }, HeroConfig.DELETING_SPEED);
      } else if (displayedFirst.length > 0) {
        timer = setTimeout(() => {
          setDisplayedFirst(firstName.slice(0, displayedFirst.length - 1));
        }, HeroConfig.DELETING_SPEED);
      } else {
        timer = setTimeout(() => setIsDeleting(false), HeroConfig.PAUSE_CLEARED);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedFirst, displayedLast, isDeleting, isReady, firstName, lastName]);

  return { displayedFirst, displayedLast };
}