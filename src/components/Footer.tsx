import { Compass, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 md:py-8 bg-background border-t border-border">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          {/* Logo */}
          <div className="flex items-center gap-2 font-bold text-lg">
            <div className="w-8 h-8 rounded-lg bg-gradient-sunset flex items-center justify-center">
              <Compass className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-gradient">Aman Dev</span>
          </div>
          
          {/* Contact */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
            <a href="tel:+916386421290" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              +91-6386421290
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              Lucknow, India
            </span>
          </div>
          
          {/* Copyright */}
          <div className="text-xs md:text-sm text-muted-foreground">
            © {currentYear} Aman Dev
          </div>
        </div>
      </div>
    </footer>
  );
};
