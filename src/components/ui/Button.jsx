import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  icon: Icon,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-medium rounded-md transition-all duration-300 flex items-center gap-2 justify-center';

  const variants = {
    primary: 'bg-[#2563EB] text-white hover:bg-[#1D4ED8] hover:shadow-lg hover:shadow-blue-500/50',
    secondary: 'bg-[#1E293B] text-[#F1F5F9] border border-[#334155] hover:border-[#475569] hover:bg-[#0F172A]',
    danger: 'bg-[#EF4444] text-white hover:bg-[#DC2626] hover:shadow-lg hover:shadow-red-500/50',
    success: 'bg-[#22C55E] text-white hover:bg-[#16A34A] hover:shadow-lg hover:shadow-green-500/50',
    ghost: 'text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-[#1E293B]',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      {...props}
    >
      {Icon && <Icon size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />}
      {children}
    </motion.button>
  );
};

export default Button;
