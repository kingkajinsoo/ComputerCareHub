import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  onClick?: () => void;
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  fullWidth = false,
  className = '',
  disabled = false,
  type = 'button',
  icon,
  iconPosition = 'left',
}) => {
  // Base classes
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-all';
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-accent text-white hover:bg-accent-dark hover:text-yellow-300 focus:ring-accent',
    secondary: 'bg-primary text-white hover:bg-primary-dark hover:text-yellow-300 focus:ring-primary',
    outline: 'bg-transparent border border-accent text-accent hover:bg-accent hover:text-yellow-300 focus:ring-accent',
    text: 'bg-transparent text-accent hover:text-accent-dark focus:ring-accent',
  };
  
  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  // Disabled classes
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  // Full width classes
  const widthClasses = fullWidth ? 'w-full' : '';
  
  // Icon classes
  const iconClasses = icon ? 'gap-2' : '';
  
  // Combined classes
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${widthClasses} ${iconClasses} ${className}`;
  
  // Button content
  const content = (
    <>
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </>
  );
  
  // Render Link if 'to' prop exists
  if (to) {
    return (
      <motion.div whileTap={{ scale: disabled ? 1 : 0.97 }}>
        <Link to={to} className={combinedClasses} onClick={disabled ? undefined : onClick}>
          {content}
        </Link>
      </motion.div>
    );
  }
  
  // Render anchor if 'href' prop exists
  if (href) {
    return (
      <motion.div whileTap={{ scale: disabled ? 1 : 0.97 }}>
        <a 
          href={href} 
          className={combinedClasses} 
          onClick={disabled ? undefined : onClick}
          target="_blank" 
          rel="noopener noreferrer"
        >
          {content}
        </a>
      </motion.div>
    );
  }
  
  // Render button as default
  return (
    <motion.button
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </motion.button>
  );
};

export default Button;