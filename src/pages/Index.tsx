import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { HooksSection } from '@/components/sections/HooksSection';
import { CampaignStepsSection } from '@/components/sections/CampaignStepsSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { BrandPartnershipsSection } from '@/components/sections/BrandPartnershipsSection';
import { TrivueFitSection } from '@/components/sections/TrivueFitSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Aman Dev for Trivue | Social Media Marketing Executive</title>
        <meta name="description" content="I don't post travel. I design how travel feels online. From idea to scripting to virality to brand partnerships." />
        <meta name="keywords" content="Trivue, social media marketing, Instagram marketing, travel content, scroll experience, Aman Dev" />
        <link rel="canonical" href="https://amandev.com" />
        
        <meta property="og:title" content="Aman Dev for Trivue" />
        <meta property="og:description" content="I design how travel feels online. Scroll-stopping content built like Instagram itself." />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aman Dev for Trivue" />
        <meta name="twitter:description" content="I design how travel feels online." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <ProcessSection />
          <HooksSection />
          <CampaignStepsSection />
          <StatsSection />
          <BrandPartnershipsSection />
          <TrivueFitSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
