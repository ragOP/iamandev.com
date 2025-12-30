import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Sparkles } from 'lucide-react';
import amanProfile from '@/assets/aman-profile.jpg';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-dark text-secondary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-sunset opacity-10 blur-3xl rounded-full" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <Sparkles className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 md:mb-6 text-accent" />
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 px-2">
              If you want your travel platform to feel like Instagram —{' '}
              <span className="text-gradient-sunset">let's talk.</span>
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-secondary-foreground/5 border border-secondary-foreground/10">
              {/* Profile */}
              <div className="flex flex-col items-center mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-primary mb-3 md:mb-4">
                  <img src={amanProfile} alt="Aman Dev" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg md:text-xl font-bold">Aman Dev</h3>
              </div>
              
              {/* Contact Info */}
              <div className="flex flex-col items-center gap-3 md:gap-4 mb-6 md:mb-8">
                <a 
                  href="tel:+916386421290" 
                  className="flex items-center gap-2 text-base md:text-lg hover:text-accent transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +91-6386421290
                </a>
                <div className="flex items-center gap-2 text-secondary-foreground/70 text-sm md:text-base">
                  <MapPin className="w-5 h-5" />
                  Lucknow, India
                </div>
              </div>
              
              {/* CTA */}
              <Button variant="hero" size="lg" asChild className="w-full sm:w-auto">
                <a href="https://wa.me/916386421290" target="_blank" rel="noopener noreferrer">
                  Let's Build Something Scroll-Worthy
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
