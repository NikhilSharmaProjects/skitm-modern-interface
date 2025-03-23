
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      fullWidth = false,
      leftIcon,
      rightIcon,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = "rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-skitm-blue/40 active:scale-[0.98]";
    
    const variants = {
      primary: "bg-skitm-blue text-white hover:bg-skitm-lightBlue shadow-md hover:shadow-lg",
      outline: "border-2 border-skitm-blue text-skitm-blue hover:bg-skitm-blue/10 shadow-sm hover:shadow-md",
      ghost: "text-skitm-blue hover:bg-skitm-blue/10",
      link: "text-skitm-blue hover:underline p-0",
    };
    
    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };
    
    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth ? "w-full" : "",
          isLoading || disabled ? "opacity-70 cursor-not-allowed" : "",
          className
        )}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center justify-center space-x-2">
            <svg 
              className="animate-spin h-4 w-4 text-current" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <circle 
                className="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4"
              />
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Loading...</span>
          </div>
        ) : (
          <div className="flex items-center justify-center space-x-2">
            {leftIcon && <span>{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span>{rightIcon}</span>}
          </div>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
