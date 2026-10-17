import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "../utils/cn";
import { LogoMark } from "./ui";

const LINKS = [
  { label: "Features", href: "#features" },
  { label: "Customers", href: "#customers" },
  { label: "Pricing", href: "#pricing" },
  { label: "Compare", href: "#compare" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className={cn(
          "mx-auto max-w-6xl rounded-2xl border backdrop-blur-xl transition-all duration-500",
          scrolled
            ? "border-white/12 bg-[#0b0f19]/85 shadow-[0_10px_44px_-14px_rgba(5,8,18,0.9)]"
            : "border-white/[0.07] bg-white/[0.03]"
        )}
      >
        <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6">
          {/* brand */}
          <a href="#top" className="group flex items-center gap-2.5">
            <span className="transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-105">
              <LogoMark size={32} />
            </span>
            <span className="font-display text-lg font-bold tracking-tight text-white">
              Aura<span className="text-gradient">Flow</span>
            </span>
          </a>

          {/* desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative rounded-full px-4 py-2 text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-white"
              >
                {link.label}
                <span className="absolute inset-x-4 -bottom-px h-px origin-left scale-x-0 bg-gradient-to-r from-violet-400 to-fuchsia-400 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          {/* actions */}
          <div className="flex items-center gap-2.5">
            <a
              href="#pricing"
              className="hidden rounded-full px-4 py-2 text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-white sm:block"
            >
              Sign in
            </a>
            <a
              href="#cta"
              className="group hidden items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4.5 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_-6px_rgba(168,85,247,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_36px_-6px_rgba(192,38,211,0.9)] active:translate-y-0 sm:inline-flex"
            >
              Get started
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-colors hover:border-violet-400/40 hover:text-white md:hidden"
            >
              <span className="relative block h-4 w-4">
                <Menu
                  className={cn(
                    "absolute inset-0 h-4 w-4 transition-all duration-300",
                    open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                  )}
                />
                <X
                  className={cn(
                    "absolute inset-0 h-4 w-4 transition-all duration-300",
                    open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                  )}
                />
              </span>
            </button>
          </div>
        </div>

        {/* mobile panel */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden",
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="space-y-1 border-t border-white/[0.07] px-4 py-4">
            {LINKS.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: `${open ? i * 60 + 100 : 0}ms` }}
                className={cn(
                  "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition-all duration-500 hover:bg-white/[0.06] hover:text-white",
                  open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                )}
              >
                {link.label}
                <ArrowRight className="h-4 w-4 text-violet-400" />
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className={cn(
                "mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-3 text-sm font-semibold text-white shadow-[0_0_24px_-6px_rgba(168,85,247,0.8)] transition-all duration-500",
                open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              )}
              style={{ transitionDelay: `${open ? LINKS.length * 60 + 100 : 0}ms` }}
            >
              Get started free
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
