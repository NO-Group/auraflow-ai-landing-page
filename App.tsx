import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import { Cta, Footer } from "./components/CtaFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-ink font-sans text-slate-200 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Features />
        <Pricing />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
