import { ArrowUpRight, CalendarClock } from "lucide-react";
import { GlowButton, LogoMark, Reveal } from "./ui";

/* ------------------------------------------- socials */

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.35.95.1-.74.4-1.25.72-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.4-5.26 5.68.41.36.77 1.06.77 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0Z" />
    </svg>
  );
}

/* ------------------------------------------- cta */

export function Cta() {
  return (
    <section id="cta" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] border border-violet-400/20 bg-[#0c101d] px-6 py-16 text-center sm:px-12 sm:py-24">
            {/* atmosphere */}
            <div className="hero-grid pointer-events-none absolute inset-0 opacity-70" />
            <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[560px] -translate-x-1/2 rounded-full bg-violet-600/30 blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-40 left-1/4 h-64 w-64 rounded-full bg-fuchsia-600/20 blur-[110px]" />

            {/* orbiting ring */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 animate-spin-slower rounded-full border border-violet-400/10">
              <span className="absolute left-1/2 -top-[3px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-fuchsia-400 shadow-[0_0_12px_4px_rgba(232,121,249,0.75)]" />
            </div>
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-500/[0.1] px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-violet-300 uppercase">
                Deploy your first agent today
              </span>
              <h2 className="mx-auto mt-7 max-w-2xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]">
                Your next workflow <span className="text-gradient">builds itself.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
                Join 40,000+ teams shipping autonomous operations. Setup takes two minutes — your first agent is on
                the house.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
                <GlowButton href="#pricing" className="w-full px-8 py-4 text-base sm:w-auto">
                  Start automating free
                </GlowButton>
                <GlowButton href="#compare" variant="ghost" className="w-full px-8 py-4 text-base sm:w-auto" arrow={false}>
                  <CalendarClock className="h-4 w-4 text-violet-300" />
                  Book a live demo
                </GlowButton>
              </div>
              <p className="mt-6 text-xs text-slate-500">Free to start · 2-minute setup · No credit card required</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------- footer */

const COLUMNS: { title: string; links: string[] }[] = [
  { title: "Product", links: ["Features", "Pricing", "Integrations", "Changelog", "Roadmap"] },
  { title: "Company", links: ["About", "Careers", "Press kit", "Contact", "Partners"] },
  { title: "Resources", links: ["Documentation", "API reference", "Community", "Templates", "Status"] },
  { title: "Legal", links: ["Privacy", "Terms", "DPA", "Security", "Cookies"] },
];

const SOCIALS = [
  { label: "GitHub", Icon: GitHubIcon },
  { label: "X", Icon: XIcon },
  { label: "LinkedIn", Icon: LinkedInIcon },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] pt-16 pb-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_repeat(4,1fr)] lg:gap-8">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <LogoMark size={30} />
              <span className="font-display text-lg font-bold tracking-tight text-white">
                Aura<span className="text-gradient">Flow</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist">
              The autonomous automation platform for teams that move at the speed of thought.
            </p>
            <div className="mt-6 flex gap-2.5">
              {SOCIALS.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#top"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-xl border border-white/[0.09] bg-white/[0.04] text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/45 hover:text-violet-200 hover:shadow-[0_0_20px_-6px_rgba(139,92,246,0.8)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="group inline-flex items-center gap-1 text-sm text-slate-500 transition-colors duration-300 hover:text-slate-100"
                    >
                      {link}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-slate-600">© 2026 AuraFlow Labs, Inc. All rights reserved.</p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-slate-400 transition-colors duration-300 hover:border-emerald-400/30 hover:text-emerald-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            All systems operational
          </a>
        </div>
      </div>
    </footer>
  );
}
