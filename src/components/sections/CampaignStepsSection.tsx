import { AnimatedSection } from '@/components/AnimatedSection';

const steps = [
  { num: '01', title: 'Insight', desc: 'Normal people are tired, not bored.' },
  { num: '02', title: 'Hook', desc: "If it doesn't sound human, it won't go viral." },
  { num: '03', title: 'Visual Direction', desc: 'Raw > polished.' },
  { num: '04', title: 'Posting Strategy', desc: 'Timing + emotion = reach.' },
  { num: '05', title: 'Scale', desc: 'Winning reels → variations → ads.' }
];

export const CampaignStepsSection = () => {
  return (
    <section id="campaign-steps" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-2">
              From Idea to{' '}
              <span className="text-gradient">Viral Campaign</span>
            </h2>
          </div>
        </AnimatedSection>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            {steps.map((step, index) => (
              <AnimatedSection key={step.num} delay={index * 100}>
                <div className={`relative p-4 md:p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 h-full text-center ${index === 4 ? 'col-span-2 md:col-span-1' : ''}`}>
                  {/* Number */}
                  <div className="text-3xl md:text-4xl font-black text-gradient mb-2 md:mb-3">{step.num}</div>
                  
                  {/* Title */}
                  <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2">{step.title}</h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-xs md:text-sm">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
