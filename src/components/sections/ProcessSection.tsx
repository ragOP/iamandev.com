import { AnimatedSection } from '@/components/AnimatedSection';
import { 
  Brain, 
  Pen, 
  Camera, 
  Clock, 
  Rocket, 
  Handshake 
} from 'lucide-react';

const steps = [
  { icon: Brain, title: 'Insight before content', desc: 'What makes people stop scrolling?' },
  { icon: Pen, title: 'Hook scripting (first 1.5s)', desc: 'If it sounds like an ad, it fails.' },
  { icon: Camera, title: 'Instagram-native visuals', desc: 'Raw > polished. Real > perfect.' },
  { icon: Clock, title: 'Posting + timing strategy', desc: 'Virality = timing + emotion.' },
  { icon: Rocket, title: 'Virality amplification', desc: 'Scale winners, kill losers.' },
  { icon: Handshake, title: 'Brand & partnership integration', desc: 'Stories with brands, not ads with logos.' }
];

export const ProcessSection = () => {
  return (
    <section id="process" className="py-16 md:py-24 bg-card">
      <div className="container px-4 md:px-6">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-2">
              How I Turn Ideas Into{' '}
              <span className="text-gradient">Viral Instagram Campaigns</span>
            </h2>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <AnimatedSection key={step.title} delay={index * 75}>
              <div className="group p-5 md:p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 h-full text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <step.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
