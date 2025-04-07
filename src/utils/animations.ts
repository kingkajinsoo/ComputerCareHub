// Animation variants for Framer Motion components

// Common animation variants that can be reused across components
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 }
};

export const slideUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
  transition: { duration: 0.5 }
};

export const slideDown = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
  transition: { duration: 0.5 }
};

export const slideLeft = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
  transition: { duration: 0.5 }
};

export const slideRight = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
  transition: { duration: 0.5 }
};

export const scale = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
  transition: { duration: 0.5 }
};

// Staggered animation for lists of items
export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

// Modal animations
export const modalBackdrop = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 }
};

export const modalContent = {
  initial: { opacity: 0, scale: 0.9, y: 20 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.9, y: 20 },
  transition: { duration: 0.3, type: 'spring', damping: 25, stiffness: 300 }
};

// Card hover animations
export const cardHover = {
  whileHover: { y: -5, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' },
  transition: { duration: 0.2 }
};

// Button animations
export const buttonTap = {
  whileTap: { scale: 0.98 },
  transition: { duration: 0.1 }
};

// Page transition animations
export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 }
};

// Pulse animation
export const pulse = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'loop'
    }
  }
};

// Floating animation
export const floating = {
  animate: {
    y: ['0%', '5%', '0%'],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeInOut'
    }
  }
};

// Stagger with delay function
export const staggerWithDelay = (delay = 0.1) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: delay
    }
  }
});

// Mobile-optimized animations with reduced motion
export const getMobileOptimizedAnimation = (isMobile: boolean, animation: any) => {
  if (isMobile) {
    // Return simplified animations for mobile
    return {
      ...animation,
      transition: {
        ...animation.transition,
        duration: Math.min(animation.transition?.duration || 0.5, 0.3),
      },
      // Reduce transform distance for mobile
      initial: {
        ...animation.initial,
        y: animation.initial?.y ? Math.min(Math.abs(animation.initial.y), 10) * Math.sign(animation.initial.y) : animation.initial?.y,
        x: animation.initial?.x ? Math.min(Math.abs(animation.initial.x), 10) * Math.sign(animation.initial.x) : animation.initial?.x,
      }
    };
  }
  
  return animation;
};

export default {
  fadeIn,
  slideUp,
  slideDown,
  slideLeft,
  slideRight,
  scale,
  container,
  item,
  modalBackdrop,
  modalContent,
  cardHover,
  buttonTap,
  pageTransition,
  pulse,
  floating,
  staggerWithDelay,
  getMobileOptimizedAnimation
};
