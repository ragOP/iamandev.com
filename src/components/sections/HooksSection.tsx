import React from "react";
import { AnimatedSection } from "@/components/AnimatedSection";

const hookCategories = [
  {
    type: "Relatable",
    accent: "hsl(14 90% 60%)",
    hooks: [
      { text: "You don't need luxury. You need a break.", why: "Burnout + relief" },
      { text: "POV: You promised yourself 'next month'… again.", why: "Guilt + self-reflection" },
      { text: "This isn't a vacation. It's recovery.", why: "Reframes travel" },
      { text: "You're not tired of work. You're tired of the same view.", why: "Screenshot-worthy" },
    ],
  },
  {
    type: "Discovery",
    accent: "hsl(188 95% 52%)",
    hooks: [
      { text: "People don't talk about this place enough.", why: "Feels exclusive" },
      { text: "I almost didn't come here. That would've been a mistake.", why: "Regret reversal" },
      { text: "This place doesn't look real on camera.", why: "Anti-Instagram authenticity" },
    ],
  },
  {
    type: "Budget",
    accent: "hsl(145 80% 50%)",
    hooks: [
      { text: "This trip cost less than your weekend plans.", why: "Objection breaker" },
      { text: "Not expensive. Just smart planning.", why: "Removes luxury fear" },
    ],
  },
  {
    type: "Emotional",
    accent: "hsl(265 92% 67%)",
    hooks: [
      { text: "Solo, but not lonely.", why: "Identity hook" },
      { text: "Trips like this change how you think.", why: "Growth-oriented" },
      { text: "You'll remember this longer than anything you buy.", why: "Consumer mindset flip" },
    ],
  },
  {
    type: "Triveu-Style",
    accent: "hsl(32 95% 58%)",
    hooks: [
      { text: "Scroll like Instagram. Feel like you're already there.", why: "Product-native" },
      { text: "Before you book it, feel it.", why: "Emotional preview" },
      { text: "This is how travel should feel online.", why: "Future positioning" },
    ],
  },
];

