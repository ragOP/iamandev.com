import { AnimatedSection } from '@/components/AnimatedSection';
import { Heart, Compass, Wallet, Users, Smartphone } from 'lucide-react';

const hookCategories = [
  {
    type: 'Relatable',
    color: 'from-rose-500 to-orange-500',
    hooks: [
      { text: "You don't need luxury. You need a break.", why: 'Burnout + relief' },
      { text: "POV: You promised yourself 'next month'… again.", why: 'Guilt + self-reflection' },
      { text: "This isn't a vacation. It's recovery.", why: 'Reframes travel' },
      { text: "You're not tired of work. You're tired of the same view.", why: 'Screenshot-worthy' }
    ]
  },
  {
    type: 'Discovery',
    color: 'from-teal-500 to-cyan-500',
    hooks: [
      { text: "People don't talk about this place enough.", why: 'Feels exclusive' },
      { text: "I almost didn't come here. That would've been a mistake.", why: 'Regret reversal' },
      { text: "This place doesn't look real on camera.", why: 'Anti-Instagram authenticity' }
    ]
  },
  {
    type: 'Budget',
    color: 'from-emerald-500 to-green-500',
    hooks: [
      { text: "This trip cost less than your weekend plans.", why: 'Objection breaker' },
      { text: "Not expensive. Just smart planning.", why: 'Removes luxury fear' }
    ]
  },
  {
    type: 'Emotional',
    color: 'from-violet-500 to-purple-500',
    hooks: [
      { text: "Solo, but not lonely.", why: 'Identity hook' },
      { text: "Trips like this change how you think.", why: 'Growth-oriented' },
      { text: "You'll remember this longer than anything you buy.", why: 'Consumer mindset flip' }
    ]
  },
  {
    type: 'Triveu-Style',
    color: 'from-orange-500 to-amber-500',
    hooks: [
      { text: "Scroll like Instagram. Feel like you're already there.", why: 'Product-native' },
      { text: "Before you book it, feel it.", why: 'Emotional preview' },
      { text: "This is how travel should feel online.", why: 'Future positioning' }
    ]
  }
];

export const HooksSection = () => {
  return (
    <section id="hooks" className="py-16 md:py-24 bg-gradient-dark text-secondary-foreground overflow-hidden">
      <div className="container px-4 md:px-6">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-2">
              Hooks That{' '}
              <span className="text-gradient-sunset">Stop The Scroll</span>
            </h2>
            <p className="text-secondary-foreground/70 text-sm md:text-base">
              Instagram-first thinking. Each hook shows why it works.
            </p>
          </div>
        </AnimatedSection>
        
        {/* Hook Categories */}
        <div className="space-y-8 md:space-y-12 max-w-6xl mx-auto">
          {hookCategories.map((category, catIndex) => (
            <AnimatedSection key={category.type} delay={catIndex * 100}>
              <div className="text-center">
                {/* Category Label */}
                <div className="flex justify-center mb-4 md:mb-6">
                  <div className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${category.color} text-white text-sm font-bold`}>
                    {category.type}
                  </div>
                </div>
                
                {/* Hook Cards - Instagram Reel Style */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                  {category.hooks.map((hook, hookIndex) => (
                    <div
                      key={hookIndex}
                      className="group relative aspect-auto sm:aspect-[3/4] min-h-[220px] rounded-xl md:rounded-2xl overflow-hidden bg-gradient-to-br from-secondary-foreground/10 to-secondary-foreground/5 border border-secondary-foreground/10 shadow-card hover:shadow-glow hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.01] active:scale-[0.99] cursor-pointer animate-fade-in"
                      style={{ animationDelay: `${hookIndex * 80}ms` }}
                    >
                      {/* Reel-style content */}
                      <div className="absolute inset-0 p-4 md:p-5 flex flex-col items-center text-center justify-center gap-4 sm:items-stretch sm:justify-between">
                        {/* Hook Type Badge */}
                        <div className={`px-2.5 py-1 rounded-full bg-gradient-to-r ${category.color} text-white text-[10px] md:text-xs font-semibold`}>
                          Hook
                        </div>

                        {/* Hook Text */}
                        <div className="w-full">
                          <p className="text-base md:text-lg lg:text-xl font-bold leading-snug mb-3">
                            "{hook.text}"
                          </p>

                          {/* Why it works */}
                          <div className="pt-3 border-t border-secondary-foreground/20">
                            <span className="text-[10px] md:text-xs uppercase tracking-wider text-secondary-foreground/50">
                              Why it works
                            </span>
                            <p className="text-sm text-accent font-medium mt-1">{hook.why}</p>
                          </div>
                        </div>
                      </div>

                      {/* Hover glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500`} />

                      {/* Shimmer effect on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary-foreground/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      </div>
                    </div>
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
