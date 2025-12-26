import React from "react";
import { MainNav } from "@/components/MainNav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { SpecialistServices } from "@/components/SpecialistServices";
import { HomepageContent } from "@/components/HomepageContent";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";
import { AIOverviewOptimizer, createPageAIConfig } from "@/components/seo/AIOverviewOptimizer";
import { VoiceSearchOptimizer } from "@/components/seo/VoiceSearchOptimizer";

const Index = () => {
  const aiConfig = createPageAIConfig(
    'service',
    'Secondary Glazing Specialist - London\'s Leading Glazing Solutions',
    ['London', 'UK', 'heritage windows', 'listed buildings', 'acoustic performance']
  );
  
  aiConfig.keyFacts = [
    'Secondary glazing reduces noise by up to 70%',
    'Improves thermal insulation by 60%',
    'Protects original windows in listed buildings',
    'Professional installation across London',
    'No planning permission required in most cases'
  ];
  
  aiConfig.commonQuestions = [
    {
      question: 'What is secondary glazing?',
      answer: 'Secondary glazing is an internal window system installed behind existing windows to improve thermal insulation, reduce noise, and enhance security without altering the original window appearance.'
    },
    {
      question: 'How much does secondary glazing cost in London?',
      answer: 'Secondary glazing costs typically range from £200-£600 per window in London, depending on size, style, and glass type. We provide free quotes and surveys.'
    },
    {
      question: 'Does secondary glazing reduce noise effectively?',
      answer: 'Yes, secondary glazing can reduce noise by up to 70%, making it highly effective for homes near busy roads, railways, or flight paths in London.'
    }
  ];

  return (
    <div className="min-h-screen">
      <EnhancedSEO
        title="Secondary Glazing Specialist | UK's Leading Glazing Solutions"
        description="Expert secondary glazing solutions for residential and commercial properties. Reduce noise, improve thermal insulation, and enhance security with our specialist services."
        canonicalPath="/"
        type="website"
        keywords={[
          "secondary glazing",
          "noise reduction glazing",
          "thermal insulation windows",
          "acoustic glazing specialist",
          "draught proofing glazing",
          "energy efficient glazing",
          "window insulation UK",
          "soundproof windows",
          "double glazing alternative",
          "glazing specialist London"
        ]}
        includeLocalBusiness={true}
      />
      
      <AIOverviewOptimizer
        config={aiConfig}
        service={{
          name: 'Secondary Glazing Installation',
          description: 'Professional secondary glazing services for homes and businesses across London',
          benefits: [
            'Up to 70% noise reduction',
            '60% improvement in thermal efficiency',
            'Enhanced security',
            'Reduced condensation',
            'UV protection',
            'Preserves original windows'
          ],
          process: [
            'Free consultation and survey',
            'Custom measurements',
            'Professional installation',
            'Quality assurance check'
          ],
          pricing: { min: 200, max: 600 }
        }}
      />
      
      <VoiceSearchOptimizer
        primaryKeywords={['secondary glazing London', 'noise reduction windows', 'thermal insulation']}
        conversationalQueries={[
          {
            question: 'How much does secondary glazing cost?',
            answer: 'Secondary glazing typically costs between £350-450 per window for standard installations. For listed buildings and conservation areas, bespoke solutions range from £500-1,200 per window depending on size, glass specification, and heritage requirements. Factors affecting price include window size and type (sash, casement, bay), glass specification (standard, acoustic, thermal), installation complexity and access, heritage property requirements, and number of windows (volume discounts available). We provide free surveys and detailed quotes with no obligation. Contact us on 020 7060 1572 or request a quote online for a personalised assessment.'
          },
          {
            question: 'What is the best way to reduce window noise?',
            answer: 'Secondary glazing is the most effective noise reduction method available, cutting external sound by up to 80%. The best results come from using 6.8mm or thicker acoustic laminated glass with a 100-150mm air gap between your existing window and the secondary glazing unit. This dual-pane system creates a sound barrier that dramatically reduces traffic noise from busy roads, railway and Underground vibrations, aircraft noise near flight paths, street noise and nightlife activity, and construction and industrial sounds. For maximum noise reduction, we recommend 10.8mm or 12.8mm acoustic glass. The larger the air gap and thicker the acoustic glass, the better the sound insulation.'
          },
          {
            question: 'Can I install secondary glazing in a listed building?',
            answer: 'Yes! Secondary glazing is the preferred solution for listed buildings (Grade I, II*, and II) because it preserves your original historic windows while dramatically improving comfort and energy efficiency. Unlike replacement windows, secondary glazing requires minimal intervention to original features, is fully reversible if ever needed, preserves the external appearance completely, often gains conservation officer approval, and maintains heritage character and authenticity. We specialise in sympathetic installations across Westminster, Kensington & Chelsea, Camden, Richmond, and other heritage-rich London boroughs. We handle all planning permission liaison and provide detailed drawings for Listed Building Consent applications when required.'
          },
          {
            question: 'How effective is secondary glazing for energy saving?',
            answer: 'Secondary glazing can reduce heat loss by up to 75%, significantly lowering your heating bills and improving year-round comfort. The insulating air gap between your original window and the secondary glazing unit creates excellent thermal performance. Energy saving benefits include 15-30% reduction in heating costs (typical), reduced condensation and dampness, more consistent room temperatures, lower carbon footprint, improved EPC ratings for rental properties, and 3-7 year payback period on average. For listed buildings where replacement double glazing isn\'t permitted, secondary glazing is the only way to achieve modern energy efficiency standards while preserving historic windows.'
          },
          {
            question: 'Where can I get secondary glazing in London?',
            answer: 'We provide professional secondary glazing installation across all London boroughs and the wider Home Counties. Central London: Westminster, Kensington & Chelsea, Camden, Islington, City of London. West London: Hammersmith & Fulham, Richmond upon Thames, Ealing, Hounslow. North London: Barnet, Enfield, Haringey, Hampstead, Highgate. East London: Tower Hamlets, Hackney, Newham, Waltham Forest. South London: Wandsworth, Lambeth, Southwark, Greenwich, Lewisham. Home Counties: Surrey, Kent, Essex, Hertfordshire, Buckinghamshire. We specialise in heritage properties throughout London\'s conservation areas including Belgravia, Chelsea, Notting Hill, Marylebone, Mayfair, and Bloomsbury. Call 020 7060 1572 or request a free quote online.'
          }
        ]}
        localContext={{
          city: 'London',
          region: 'Greater London',
          serviceArea: ['London', 'Greater London', 'Central London', 'West London', 'East London', 'North London', 'South London']
        }}
      />
      
      <header>
        <MainNav />
      </header>
      
      <main>
        <Hero />
        <Services />
        <SpecialistServices />
        <HomepageContent />
        <Testimonials />
        <ContactForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;