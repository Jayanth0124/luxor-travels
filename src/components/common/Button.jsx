import { cn } from "../../lib/utils";

export function Button({ className, variant = "primary", size = "md", children, ...props }) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 ease-in-out focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed tracking-wide";
  
  const variants = {
    primary: "bg-luxor-gold text-white hover:bg-luxor-goldHover shadow-sm",
    outline: "border border-luxor-200 text-luxor-900 hover:border-luxor-gold hover:text-luxor-gold bg-transparent",
    ghost: "text-luxor-400 hover:text-luxor-gold bg-transparent",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm", // Kept font small for minimal look
    lg: "px-8 py-4 text-base",
  };

  return (
    <button className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}