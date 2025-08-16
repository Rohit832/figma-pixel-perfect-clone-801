import React from 'react';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick,
  className 
}) => {
  const baseClasses = "flex min-h-[63px] w-full items-center justify-center px-[15px] py-[18px] rounded-[41px] text-xl font-semibold tracking-[0.8px] transition-all duration-200 hover:scale-105 cursor-pointer";
  
  const variantClasses = {
    primary: "bg-[rgba(241,146,32,1)] text-black hover:bg-[rgba(241,146,32,0.9)]",
    secondary: "bg-white border border-black border-solid text-black hover:bg-gray-50"
  };

  return (
    <button
      className={cn(baseClasses, variantClasses[variant], className)}
      onClick={onClick}
    >
      <div className="flex h-[27px] items-center gap-3">
        <div className="my-auto">
          {children}
        </div>
      </div>
    </button>
  );
};
