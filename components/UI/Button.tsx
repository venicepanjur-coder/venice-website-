import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'glass';
  withIcon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  withIcon = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "rounded-full px-6 py-3 transition-all duration-300 font-medium flex items-center gap-2 text-sm md:text-base";
  
  const variants = {
    primary: "bg-white text-black hover:bg-gray-100",
    outline: "border border-white text-white hover:bg-white/10",
    glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {withIcon && (
        <span className="bg-white/20 rounded-full p-1 ml-1">
          <ChevronRight size={14} />
        </span>
      )}
    </button>
  );
};