import React from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from '../../hooks/useMediaQuery';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  once?: boolean;
  distance?: number;
  duration?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  once = true,
  distance = 50,
  duration = 0.5,
}) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  // Optimize for mobile: reduce animations
  const optimizedDistance = isMobile ? distance * 0.5 : distance;
  const optimizedDuration = isMobile ? duration * 0.8 : duration;
  
  // Set initial position based on direction
  let initial: { opacity: number; y?: number; x?: number } = { opacity: 0 };
  
  if (direction === 'up') {
    initial = { ...initial, y: optimizedDistance };
  } else if (direction === 'down') {
    initial = { ...initial, y: -optimizedDistance };
  } else if (direction === 'left') {
    initial = { ...initial, x: optimizedDistance };
  } else if (direction === 'right') {
    initial = { ...initial, x: -optimizedDistance };
  }
  
  // Animation variants
  const variants = {
    hidden: initial,
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: optimizedDuration,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-100px' }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;