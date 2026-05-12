import { cn } from "../../lib/utils";

export default function Section({ children, variant = "white", className }) {
  const variants = {
    white: "bg-white text-luxor-900",
    light: "bg-luxor-100 text-luxor-900", // Alabaster background
  };

  return (
    <section className={cn("py-24 relative", variants[variant], className)}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {children}
      </div>
    </section>
  );
}