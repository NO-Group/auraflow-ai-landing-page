import {
  Activity,
  Blocks,
  Bot,
  BrainCircuit,
  Calendar,
  CheckCircle2,
  Cloud,
  Database,
  Frame,
  GitBranch,
  Hash,
  HeartPulse,
  LayoutGrid,
  Mail,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { cn } from "../utils/cn";
import { Reveal, SectionHeading } from "./ui";

function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6 transition-all duration-500",
        "hover:-translate-y-1 hover:border-violet-400/35 hover:shadow-[0_24px_70px_-24px_rgba(139,92,246,0.45)]",
        className
      )}
    >
      <div className="pointer-events-none absolute -top-24 -right-24 h-52 w-52 rounded-full bg-violet-500/25 opacity-0 blur-[80px] transition-opacity duration-700 group-hover:opacity-100" />
      {children}
    </div>
  );
}

function IconChip({ icon: Icon, className }: { icon: LucideIcon; className?: string }) {
  return (
    <span
      className={cn(
        "grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-600 text-white ring-1 ring-inset ring-white/25 shadow-[0_0_24px_-6px_rgba(168,85,247,0.9)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-6deg]",
        className
      )}
    >
      <Icon className="h-5 w-5" />
    </span>
  );
}

const INTEGRATIONS = [
  { icon: Hash, name: "Slack" },
  { icon: Mail, name: "Gmail" },
  { icon: Database, name: "Postgres" },
  { icon: Calendar, name: "Calendar" },
  { icon: GitBranch, name: "GitHub" },
  { icon: Frame, name: "Figma" },
  { icon: LayoutGrid, name: "Trello" },
  { icon: Cloud, name: "Salesforce" },
];

