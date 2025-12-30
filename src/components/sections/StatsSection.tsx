import { AnimatedSection } from '@/components/AnimatedSection';
import { DollarSign, Target, Smartphone, TrendingUp } from 'lucide-react';

const stats = [
  { icon: DollarSign, value: '₹1,00,000+', label: 'Daily ad spend managed' },
  { icon: Target, value: 'Leads | Traffic | Conversions', label: 'Full-funnel campaigns' },
  { icon: Smartphone, value: 'Instagram-first', label: 'Platform-native funnels' },
  { icon: TrendingUp, value: 'Multiple brands', label: 'Scaled from zero' }
];

export const StatsSection = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-primary">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 75}>
              <div className="text-center text-primary-foreground p-4 md:p-6">
                <stat.icon className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 md:mb-4 opacity-80" />
                <div className="text-lg md:text-2xl lg:text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm opacity-80">{stat.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
