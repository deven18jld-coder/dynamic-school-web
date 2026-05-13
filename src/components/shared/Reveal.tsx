'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  width?: 'fit-content' | '100%';
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
}

/**
 * A lightweight scroll-reveal component using Framer Motion.
 * Optimized for performance and subtle animations.
 */
export default function Reveal({
  children,
  className,
  width = 'fit-content',
  delay = 0,
  direction = 'up',
  duration = 0.5,
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  };

  return (
    <div
      ref={ref}
      style={{ position: 'relative', width, overflow: 'visible' }}
      className={className}
    >
      <motion.div
        variants={variants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{
          duration,
          delay: 0.1 + delay,
          ease: [0.25, 0.1, 0.25, 1.0], // cubic-bezier for smooth motion
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
