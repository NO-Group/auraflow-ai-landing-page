import {
  Aperture,
  Cloud,
  Command,
  Compass,
  Hexagon,
  Layers,
  Orbit,
  Triangle,
  type LucideIcon,
} from "lucide-react";

const BRANDS: { icon: LucideIcon; name: string }[] = [
  { icon: Triangle, name: "Vektor" },
  { icon: Cloud, name: "Nimbus" },
  { icon: Aperture, name: "Quantia" },
  { icon: Hexagon, name: "Hexlab" },
  { icon: Orbit, name: "Orbit9" },
  { icon: Command, name: "Cmdshift" },
  { icon: Layers, name: "Layerup" },
  { icon: Compass, name: "Northloop" },
];

export default function Logos() {
  return (
    <section id="customers" className="relative border-y border-white/[0.05] py-12 sm:py-14">
      <p className="text-center text-[11px] font-semibold tracking-[0.22em] text-slate-500 uppercase">
        Powering automation at 40,000+ companies
      </p>
      <div className="marquee-mask mt-8 overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-16 pr-16 hover:[animation-play-state:paused]">
          {[...BRANDS, ...BRANDS].map((b, i) => (
            <span
              key={`${b.name}-${i}`}
              className="flex shrink-0 cursor-default items-center gap-2.5 text-slate-500 transition-colors duration-300 hover:text-slate-200"
            >
              <b.icon className="h-5 w-5" strokeWidth={1.8} />
              <span className="font-display text-lg font-semibold tracking-tight">{b.name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
