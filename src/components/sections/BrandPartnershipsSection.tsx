import { AnimatedSection } from '@/components/AnimatedSection';
import { Handshake, CheckCircle, Sparkles } from 'lucide-react';

const points = [
  'Managed brand-integrated campaigns',
  'Content-first collaborations (not forced ads)',
  'Long-term visibility partnerships',
  'Experience aligning brands with emotion & storytelling'
];

export const BrandPartnershipsSection = () => {
  return (
    <section id="partnerships" className="py-16 md:py-24 bg-card">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="flex flex-col items-center gap-4 mb-8">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-ocean flex items-center justify-center">
                <Handshake className="w-6 h-6 md:w-7 md:h-7 text-secondary-foreground" />
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold px-2">
                Brand Collaborations & Strategic Partnerships
              </h2>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
              {points.map((point, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-center gap-3 p-4 rounded-xl bg-background border border-border text-center"
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground text-sm md:text-base">{point}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <div className="p-6 md:p-8 rounded-2xl bg-gradient-dark text-secondary-foreground">
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-3 md:mb-4 text-accent" />
              <p className="text-xl md:text-2xl lg:text-3xl font-bold px-2">
                I integrate brands into stories —{' '}
                <span className="text-gradient-sunset">not stories into ads.</span>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
