import { useState, type ReactNode } from "react";
import { ArrowRight, Check, Minus, Sparkles } from "lucide-react";
import { cn } from "../utils/cn";
import { Reveal, SectionHeading } from "./ui";

/* ------------------------------------------- data */

type Plan = {
  name: string;
  desc: string;
  monthly: number | null;
  yearly: number | null;
  note: { yearly: string; monthly: string };
  cta: string;
  featured?: boolean;
  features: string[];
};

const PLANS: Plan[] = [
  {
    name: "Starter",
    desc: "For solo operators automating their first flows.",
    monthly: 19,
    yearly: 15,
    note: { yearly: "billed annually ($180/yr)", monthly: "billed monthly" },
    cta: "Start free trial",
    features: [
      "10,000 workflow runs / mo",
      "300 neural-agent minutes",
      "50+ core integrations",
      "Basic analytics dashboard",
      "Community support",
    ],
  },
  {
    name: "Growth",
    desc: "For teams putting entire departments on autopilot.",
    monthly: 49,
    yearly: 39,
    note: { yearly: "billed annually ($468/yr)", monthly: "billed monthly" },
    cta: "Start free trial",
    featured: true,
    features: [
      "Unlimited workflow runs",
      "2,000 neural-agent minutes",
      "All 500+ integrations",
      "Guardrails & human approvals",
      "Live observability suite",
      "Priority support · 12h",
    ],
  },
  {
    name: "Enterprise",
    desc: "For orgs scaling automation with compliance.",
    monthly: null,
    yearly: null,
    note: { yearly: "volume-based · annual agreement", monthly: "volume-based · annual agreement" },
    cta: "Talk to sales",
    features: [
      "Everything in Growth",
      "SSO / SCIM & audit logs",
      "Custom agent fine-tuning",
      "Dedicated automation architect",
      "99.99% uptime SLA",
    ],
  },
];

type Cell = string | boolean;

const MATRIX: { label: string; starter: Cell; growth: Cell; enterprise: Cell }[] = [
  { label: "Workflow runs / seat / mo", starter: "10,000", growth: "Unlimited", enterprise: "Unlimited" },
  { label: "Neural agent minutes", starter: "300", growth: "2,000", enterprise: "Custom" },
  { label: "Integrations", starter: "50+ core", growth: "All 500+", enterprise: "500+ & custom builds" },
  { label: "Live observability", starter: true, growth: true, enterprise: true },
  { label: "Self-healing runs", starter: false, growth: true, enterprise: true },
  { label: "Guardrails & human approvals", starter: false, growth: true, enterprise: true },
  { label: "SSO / SCIM & audit logs", starter: false, growth: false, enterprise: true },
  { label: "Dedicated infrastructure", starter: false, growth: false, enterprise: true },
  { label: "Support", starter: "Community", growth: "Priority · 12h", enterprise: "24/7 + named CSM" },
];

function CellValue({ value }: { value: Cell }) {
  if (value === true) return <Check className="mx-auto h-4 w-4 text-violet-300" />;
  if (value === false) return <Minus className="mx-auto h-4 w-4 text-slate-700" />;
  return <span className="text-slate-300">{value}</span>;
}

/* ------------------------------------------- toggle */

function BillingToggle({ yearly, onChange }: { yearly: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="relative grid w-full max-w-[320px] grid-cols-2 rounded-full border border-white/[0.1] bg-white/[0.04] p-1 backdrop-blur-md">
      <span
        aria-hidden="true"
        className={cn(
          "absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 shadow-[0_0_22px_-4px_rgba(192,38,211,0.9)] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          yearly && "translate-x-full"
        )}
      />
      {(
        [
          { label: "Monthly", value: false },
          { label: "Annual", value: true },
        ] as const
      ).map((opt) => (
        <button
          key={opt.label}
          onClick={() => onChange(opt.value)}
          aria-pressed={yearly === opt.value}
          className={cn(
            "relative z-10 flex items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold transition-colors duration-300",
            yearly === opt.value ? "text-white" : "text-slate-400 hover:text-slate-200"
          )}
        >
          {opt.label}
          {opt.value && (
            <span
              className={cn(
                "rounded-full px-1.5 py-0.5 text-[10px] font-bold transition-colors duration-300",
                yearly ? "bg-white/20 text-white" : "bg-emerald-500/15 text-emerald-300"
              )}
            >
              −20%
            </span>
          )}
        </button>
      ))}
    </div>
  );
}

/* ------------------------------------------- plan card */