const AGENTS = [
  { name: "Researcher", role: "Scours the web, cites sources", status: "running" },
  { name: "Closer", role: "Drafts follow-ups, updates CRM", status: "running" },
  { name: "Ops Bot", role: "Watches queues, re-routes work", status: "idle" },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-24 h-96 w-[720px] -translate-x-1/2 rounded-full bg-violet-700/10 blur-[150px]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Platform"
          title={
            <>
              One canvas. <span className="text-gradient">Infinite automation.</span>
            </>
          }
          sub="Everything you need to turn plain-language goals into production-grade, self-healing workflows — no glue code, no babysitting."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {/* neural builder — wide */}
          <Reveal className="md:col-span-2" delay={0}>
            <Card className="h-full">
              <div className="relative flex h-full flex-col">
                <IconChip icon={BrainCircuit} />
                <h3 className="mt-5 font-display text-lg font-semibold text-white">Neural workflow builder</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-mist">
                  Type the outcome you want. AuraFlow plans the steps, picks the tools, and wires up the logic —
                  then keeps optimizing it as volume grows.
                </p>
                <div className="mt-6 rounded-2xl border border-white/[0.08] bg-[#0a0f1c]/80 p-4">
                  <div className="flex items-start gap-3">
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-fuchsia-300" />
                    <p className="text-sm leading-relaxed text-slate-300">
                      “When a lead arrives, qualify it, draft a reply and brief sales in Slack”
                      <span className="ml-1 inline-block h-4 w-[2px] translate-y-0.5 animate-blink bg-fuchsia-300" />
                    </p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      { icon: Mail, label: "Trigger · Gmail" },
                      { icon: BrainCircuit, label: "Agent · Qualify" },
                      { icon: MessageSquare, label: "Brief · Slack" },
                      { icon: Database, label: "Update · CRM" },
                    ].map((s) => (
                      <span
                        key={s.label}
                        className="inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-500/[0.09] px-3 py-1.5 text-[11px] font-medium text-violet-200 transition-colors duration-300 hover:border-fuchsia-400/40 hover:bg-fuchsia-500/[0.12]"
                      >
                        <s.icon className="h-3.5 w-3.5" />
                        {s.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>

          {/* integrations */}
          <Reveal delay={120}>
            <Card className="h-full">
              <div className="relative flex h-full flex-col">
                <IconChip icon={Blocks} />
                <h3 className="mt-5 font-display text-lg font-semibold text-white">500+ native integrations</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">
                  Auth handled, schemas mapped. Drop any tool in and it just works.
                </p>
                <div className="mt-6 grid grid-cols-4 gap-2.5">
                  {INTEGRATIONS.map((t) => (
                    <span
                      key={t.name}
                      title={t.name}
                      className="grid aspect-square place-items-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-slate-400 transition-all duration-300 hover:scale-110 hover:border-violet-400/40 hover:text-violet-200 hover:shadow-[0_0_18px_-4px_rgba(139,92,246,0.7)]"
                    >
                      <t.icon className="h-4.5 w-4.5" />
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-[11px] font-medium text-slate-500">+ 492 more in the marketplace</p>
              </div>
            </Card>
          </Reveal>

          {/* observability */}
          <Reveal delay={0}>
            <Card className="h-full">
              <div className="relative">
                <IconChip icon={Activity} />
                <h3 className="mt-5 font-display text-lg font-semibold text-white">Live observability</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">
                  Trace every run, token and decision in real time — down to the millisecond.
                </p>
                <div className="mt-6 flex h-20 items-end gap-1.5">
                  {[35, 58, 42, 76, 52, 88, 64, 95, 58, 72, 46, 80].map((h, i) => (
                    <span
                      key={i}
                      className="animate-bar w-full origin-bottom rounded-sm bg-gradient-to-t from-violet-600/70 to-fuchsia-400/80"
                      style={{ height: `${h}%`, animationDelay: `${i * 0.18}s` }}
                    />
                  ))}
                </div>
                <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
                  <span>p95 latency</span>
                  <span className="font-semibold text-emerald-300">84ms · healthy</span>
                </div>
              </div>
            </Card>
          </Reveal>

          {/* self-healing */}
          <Reveal delay={120}>
            <Card className="h-full">
              <div className="relative">
                <IconChip icon={HeartPulse} />
                <h3 className="mt-5 font-display text-lg font-semibold text-white">Self-healing runs</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">
                  APIs change, rate limits hit. AuraFlow reroutes, retries and patches — before you notice.
                </p>
                <ul className="mt-6 space-y-2.5">
                  {[
                    "Auto-retry succeeded · attempt 2",
                    "Broken connector re-mapped",
                    "Anomaly quarantined & logged",
                  ].map((t) => (
                    <li
                      key={t}
                      className="flex items-center gap-2.5 rounded-xl border border-white/[0.07] bg-white/[0.03] px-3 py-2.5 text-xs text-slate-300 transition-colors duration-300 hover:border-emerald-400/30"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </Reveal>

          {/* guardrails */}
          <Reveal delay={240}>
            <Card className="h-full">
              <div className="relative">
                <IconChip icon={ShieldCheck} />
                <h3 className="mt-5 font-display text-lg font-semibold text-white">Guardrails & approvals</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">
                  Autonomy with boundaries. Set spend caps, PII rules and human sign-off gates.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["SOC 2 Type II", "Human-in-the-loop", "PII redaction", "Spend caps", "Audit trail"].map((b) => (
                    <span
                      key={b}
                      className="rounded-full border border-white/[0.09] bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium text-slate-300 transition-all duration-300 hover:border-violet-400/40 hover:text-violet-200"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </Reveal>

          {/* agents — full width */}
          <Reveal className="md:col-span-3" delay={100}>
            <Card className="h-full">
              <div className="relative grid items-center gap-8 md:grid-cols-[1fr_1.35fr]">
                <div>
                  <IconChip icon={Bot} />
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">
                    Autonomous agent squads
                    <span className="ml-2.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-2.5 py-1 align-middle text-[10px] font-bold tracking-wider text-white uppercase shadow-[0_0_16px_-4px_rgba(192,38,211,0.9)]">
                      New
                    </span>
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-mist">
                    Compose specialized agents that collaborate, delegate and escalate — a full automation team that
                    never sleeps, never drops context.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {AGENTS.map((a) => (
                    <div
                      key={a.name}
                      className="rounded-2xl border border-white/[0.08] bg-[#0a0f1c]/70 p-4 transition-all duration-300 hover:border-violet-400/35 hover:bg-[#0d1322]"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-display text-sm font-semibold text-white">{a.name}</span>
                        <span
                          className={cn(
                            "flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide",
                            a.status === "running" ? "text-emerald-300" : "text-slate-500"
                          )}
                        >
                          <span
                            className={cn(
                              "h-1.5 w-1.5 rounded-full",
                              a.status === "running" ? "animate-pulse bg-emerald-400" : "bg-slate-600"
                            )}
                          />
                          {a.status}
                        </span>
                      </div>
                      <p className="mt-2 text-xs leading-snug text-mist">{a.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
