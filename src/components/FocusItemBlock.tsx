'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { FocusItem } from '@/constants/focusData';

interface FocusItemBlockProps {
  item: FocusItem;
  index: number;
  isLast: boolean;
  itemVariants: Variants;
  onInView: (index: number) => void;
}

export default function FocusItemBlock({ item, index, isLast, itemVariants, onInView }: FocusItemBlockProps) {
  const itemRef = useRef(null);
  // Trigger pergantian foto saat paragraf berada di area tengah layar (margin -30%)
  const isInView = useInView(itemRef, { margin: "-30% 0px -30% 0px" });

  useEffect(() => {
    if (isInView) {
      onInView(index);
    }
  }, [isInView, index, onInView]);

  return (
    <motion.div 
      ref={itemRef}
      variants={itemVariants} 
      className={`space-y-4 pb-16 ${!isLast ? 'border-b border-zinc-900' : ''}`}
    >
      <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 font-bold block">
        {item.id} — {item.title}
      </span>
      <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
        {item.p1}
      </p>
      <p className="text-sm sm:text-base leading-relaxed text-zinc-400">
        {item.p2}
      </p>
      <div className="pt-2">
        <span className="text-xs font-mono text-zinc-500 block mb-1">
          {item.focusLabel}
        </span>
        <p className="text-xs sm:text-sm font-mono text-white font-medium tracking-wide">
          {item.skills}
        </p>
      </div>
    </motion.div>
  );
}