function PlanCard({ plan, yearly, children }: { plan: Plan; yearly: boolean; children?: ReactNode }) {
  const price = yearly ? plan.yearly : plan.monthly;
  const body = (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-[25px] p-7",
        plan.featured ? "bg-[#0b101d]" : "bg-transparent"
      )}
    >
      {plan.featured && (
        <span className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-3.5 py-1.5 text-[10px] font-bold tracking-[0.14em] text-white uppercase shadow-[0_0_24px_-4px_rgba(192,38,211,0.95)]">
          <Sparkles className="h-3 w-3" />
          Most popular
        </span>
      )}

      <h3 className="font-display text-lg font-semibold text-white">{plan.name}</h3>
      <p className="mt-1.5 text-sm leading-snug text-mist">{plan.desc}</p>

      <div className="mt-6 flex min-h-[60px] items-end gap-2">
        {price !== null ? (
          <>
            <span
              key={String(yearly)}
              className="animate-price inline-block font-display text-5xl font-bold tracking-tight text-white"
            >
              ${price}
            </span>
            <span className="pb-1.5 text-sm text-slate-500">/ seat / mo</span>
          </>
        ) : (
          <span className="font-display text-[2.6rem] leading-none font-bold tracking-tight text-white">
            Custom
          </span>
        )}
      </div>
      <p key={`n-${String(yearly)}`} className="animate-price mt-1.5 text-xs text-slate-500">
        {yearly ? plan.note.yearly : plan.note.monthly}
      </p>

      <a
        href="#cta"
        className={cn(
          "group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold transition-all duration-300 active:scale-[0.98]",
          plan.featured
            ? "bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600 bg-[length:220%_100%] bg-left text-white shadow-[0_0_30px_-6px_rgba(168,85,247,0.85)] hover:-translate-y-0.5 hover:bg-right hover:shadow-[0_0_44px_-4px_rgba(192,38,211,0.95)]"
            : "border border-white/12 bg-white/[0.05] text-slate-200 hover:-translate-y-0.5 hover:border-violet-300/50 hover:bg-white/[0.09] hover:shadow-[0_0_24px_-8px_rgba(139,92,246,0.6)]"
        )}
      >
        {plan.cta}
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </a>

      <div className="my-7 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

      <ul className="space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
            <span
              className={cn(
                "mt-0.5 grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full",
                plan.featured
                  ? "bg-gradient-to-br from-violet-500 to-fuchsia-600 text-white shadow-[0_0_10px_-2px_rgba(192,38,211,0.9)]"
                  : "bg-violet-500/15 text-violet-300"
              )}
            >
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            {f}
          </li>
        ))}
      </ul>
      {children}
    </div>
  );

  if (plan.featured) {
    return (
      <div className="relative h-full rounded-[26px] bg-gradient-to-b from-violet-500/80 via-fuchsia-500/30 to-white/[0.06] p-px shadow-[0_0_70px_-18px_rgba(168,85,247,0.65)] transition-transform duration-500 hover:-translate-y-1.5 lg:scale-[1.035]">
        {body}
      </div>
    );
  }
  return (
    <div className="h-full rounded-[26px] border border-white/[0.09] bg-white/[0.03] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-violet-400/30 hover:shadow-[0_24px_60px_-28px_rgba(139,92,246,0.5)]">
      {body}
    </div>
  );
}

/* ------------------------------------------- section */

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-fuchsia-700/10 blur-[160px]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Pricing that scales with <span className="text-gradient">your ambition.</span>
            </>
          }
          sub="Start free, upgrade when your workflows do. Every plan ships with unlimited seats on day one — switch or cancel anytime."
        />

        <Reveal delay={250}>
          <div className="mt-10 flex justify-center">
            <BillingToggle yearly={yearly} onChange={setYearly} />
          </div>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-5">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 120} className="h-full">
              <PlanCard plan={plan} yearly={yearly} />
            </Reveal>
          ))}
        </div>

        {/* comparison matrix */}
        <div id="compare" className="scroll-mt-32">
          <Reveal delay={120}>
            <div className="mt-24">
              <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
                <div>
                  <h3 className="font-display text-xl font-bold text-white sm:text-2xl">Compare plans in detail</h3>
                  <p className="mt-1.5 text-sm text-mist">The full feature matrix, side by side.</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/25 bg-violet-500/[0.08] px-3 py-1.5 text-[11px] font-semibold text-violet-300">
                  <Sparkles className="h-3 w-3" /> Growth covers 92% of teams
                </span>
              </div>

              <div className="mt-6 overflow-x-auto rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm">
                <table className="w-full min-w-[680px] border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.08]">
                      <th className="px-6 py-5 text-left text-xs font-semibold tracking-[0.14em] text-slate-500 uppercase">
                        Feature
                      </th>
                      <th className="px-4 py-5 text-center font-display text-sm font-semibold text-slate-300">
                        Starter
                      </th>
                      <th className="border-x border-violet-400/15 bg-violet-500/[0.06] px-4 py-5 text-center">
                        <span className="text-gradient font-display text-sm font-bold">Growth</span>
                      </th>
                      <th className="px-4 py-5 text-center font-display text-sm font-semibold text-slate-300">
                        Enterprise
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {MATRIX.map((row, i) => (
                      <tr
                        key={row.label}
                        className={cn(
                          "border-b border-white/[0.05] transition-colors duration-300 hover:bg-white/[0.035]",
                          i === MATRIX.length - 1 && "border-b-0"
                        )}
                      >
                        <td className="px-6 py-4 font-medium text-slate-300">{row.label}</td>
                        <td className="px-4 py-4 text-center">
                          <CellValue value={row.starter} />
                        </td>
                        <td className="border-x border-violet-400/15 bg-violet-500/[0.06] px-4 py-4 text-center font-medium">
                          <CellValue value={row.growth} />
                        </td>
                        <td className="px-4 py-4 text-center">
                          <CellValue value={row.enterprise} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-center text-xs text-slate-600">
                Prices in USD. Annual billing saves 20%. Nonprofits and educators get 50% off Growth.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
