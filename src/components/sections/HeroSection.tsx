import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles } from 'lucide-react';
import travelHero from '@/assets/travel-hero.jpg';
import amanProfile from '@/assets/aman-profile.jpg';

export const HeroSection = () => {
  const scrollToProcess = () => {
    document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${travelHero})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
      
      <div className="container relative z-10 px-4 md:px-6 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile */}
          <div 
            className="flex justify-center mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary shadow-glow">
                <img src={amanProfile} alt="Aman Dev" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-accent-foreground" />
              </div>
            </div>
          </div>

          {/* One Punch Headline */}
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            I don't post travel.
            <br />
            <span className="text-gradient-sunset">I design how travel feels online.</span>
          </h1>
          
          {/* One Line Sub-head */}
          <p 
            className="text-lg md:text-xl text-muted-foreground mb-10 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            From idea → scripting → virality → brand partnerships.
          </p>
          
          {/* CTA */}
          <div 
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            <Button variant="hero" size="xl" onClick={scrollToProcess}>
              See How I'd Make Travel Viral
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <button 
          onClick={scrollToProcess}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
