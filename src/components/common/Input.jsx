import React from "react";
import { cn } from "../../lib/utils";

const Input = React.forwardRef(({ 
  className, 
  icon: Icon, 
  label, 
  error,
  wrapperClassName,
  ...props 
}, ref) => {
  return (
    <div className={cn("flex flex-col w-full relative", wrapperClassName)}>
      
      {/* Optional Editorial Micro-Label */}
      {label && (
        <label className="block text-[9px] uppercase tracking-[0.2em] font-bold text-stone-500 mb-2 ml-1">
          {label}
        </label>
      )}

      <div className="relative flex items-center w-full">
        {/* Dynamic Icon Support (Left Aligned) */}
        {Icon && (
          <div className="absolute left-5 flex items-center justify-center text-stone-400 pointer-events-none transition-colors duration-300 peer-focus:text-luxor-gold">
            <Icon size={18} strokeWidth={2} />
          </div>
        )}

        <input
          ref={ref}
          className={cn(
            // Premium Input Base Styling
            "w-full h-14 bg-[#FAF9F6] border border-[#E8E1D5] rounded-2xl transition-all duration-300 peer",
            "text-stone-900 text-sm font-bold placeholder:text-stone-400 placeholder:font-medium",
            "focus:outline-none focus:border-luxor-gold focus:bg-white focus:ring-4 focus:ring-luxor-gold/10",
            "disabled:opacity-50 disabled:bg-stone-100",
            // Adjust padding if an icon is present
            Icon ? "pl-12 pr-5" : "px-6",
            // Error State
            error && "border-red-300 focus:border-red-400 focus:ring-red-400/10",
            className
          )}
          {...props}
        />
      </div>

      {/* Elegant Error Message */}
      {error && (
        <p className="absolute -bottom-5 left-2 text-[10px] font-medium text-red-500 tracking-wide">
          {error}
        </p>
      )}
    </div>
  );
});

Input.displayName = "Input";

export { Input };