export const HooksSection = () => {
  return (
    <section id="hooks" className="hooks-wrap">
      <style>{css}</style>

      {/* Ambient background */}
      <div className="hooks-bg" aria-hidden="true">
        <div className="hooks-blob b1" />
        <div className="hooks-blob b2" />
        <div className="hooks-blob b3" />
        <div className="hooks-grain" />
        <div className="hooks-vignette" />
      </div>

      <div className="container px-4 md:px-6 hooks-inner">
        <AnimatedSection>
          <div className="hooks-head">
            <div className="hooks-kicker">CONTENT ENGINE</div>
            <h2 className="hooks-title">
              Hooks That <span className="hooks-grad">Stop The Scroll</span>
            </h2>
            <p className="hooks-sub">
              Reel-native hooks with the psychology baked in — built to feel like a creator, not a brand.
            </p>
          </div>
        </AnimatedSection>

        <div className="hooks-stack">
          {hookCategories.map((cat, catIndex) => (
            <AnimatedSection key={cat.type} delay={catIndex * 110}>
              <div className="hooks-cat" style={{ ["--accent" as any]: cat.accent }}>
                {/* Category row header */}
                <div className="hooks-catbar">
                  <div className="hooks-pill">
                    <span className="hooks-dot" />
                    <span className="hooks-pillText">{cat.type}</span>
                    <span className="hooks-pillMeta">{cat.hooks.length} hooks</span>
                  </div>

                  <div className="hooks-catline" aria-hidden="true" />
                </div>

                {/* Cards: no empty spaces (auto-fit grid on desktop, snap scroll on mobile) */}
                <div className="hooks-cards">
                  {cat.hooks.map((h, i) => (
                    <article key={`${cat.type}-${i}`} className="hook-card">
                      <div className="hook-top">
                        <div className="hook-badge">HOOK</div>
                        <div className="hook-index">{String(i + 1).padStart(2, "0")}</div>
                      </div>

                      <div className="hook-main">
                        <p className="hook-quote">
                          <span className="hook-quoteMark">“</span>
                          {h.text}
                          <span className="hook-quoteMark">”</span>
                        </p>
                      </div>

                      <div className="hook-why">
                        <div className="hook-whyLabel">Why it works</div>
                        <div className="hook-whyText">{h.why}</div>
                      </div>

                      {/* Always-on effects */}
                      <div className="hook-glow" aria-hidden="true" />
                      <div className="hook-shimmer" aria-hidden="true" />
                    </article>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

const css = `
/* =========================
   HOOKS — PREMIUM, NO EMPTY SPACE
   - Mobile: horizontal snap reels
   - Desktop: auto-fit grid (no awkward gaps)
   - Always-on shimmer + border glow (not hover)
========================= */

.hooks-wrap{
  position: relative;
  padding: 86px 0;
  overflow: hidden;
  color: hsl(210 40% 98%);
  background: radial-gradient(1200px 700px at 20% 10%, rgba(255,255,255,.06), transparent 55%),
              radial-gradient(1000px 620px at 80% 30%, rgba(255,255,255,.05), transparent 60%),
              linear-gradient(180deg, hsl(225 22% 8%) 0%, hsl(230 22% 6%) 100%);
}

.hooks-inner{ position: relative; z-index: 2; }

.hooks-bg{ position:absolute; inset:0; z-index:0; pointer-events:none; }
.hooks-blob{
  position:absolute;
  width: 520px; height: 520px;
  border-radius: 999px;
  filter: blur(42px);
  opacity: .18;
  background: radial-gradient(circle at 30% 30%, rgba(255,255,255,.35), transparent 55%);
  transform: translateZ(0);
  animation: hooksFloat 12s ease-in-out infinite;
}
.hooks-blob.b1{ left:-160px; top:-120px; background: radial-gradient(circle at 30% 30%, rgba(255,120,64,.45), transparent 55%); }
.hooks-blob.b2{ right:-180px; top:120px; width: 620px; height: 620px; opacity:.14; background: radial-gradient(circle at 30% 30%, rgba(90,200,255,.40), transparent 55%); animation-duration: 14s; }
.hooks-blob.b3{ left: 20%; bottom:-260px; width: 720px; height: 720px; opacity:.12; background: radial-gradient(circle at 30% 30%, rgba(170,120,255,.40), transparent 55%); animation-duration: 16s; }
@keyframes hooksFloat{
  0%,100%{ transform: translate3d(0,0,0) scale(1); }
  50%{ transform: translate3d(0,-18px,0) scale(1.02); }
}
.hooks-grain{
  position:absolute; inset:0;
  opacity:.18;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E");
  mix-blend-mode: overlay;
}
.hooks-vignette{
  position:absolute; inset:-2px;
  background: radial-gradient(900px 520px at 50% 10%, transparent 30%, rgba(0,0,0,.35) 100%);
}

.hooks-head{
  max-width: 920px;
  margin: 0 auto 34px;
  text-align: center;
}
.hooks-kicker{
  display:inline-flex;
  align-items:center;
  gap:10px;
  padding: 9px 12px;
  border-radius: 999px;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.10);
  font-size: 11px;
  letter-spacing: .18em;
  text-transform: uppercase;
  color: rgba(255,255,255,.74);
  box-shadow: 0 10px 30px rgba(0,0,0,.18);
}
.hooks-title{
  margin: 14px 0 10px;
  font-weight: 900;
  line-height: 1.05;
  font-size: clamp(34px, 5vw, 58px);
}
.hooks-grad{
  background: linear-gradient(90deg, rgba(255,153,102,1), rgba(90,200,255,1), rgba(194,136,255,1));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.hooks-sub{
  margin: 0 auto;
  max-width: 720px;
  font-size: clamp(14px, 1.4vw, 16px);
  color: rgba(255,255,255,.70);
}

.hooks-stack{
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  gap: 22px;
}

.hooks-cat{
  --accent: hsl(32 95% 58%);
  position: relative;
  padding: 16px 14px 16px;
  border-radius: 26px;
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.10);
  box-shadow: 0 18px 60px rgba(0,0,0,.26);
  overflow: hidden;
}
.hooks-cat:before{
  content:"";
  position:absolute; inset:-2px;
  background: radial-gradient(600px 220px at 10% 0%, color-mix(in srgb, var(--accent) 35%, transparent) 0%, transparent 60%),
              radial-gradient(520px 220px at 90% 0%, rgba(255,255,255,.08) 0%, transparent 55%);
  opacity: .8;
  pointer-events:none;
}

.hooks-catbar{
  position: relative;
  display:flex;
  align-items:center;
  gap: 12px;
  padding: 4px 6px 14px;
  z-index: 2;
}
.hooks-pill{
  display:inline-flex;
  align-items:center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 999px;
  background: rgba(0,0,0,.22);
  border: 1px solid rgba(255,255,255,.14);
}
.hooks-dot{
  width: 10px; height: 10px;
  border-radius: 999px;
  background: var(--accent);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--accent) 25%, transparent);
}
.hooks-pillText{
  font-weight: 900;
  letter-spacing: .02em;
}
.hooks-pillMeta{
  font-size: 12px;
  color: rgba(255,255,255,.62);
  border-left: 1px solid rgba(255,255,255,.14);
  padding-left: 10px;
}
.hooks-catline{
  flex:1;
  height: 1px;
  background: linear-gradient(90deg, rgba(255,255,255,.12), rgba(255,255,255,.02));
}

.hooks-cards{
  position: relative;
  z-index: 2;

  /* Mobile: snap reel (no empty space) */
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(240px, 1fr);
  gap: 12px;
  overflow-x: auto;
  padding: 2px 6px 10px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}
.hooks-cards::-webkit-scrollbar{ height: 10px; }
.hooks-cards::-webkit-scrollbar-thumb{
  background: rgba(255,255,255,.16);
  border-radius: 999px;
}
.hooks-cards::-webkit-scrollbar-track{ background: transparent; }

@media (min-width: 900px){
  .hooks-wrap{ padding: 96px 0; }
  .hooks-cards{
    overflow: visible;
    grid-auto-flow: unset;
    grid-auto-columns: unset;
    scroll-snap-type: none;

    /* Desktop: auto-fit grid (prevents empty/odd gaps) */
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    padding: 6px 8px 10px;
    gap: 14px;
  }
}

.hook-card{
  scroll-snap-align: start;
  position: relative;
  border-radius: 22px;
  padding: 14px 14px 14px;
  min-height: 230px;
  background: rgba(8,10,16,.55);
  border: 1px solid rgba(255,255,255,.14);
  box-shadow: 0 18px 46px rgba(0,0,0,.36);
  overflow: hidden;
  isolation: isolate;
  transform: translateZ(0);
}
@media (min-width: 900px){
  .hook-card{ min-height: 260px; }
}

.hook-top{
  display:flex;
  align-items:center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 10px;
}
.hook-badge{
  font-size: 11px;
  letter-spacing: .16em;
  text-transform: uppercase;
  font-weight: 900;
  padding: 8px 10px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--accent) 18%, rgba(255,255,255,.06));
  border: 1px solid color-mix(in srgb, var(--accent) 30%, rgba(255,255,255,.10));
  color: rgba(255,255,255,.90);
}
.hook-index{
  font-weight: 900;
  font-size: 12px;
  color: rgba(255,255,255,.62);
  padding: 8px 10px;
  border-radius: 999px;
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.10);
}

.hook-main{ padding: 6px 2px 10px; }
.hook-quote{
  font-weight: 900;
  letter-spacing: -0.01em;
  line-height: 1.15;
  font-size: 18px;
  color: rgba(255,255,255,.96);
}
@media (min-width: 900px){
  .hook-quote{ font-size: 20px; }
}
.hook-quoteMark{
  color: color-mix(in srgb, var(--accent) 65%, rgba(255,255,255,.8));
  font-weight: 900;
}

.hook-why{
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid rgba(255,255,255,.12);
  display:flex;
  flex-direction: column;
  gap: 4px;
}
.hook-whyLabel{
  font-size: 11px;
  letter-spacing: .16em;
  text-transform: uppercase;
  color: rgba(255,255,255,.56);
}
.hook-whyText{
  font-size: 13px;
  font-weight: 700;
  color: rgba(255,255,255,.86);
}

/* Always-on glow ring */
.hook-glow{
  position:absolute; inset:-2px;
  border-radius: 24px;
  background: radial-gradient(420px 220px at 25% 20%,
      color-mix(in srgb, var(--accent) 32%, transparent) 0%,
      transparent 60%),
    radial-gradient(420px 220px at 80% 10%,
      rgba(255,255,255,.10) 0%,
      transparent 55%);
  opacity: .85;
  pointer-events:none;
  z-index: -1;
}
.hook-card:after{
  content:"";
  position:absolute; inset:0;
  border-radius: 22px;
  pointer-events:none;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,.10);
}

/* Always-on shimmer (NOT hover) */
.hook-shimmer{
  position:absolute; inset:0;
  pointer-events:none;
  border-radius: 22px;
  overflow:hidden;
  opacity: .55;
  mix-blend-mode: screen;
}
.hook-shimmer:before{
  content:"";
  position:absolute;
  top:-40%;
  left:-60%;
  width: 70%;
  height: 180%;
  background: linear-gradient(120deg,
    transparent 0%,
    rgba(255,255,255,.10) 20%,
    rgba(255,255,255,.26) 35%,
    rgba(255,255,255,.10) 50%,
    transparent 70%);
  transform: rotate(12deg);
  animation: hookShimmer 2.3s linear infinite;
}
@keyframes hookShimmer{
  0%{ transform: translateX(-40%) rotate(12deg); opacity:.15; }
  35%{ opacity:.40; }
  100%{ transform: translateX(220%) rotate(12deg); opacity:.18; }
}
`;
