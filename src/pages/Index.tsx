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
            answer: 'Secondary glazing costs £200-£600 per window in London, varying by size, glass type, and frame material. Standard 4mm glass is most affordable, while acoustic laminated glass costs more. We provide free no-obligation quotes.'
          },
          {
            question: 'What is the best way to reduce window noise?',
            answer: 'Secondary glazing is the most effective method to reduce window noise, cutting external sound by up to 80%. For optimal results, use laminated acoustic glass (6.4mm) with a 100-150mm air gap from your existing window.'
          },
          {
            question: 'Can I install secondary glazing in a listed building?',
            answer: 'Yes, secondary glazing is ideal for listed buildings as it installs internally without altering the external appearance. It is generally permitted without planning consent and is often recommended by conservation officers as a sympathetic improvement.'
          },
          {
            question: 'How effective is secondary glazing for energy saving?',
            answer: 'Secondary glazing improves thermal insulation by up to 60%, potentially reducing heating bills by 20%. It creates a thermal barrier that minimises heat loss, reduces draughts, and helps eliminate condensation on original windows.'
          },
          {
            question: 'Where can I get secondary glazing in London?',
            answer: 'We provide secondary glazing installation across all London boroughs including Westminster, Kensington, Camden, Islington, and throughout Greater London. Contact us for a free survey at your property.'
          }
        ]}
        localContext={{
          city: 'London',
          region: 'Greater London',
          serviceArea: ['London', 'Greater London', 'Central London', 'West London', 'East London', 'North London', 'South London']
        }}
      />
      
      <MainNav />
      <Hero />
      <Services />
      <SpecialistServices />
      <HomepageContent />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;