import { useRef, type MouseEvent } from "react";
import {
  Bot,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  Database,
  Mail,
  MessageSquare,
  Timer,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { cn } from "../utils/cn";
import { GlowButton, Reveal } from "./ui";

/* ------------------------------------------- pieces */

function FlowNode({
  icon: Icon,
  tag,
  title,
  meta,
  tone = "violet",
  children,
}: {
  icon: LucideIcon;
  tag: string;
  title: string;
  meta: string;
  tone?: "violet" | "fuchsia";
  children?: React.ReactNode;
}) {
  return (
    <div className="group relative flex w-full items-center gap-3.5 rounded-2xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur-md transition-all duration-300 hover:border-violet-400/40 hover:bg-white/[0.07]">
      <span
        className={cn(
          "grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white ring-1 ring-inset ring-white/25",
          tone === "violet"
            ? "bg-gradient-to-br from-violet-500 to-purple-700 shadow-[0_0_20px_-4px_rgba(139,92,246,0.9)]"
            : "bg-gradient-to-br from-fuchsia-500 to-pink-700 shadow-[0_0_20px_-4px_rgba(217,70,239,0.9)]"
        )}
      >
        <Icon className="h-4.5 w-4.5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[10px] font-bold tracking-[0.16em] text-violet-300/80 uppercase">{tag}</span>
        <span className="block truncate text-sm font-semibold text-white">{title}</span>
        <span className="block truncate text-xs text-mist">{meta}</span>
      </span>
      {children}
    </div>
  );
}

function Connector({ delayed = false }: { delayed?: boolean }) {
  return (
    <div className="relative mx-auto h-10 w-px">
      <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-violet-500/70 via-fuchsia-500/50 to-fuchsia-500/10" />
      <span
        className={cn(
          "absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-fuchsia-400 shadow-[0_0_10px_3px_rgba(232,121,249,0.8)]",
          delayed ? "animate-drop-delayed" : "animate-drop"
        )}
      />
    </div>
  );
}

const RUN_LOG = [
  { label: "Reply drafted", time: "1.2s" },
  { label: "Lead enriched via CRM", time: "0.8s" },
  { label: "Slack brief posted", time: "0.3s" },
  { label: "Follow-up scheduled", time: "0.4s" },
];

/* ------------------------------------------- hero */

export default function Hero() {
  const spotRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: MouseEvent<HTMLElement>) => {
    const el = spotRef.current;
    if (!el) return;
    const rect = e.currentTarget.getBoundingClientRect();
    el.style.background = `radial-gradient(560px circle at ${e.clientX - rect.left}px ${
      e.clientY - rect.top
    }px, rgba(139, 92, 246, 0.09), transparent 65%)`;
  };

  return (
    <section id="top" onMouseMove={onMouseMove} className="relative overflow-hidden pt-36 pb-16 sm:pt-44">
      {/* atmosphere */}
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div ref={spotRef} className="pointer-events-none absolute inset-0 transition-[background] duration-200" />
      <div className="pointer-events-none absolute -top-48 left-1/2 h-[560px] w-[860px] -translate-x-1/2 rounded-full bg-violet-600/25 blur-[150px]" />
      <div className="pointer-events-none absolute -left-40 top-64 h-96 w-96 rounded-full bg-fuchsia-600/12 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 top-96 h-96 w-96 rounded-full bg-indigo-600/12 blur-[130px]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[62%] -translate-x-1/2 bg-gradient-to-r from-transparent via-fuchsia-400/60 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* badge */}
        <Reveal className="flex justify-center">
          <a
            href="#features"
            className="group glass inline-flex items-center gap-2.5 rounded-full py-1.5 pr-3 pl-4 text-xs font-medium text-slate-300 transition-all duration-300 hover:border-violet-400/40 hover:text-white"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-fuchsia-400" />
            </span>
            AuraFlow 2.0 is live — autonomous neural agents
            <ChevronRight className="h-3.5 w-3.5 text-violet-300 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </Reveal>

        {/* headline */}
        <Reveal delay={120}>
          <h1 className="mx-auto mt-8 max-w-4xl text-center font-display text-[2.6rem] leading-[1.06] font-bold tracking-tight text-white sm:text-6xl lg:text-[4.6rem]">
            Automate work at the
            <br className="hidden sm:block" /> <span className="text-gradient">speed of thought.</span>
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-mist sm:text-lg">
            Describe the outcome. AuraFlow's neural agents design, run, and self-heal the workflow — across every
            tool your team touches. Busywork ends here.
          </p>
        </Reveal>

        {/* cta */}
        <Reveal delay={340}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <GlowButton href="#pricing" className="w-full px-7 py-3.5 sm:w-auto">
              Start automating free
            </GlowButton>
            <GlowButton href="#features" variant="ghost" className="w-full px-7 py-3.5 sm:w-auto">
              <Bot className="h-4 w-4 text-violet-300" />
              Meet the agents
            </GlowButton>
          </div>
          <p className="mt-5 text-center text-xs text-slate-500">
            Free 14-day Pro trial &nbsp;·&nbsp; No credit card &nbsp;·&nbsp; Cancel anytime
          </p>
        </Reveal>

        {/* stats */}
        <Reveal delay={440}>
          <dl className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
            {[
              { v: "12M+", l: "workflows run monthly" },
              { v: "40k+", l: "teams on autopilot" },
              { v: "6.5h", l: "saved per seat / week" },
              { v: "99.99%", l: "uptime, guaranteed" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <dt className="order-2 mt-1.5 text-xs leading-snug text-slate-500">{s.l}</dt>
                <dd className="font-display text-2xl font-bold text-white sm:text-3xl">
                  <span className="text-gradient">{s.v}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* -------------- dashboard mock -------------- */}
        <Reveal delay={300} className="relative mx-auto mt-16 max-w-5xl lg:mt-24">
          <div className="pointer-events-none absolute -inset-x-10 top-10 -bottom-16 rounded-[48px] bg-violet-600/16 blur-[110px]" />

          {/* floating card — autopilot */}
          <div className="animate-float glass absolute -left-16 top-20 z-20 hidden w-48 rounded-2xl p-4 shadow-[0_24px_60px_-24px_rgba(5,8,18,0.9)] lg:block">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-white">Autopilot</span>
              <span className="flex h-5 w-9 items-center rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 p-0.5 shadow-[0_0_14px_-2px_rgba(168,85,247,0.9)]">
                <span className="h-4 w-4 translate-x-4 rounded-full bg-white shadow" />
              </span>
            </div>
            <div className="mt-3 flex items-center gap-2 text-[11px] text-mist">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              7 agents running now
            </div>
          </div>

          {/* floating card — runs today */}
          <div className="animate-float-delayed glass absolute -right-14 top-40 z-20 hidden w-44 rounded-2xl p-4 shadow-[0_24px_60px_-24px_rgba(5,8,18,0.9)] lg:block">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-mist">Runs today</span>
              <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-300">
                <TrendingUp className="h-3 w-3" /> +18%
              </span>
            </div>
            <p className="mt-1 font-display text-xl font-bold text-white">2,431</p>
            <div className="mt-3 flex h-12 items-end gap-1.5">
              {[45, 70, 52, 84, 63, 96, 58].map((h, i) => (
                <span
                  key={i}
                  className="animate-bar w-full origin-bottom rounded-sm bg-gradient-to-t from-violet-600/80 to-fuchsia-400/90"
                  style={{ height: `${h}%`, animationDelay: `${i * 0.22}s` }}
                />
              ))}
            </div>
          </div>

          {/* floating card — time saved */}
          <div className="animate-float-slow glass absolute -bottom-10 -left-10 z-20 hidden w-52 items-center gap-3 rounded-2xl p-4 shadow-[0_24px_60px_-24px_rgba(5,8,18,0.9)] lg:flex">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-700 text-white ring-1 ring-inset ring-white/25">
              <Timer className="h-4.5 w-4.5" />
            </span>
            <span>
              <span className="block font-display text-base font-bold text-white">6.4h saved</span>
              <span className="block text-[11px] text-mist">this week, per seat</span>
            </span>
          </div>

          {/* main window */}
          <div className="relative rounded-[26px] bg-gradient-to-b from-white/16 via-white/[0.06] to-transparent p-px shadow-[0_40px_120px_-40px_rgba(139,92,246,0.45)]">
            <div className="overflow-hidden rounded-[25px] bg-[#0c1220]/92 backdrop-blur-2xl">
              {/* window bar */}
              <div className="flex h-12 items-center gap-2 border-b border-white/[0.06] px-5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                <span className="mx-auto hidden items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.04] px-3.5 py-1 text-[11px] text-slate-400 sm:flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  auraflow.app / canvas / lead-qualification
                </span>
                <span className="ml-auto flex items-center gap-2 sm:ml-0">
                  <span className="hidden text-[11px] font-medium text-mist sm:block">Live</span>
                  <span className="relative flex h-2 w-2">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-fuchsia-400 opacity-70" />
                    <span className="relative h-2 w-2 rounded-full bg-fuchsia-400" />
                  </span>
                </span>
              </div>

              {/* canvas body */}
              <div className="grid lg:grid-cols-[1fr_248px]">
                <div className="canvas-grid relative p-6 sm:p-8">
                  <div className="mx-auto flex max-w-md flex-col items-stretch">
                    <FlowNode icon={Mail} tag="Trigger" title="New lead captured" meta="Gmail · web@acme.com · just now" />
                    <Connector />
                    <FlowNode
                      icon={BrainCircuit}
                      tag="Neural agent"
                      title="Qualify, enrich & draft reply"
                      meta="Aura Agent v2 · reasoning"
                    >
                      <span className="hidden shrink-0 items-center gap-1.5 rounded-full border border-violet-400/30 bg-violet-500/10 px-2.5 py-1 text-[10px] font-semibold text-violet-200 sm:flex">
                        <span className="h-1 w-1 animate-pulse rounded-full bg-violet-300" />
                        thinking
                      </span>
                    </FlowNode>
                    {/* progress shimmer */}
                    <div className="mx-4 mt-3 overflow-hidden rounded-full border border-white/[0.07] bg-white/[0.04] p-px">
                      <div className="relative h-1.5 overflow-hidden rounded-full bg-white/[0.05]">
                        <div className="absolute inset-y-0 w-1/3 animate-scan rounded-full bg-gradient-to-r from-transparent via-fuchsia-400 to-transparent" />
                      </div>
                    </div>
                    <Connector delayed />
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                      <FlowNode
                        icon={MessageSquare}
                        tag="Action"
                        title="Brief posted"
                        meta="Slack · #sales"
                        tone="fuchsia"
                      />
                      <FlowNode
                        icon={Database}
                        tag="Action"
                        title="Deal created"
                        meta="HubSpot · $48,000"
                        tone="fuchsia"
                      />
                    </div>
                  </div>
                </div>

                {/* run log rail */}
                <aside className="hidden flex-col gap-5 border-l border-white/[0.06] p-5 lg:flex">
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.18em] text-slate-500 uppercase">Live run log</p>
                    <ul className="mt-3 space-y-2.5">
                      {RUN_LOG.map((r, i) => (
                        <li
                          key={r.label}
                          className="animate-log flex items-center justify-between gap-2 text-xs"
                          style={{ animationDelay: `${0.9 + i * 0.28}s` }}
                        >
                          <span className="flex min-w-0 items-center gap-2 text-slate-300">
                            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                            <span className="truncate">{r.label}</span>
                          </span>
                          <span className="shrink-0 text-slate-500">{r.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
                  <div className="flex items-center gap-4">
                    <div
                      className="relative h-[68px] w-[68px] shrink-0 rounded-full"
                      style={{ background: "conic-gradient(#c026d3 0 98%, rgba(255,255,255,0.08) 0)" }}
                    >
                      <div className="absolute inset-[6px] grid place-items-center rounded-full bg-[#0c1220] font-display text-sm font-bold text-fuchsia-200">
                        98%
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">Agent confidence</p>
                      <p className="mt-1 text-[11px] leading-snug text-mist">Above auto-send threshold</p>
                    </div>
                  </div>
                  <div className="mt-auto rounded-xl border border-violet-400/20 bg-violet-500/[0.08] p-3">
                    <p className="text-[11px] leading-snug text-violet-200">
                      “Reply approved by guardrails — sending in 30s”
                    </p>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
