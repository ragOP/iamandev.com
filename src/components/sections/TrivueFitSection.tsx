import { AnimatedSection } from '@/components/AnimatedSection';
import { Compass, CheckCircle } from 'lucide-react';

const points = [
  'Instagram-like content thinking',
  'Experience-first design',
  'Discovery-driven storytelling',
  'Emotion before conversion'
];

export const TrivueFitSection = () => {
  return (
    <section id="triveu-fit" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-3xl bg-gradient-ocean text-secondary-foreground text-center">
              <div className="flex flex-col items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Compass className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Why This Works for Triveu
                </h2>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {points.map((point, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-xl bg-secondary-foreground/10"
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="font-medium">{point}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-center text-lg text-secondary-foreground/80">
                I built this portfolio <strong className="text-accent">specifically for Triveu</strong> — 
                because I already understand how your product should feel.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
