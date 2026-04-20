import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "full" | "mark";
  /** Color theme: "light" for dark backgrounds (white type), "dark" for light backgrounds */
  theme?: "light" | "dark";
  className?: string;
}

/**
 * Found Outdoors brand mark — flock of birds + sun, in a sky-blue square.
 * Uses brand tokens: hsl(var(--sky)) and hsl(var(--wild-pink)).
 */
const LogoSquare = () => (
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="h-full w-auto block"
  >
    <rect width="100" height="100" rx="2" fill="hsl(var(--sky))" />
    {/* Birds — simple v/m strokes, paper-cut feel */}
    <g fill="hsl(var(--primary-foreground))">
      {/* bird 1 (top-left) */}
      <path d="M14 28 q6 -6 12 0 q6 -6 12 0 q-6 4 -12 4 q-6 0 -12 -4 z" />
      {/* bird 2 (top-mid) */}
      <path d="M42 22 q6 -6 12 0 q6 -6 12 0 q-6 4 -12 4 q-6 0 -12 -4 z" />
      {/* bird 3 (mid-left) */}
      <path d="M18 52 q7 -7 14 0 q7 -7 14 0 q-7 5 -14 5 q-7 0 -14 -5 z" />
      {/* bird 4 (mid-right) */}
      <path d="M52 50 q6 -6 12 0 q6 -6 12 0 q-6 4 -12 4 q-6 0 -12 -4 z" />
      {/* bird 5 (bottom) */}
      <path d="M30 78 q7 -7 14 0 q7 -7 14 0 q-7 5 -14 5 q-7 0 -14 -5 z" />
    </g>
    {/* Sun */}
    <circle cx="78" cy="22" r="6" fill="hsl(var(--wild-pink))" />
  </svg>
);

const Logo = ({ variant = "full", theme = "dark", className }: LogoProps) => {
  const textColor = theme === "light" ? "text-primary-foreground" : "text-sky-dark";

  if (variant === "mark") {
    return (
      <div className={cn("h-9 w-9", className)} aria-label="Found Outdoors">
        <LogoSquare />
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-3", className)} aria-label="Found Outdoors">
      <div className="h-9 w-9 md:h-10 md:w-10 shrink-0">
        <LogoSquare />
      </div>
      <span className={cn("font-sans font-extrabold text-lg md:text-xl leading-none tracking-tight", textColor)}>
        Found Outdoors
      </span>
    </div>
  );
};

export default Logo;
