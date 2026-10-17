import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "../utils/cn";

/* ------------------------------------------- logo mark */

export function LogoMark({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="aurag" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#E879F9" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="36" height="36" rx="11" fill="url(#aurag)" />
      <rect
        x="2"
        y="2"
        width="36"
        height="36"
        rx="11"
        stroke="rgba(255,255,255,0.35)"
        strokeOpacity="0.4"
      />
      <path
        d="M12 26c4-8 12-8 16 0"
        stroke="#fff"
        strokeWidth="2.6"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="20" cy="15.5" r="3" fill="#fff" />
    </svg>
  );
}

/* ------------------------------------------- buttons */

type GlowButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  arrow?: boolean;
};

export function GlowButton({ href, children, variant = "primary", className, arrow = true }: GlowButtonProps) {
  if (variant === "ghost") {
    return (
      <a
        href={href}
        className={cn(
          "group inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-slate-200 backdrop-blur-md transition-all duration-300",
          "hover:-translate-y-0.5 hover:border-violet-300/50 hover:bg-white/[0.09] hover:shadow-[0_0_28px_-8px_rgba(139,92,246,0.55)]",
          "active:translate-y-0 active:scale-[0.98]",
          className
        )}
      >
        {children}
        {arrow && (
          <ArrowRight className="h-4 w-4 text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-violet-200" />
        )}
      </a>
    );
  }
  return (
    <a
      href={href}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold text-white transition-all duration-500",
        "bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600 bg-[length:220%_100%] bg-left hover:bg-right",
        "shadow-[0_0_32px_-6px_rgba(168,85,247,0.75)] hover:shadow-[0_0_52px_-6px_rgba(192,38,211,0.9)]",
        "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
        className
      )}
    >
      <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/25" />
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
        {arrow && <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
      </span>
    </a>
  );
}

/* ------------------------------------------- scroll reveal */

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", visible && "reveal-visible", className)}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------- section heading */

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
};

export function SectionHeading({ eyebrow, title, sub }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-500/[0.08] px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-violet-300 uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_8px_2px_rgba(232,121,249,0.7)]" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.9rem] lg:leading-[1.12]">
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={200}>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-mist sm:text-lg">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}
