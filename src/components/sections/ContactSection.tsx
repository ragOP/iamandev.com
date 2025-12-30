import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Sparkles, ShieldCheck, MessageCircle } from "lucide-react";
import amanProfile from "@/assets/aman-profile.jpg";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-16 md:py-24 bg-gradient-dark text-secondary-foreground"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-gradient-sunset opacity-15 blur-3xl" />
        <div className="absolute -bottom-32 -right-24 h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-primary/25 via-accent/15 to-transparent opacity-40 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.35)_1px,transparent_0)] [background-size:22px_22px]" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="mx-auto mb-10 md:mb-14 max-w-2xl text-center">
              <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-secondary-foreground/10 bg-secondary-foreground/5 px-4 py-2 backdrop-blur">
                <Sparkles className="h-4 w-4 text-accent" />
                <span className="text-xs md:text-sm font-semibold tracking-wide text-secondary-foreground/80">
                  Partnership / Brand / Virality
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Want your travel platform to feel like{" "}
                <span className="text-gradient-sunset">Instagram-native</span>?
              </h2>

              <p className="mt-4 text-sm md:text-base text-secondary-foreground/70">
                Not a brochure. Not “AI vibes”. A real scroll-stopping system: hook → shot list → edit rhythm →
                partnership-ready story.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={120}>
            <div className="relative mx-auto max-w-3xl">
              {/* Animated gradient border */}
              <div className="pointer-events-none absolute -inset-[1px] rounded-3xl bg-[conic-gradient(from_90deg_at_50%_50%,rgba(255,255,255,0.10),rgba(255,170,90,0.30),rgba(120,150,255,0.25),rgba(255,255,255,0.10))] blur-[0.5px]" />
              <div className="relative overflow-hidden rounded-3xl border border-secondary-foreground/12 bg-secondary-foreground/[0.04] backdrop-blur-xl shadow-[0_18px_70px_rgba(0,0,0,0.45)]">
                {/* subtle shine */}
                <div className="pointer-events-none absolute inset-0 opacity-25">
                  <div className="absolute -left-24 top-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
                  <div className="absolute -right-28 bottom-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
                </div>

                <div className="relative grid gap-0 md:grid-cols-[1.2fr_0.8fr]">
                  {/* Left: profile + pitch */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-4">
                      {/* Premium avatar */}
                      <div className="relative">
                        <div className="absolute -inset-2 rounded-full bg-gradient-sunset opacity-25 blur-md" />
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/40 via-accent/30 to-transparent opacity-80" />
                        <div className="relative h-16 w-16 md:h-20 md:w-20 overflow-hidden rounded-full border border-secondary-foreground/15 bg-black/20">
                          <img
                            src={amanProfile}
                            alt="Aman Dev"
                            className="h-full w-full object-cover"
                          />
                        </div>

                        {/* orbit sparkle */}
                        <div className="absolute -right-2 -top-2 grid h-8 w-8 place-items-center rounded-full border border-secondary-foreground/15 bg-secondary-foreground/10 backdrop-blur">
                          <Sparkles className="h-4 w-4 text-accent" />
                        </div>
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-lg md:text-xl font-bold leading-tight">Aman Dev</h3>
                        <div className="mt-1 flex flex-wrap items-center gap-2">
                          <span className="inline-flex items-center gap-1 rounded-full border border-secondary-foreground/10 bg-secondary-foreground/5 px-2 py-1 text-[11px] font-semibold text-secondary-foreground/80">
                            <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                            Reliable delivery
                          </span>
                          <span className="inline-flex items-center gap-1 rounded-full border border-secondary-foreground/10 bg-secondary-foreground/5 px-2 py-1 text-[11px] font-semibold text-secondary-foreground/80">
                            <MessageCircle className="h-3.5 w-3.5 text-accent" />
                            WhatsApp ready
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 rounded-2xl border border-secondary-foreground/10 bg-secondary-foreground/5 p-4 md:p-5">
                      <p className="text-sm md:text-base text-secondary-foreground/80 leading-relaxed">
                        If your goal is “people feel the trip before they book”, we build the page like a reel:
                        <span className="font-semibold text-secondary-foreground"> pacing, micro-moments, and emotion</span>.
                      </p>
                      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {[
                          { k: "1.5s", v: "Hook scripting" },
                          { k: "7–12", v: "Reel scenes planned" },
                          { k: "Brand", v: "Partnership-ready" },
                        ].map((x) => (
                          <div
                            key={x.k}
                            className="rounded-xl border border-secondary-foreground/10 bg-black/10 px-3 py-3 text-center"
                          >
                            <div className="text-base md:text-lg font-extrabold text-secondary-foreground">
                              {x.k}
                            </div>
                            <div className="text-[11px] md:text-xs text-secondary-foreground/65">
                              {x.v}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: contact actions */}
                  <div className="p-6 md:p-8 border-t md:border-t-0 md:border-l border-secondary-foreground/10 bg-black/10">
                    <div className="space-y-4">
                      <a
                        href="tel:+916386421290"
                        className="group flex items-center justify-between gap-3 rounded-2xl border border-secondary-foreground/10 bg-secondary-foreground/5 px-4 py-4 hover:border-accent/40 hover:bg-secondary-foreground/8 transition-all"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="grid h-10 w-10 place-items-center rounded-xl bg-secondary-foreground/10 border border-secondary-foreground/10">
                            <Phone className="h-5 w-5 text-accent" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs text-secondary-foreground/60">Call</div>
                            <div className="truncate font-bold text-secondary-foreground">
                              +91-6386421290
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-secondary-foreground/50 group-hover:text-secondary-foreground/70">
                          Tap →
                        </div>
                      </a>

                      <div className="flex items-center justify-between gap-3 rounded-2xl border border-secondary-foreground/10 bg-secondary-foreground/5 px-4 py-4">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="grid h-10 w-10 place-items-center rounded-xl bg-secondary-foreground/10 border border-secondary-foreground/10">
                            <MapPin className="h-5 w-5 text-accent" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs text-secondary-foreground/60">Location</div>
                            <div className="truncate font-bold text-secondary-foreground">
                              Lucknow, India
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <Button
                        variant="hero"
                        size="lg"
                        asChild
                        className="w-full contact-cta-live"
                      >
                        <a
                          href="https://wa.me/916386421290"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="WhatsApp Aman Dev"
                        >
                          Let’s Build Something Scroll-Worthy
                        </a>
                      </Button>

                      <div className="text-center text-[11px] text-secondary-foreground/55">
                        No long forms. Just a quick WhatsApp brief.
                      </div>
                    </div>
                  </div>
                </div>

                {/* bottom shimmer line */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-40" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
