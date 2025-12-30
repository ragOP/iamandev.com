import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, ShieldCheck } from "lucide-react";
import travelHero from "@/assets/travel-hero.jpg";
import amanProfile from "@/assets/aman-profile.jpg";

export const HeroSection = () => {
  const scrollToProcess = () => {
    document.getElementById("process")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-[1.06]"
        style={{ backgroundImage: `url(${travelHero})` }}
      />

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/35 to-black/70" />
      <div className="absolute inset-0 grain-overlay opacity-40 mix-blend-overlay" />

      {/* Soft light blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-white/10 blur-3xl floaty" />
      <div className="pointer-events-none absolute -bottom-28 -right-24 h-[520px] w-[520px] rounded-full bg-primary/20 blur-3xl floaty" />

      <div className="container relative z-10 px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Top micro-badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-white/90 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,.25)] opacity-0 animate-fade-in"
            style={{ animationDelay: "0.05s" }}
          >
            <ShieldCheck className="w-4 h-4" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide">
              Creator + Strategist • Partnerships • Viral Systems
            </span>
          </div>

          {/* Profile */}
          <div
            className="flex justify-center mt-10 mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.12s" }}
          >
            <div className="relative profile-ring">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-black/30 shadow-[0_18px_50px_rgba(0,0,0,.45)]">
                <img
                  src={amanProfile}
                  alt="Aman Dev"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Premium badge */}
              <div className="absolute -bottom-2 -right-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-3 py-1 shadow-[0_10px_30px_rgba(0,0,0,.35)]">
                <div className="flex items-center gap-1.5 text-white">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-semibold">Aman Dev</span>
                </div>
              </div>
            </div>
          </div>

          {/* Headline */}
          <h1
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.02] tracking-tight mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.22s" }}
          >
            I don’t post travel.
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-200 via-amber-200 to-sky-200 drop-shadow-[0_10px_30px_rgba(0,0,0,.35)]">
              I design how travel feels online.
            </span>
          </h1>

          {/* Subhead */}
          <p
            className="text-white/85 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.36s" }}
          >
            From idea → scripting → virality → brand partnerships — built like a repeatable system.
          </p>

          {/* CTA row */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.52s" }}
          >
            <Button variant="hero" size="xl" onClick={scrollToProcess} className="w-full sm:w-auto">
              See How I’d Make Travel Viral
            </Button>

            <button
              onClick={scrollToProcess}
              className="w-full sm:w-auto rounded-xl border border-white/18 bg-white/10 text-white/90 px-6 h-16 text-lg font-semibold backdrop-blur-md
                         shadow-[0_12px_40px_rgba(0,0,0,.25)]
                         transition-transform duration-300 active:scale-95"
            >
              View Process
            </button>
          </div>

          {/* Trust / stats strip */}
          <div
            className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto opacity-0 animate-fade-in"
            style={{ animationDelay: "0.62s" }}
          >
            {[
              { k: "Formats", v: "Reels • UGC • Editorial" },
              { k: "Outcome", v: "Retention + Shares + Deals" },
              { k: "Style", v: "Cinematic • Clean • Premium" },
            ].map((item) => (
              <div
                key={item.k}
                className="rounded-2xl border border-white/14 bg-white/10 backdrop-blur-md px-5 py-4
                           shadow-[0_12px_40px_rgba(0,0,0,.22)]"
              >
                <div className="text-xs uppercase tracking-wider text-white/60 font-semibold">
                  {item.k}
                </div>
                <div className="text-white font-semibold mt-1">{item.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToProcess}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
        >
          <ArrowDown className="w-5 h-5 animate-bounce" />
          <span className="text-xs tracking-wide">Scroll</span>
        </button>
      </div>
    </section>
  );
};
