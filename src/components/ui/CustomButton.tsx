
import React from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'link' | 'default' | 'destructive' | 'secondary';
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = ({ 
  children, 
  className, 
  variant = 'default', 
  size = 'default', 
  fullWidth = false,
  disabled,
  ...props 
}: ButtonProps) => {
  const baseClasses = "font-medium rounded-md transition-colors duration-200 inline-flex items-center justify-center";
  
  const variantClasses = {
    primary: "bg-skitm-blue text-white hover:bg-skitm-lightBlue",
    outline: "border border-skitm-blue text-skitm-blue hover:bg-skitm-blue/10",
    ghost: "text-skitm-navy hover:bg-skitm-blue/10",
    link: "text-skitm-blue underline-offset-4 hover:underline",
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  };
  
  const sizeClasses = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  };
  
  const widthClass = fullWidth ? "w-full" : "";
  const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";
  
  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        widthClass,
        disabledClass,
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
