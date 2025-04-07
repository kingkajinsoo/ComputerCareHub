import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  animate?: boolean;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  animate = true,
  hover = true,
}) => {
  const baseClasses = 'bg-gray-800 rounded-lg shadow-md overflow-hidden';
  const hoverClasses = hover ? 'transition-all duration-300 hover:shadow-lg' : '';
  const combinedClasses = `${baseClasses} ${hoverClasses} ${className}`;
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  if (animate) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={cardVariants}
        className={combinedClasses}
        onClick={onClick}
      >
        {children}
      </motion.div>
    );
  }
  
  return (
    <div className={combinedClasses} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;