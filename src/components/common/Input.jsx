import { forwardRef } from "react";
import { cn } from "../../lib/utils";

export const Input = forwardRef(({ className, icon: Icon, ...props }, ref) => {
  return (
    <div className="relative w-full">
      {Icon && (
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-luxor-400" />
        </div>
      )}
      <input
        ref={ref}
        className={cn(
          "w-full bg-transparent border border-luxor-200 text-luxor-900 placeholder:text-luxor-400 placeholder:font-light",
          "focus:outline-none focus:border-luxor-gold focus:ring-1 focus:ring-luxor-gold transition-colors",
          "py-3 px-4 text-sm",
          Icon && "pl-12",
          className
        )}
        {...props}
      />
    </div>
  );
});
Input.displayName = "Input";