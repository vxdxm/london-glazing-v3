import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";
import { MainNav } from "@/components/MainNav";
import { Hero } from "@/components/Hero";
import { HomepageIntro } from "@/components/HomepageIntro";
import { LondonExpertise } from "@/components/LondonExpertise";
import { LondonBoroughsGrid } from "@/components/LondonBoroughsGrid";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";
import { AIOverviewOptimizer, createPageAIConfig } from "@/components/seo/AIOverviewOptimizer";
import { VoiceSearchOptimizer } from "@/components/seo/VoiceSearchOptimizer";
import { ComprehensiveSchema } from "@/components/seo/ComprehensiveSchema";

// Lazy load below-fold components for better initial load performance
const Services = lazy(() => import("@/components/Services").then(m => ({ default: m.Services })));
const SpecialistServices = lazy(() => import("@/components/SpecialistServices").then(m => ({ default: m.SpecialistServices })));
const HomepageContent = lazy(() => import("@/components/HomepageContent").then(m => ({ default: m.HomepageContent })));
const ContactForm = lazy(() => import("@/components/ContactForm").then(m => ({ default: m.ContactForm })));
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));
const Testimonials = lazy(() => import("@/components/Testimonials").then(m => ({ default: m.Testimonials })));
const TrustBadges = lazy(() => import("@/components/TrustBadges").then(m => ({ default: m.TrustBadges })));
const SisterServicePromo = lazy(() => import("@/components/SisterServicePromo").then(m => ({ default: m.SisterServicePromo })));
const FeaturedContent = lazy(() => import("@/components/FeaturedContent").then(m => ({ default: m.FeaturedContent })));
const ExpertResourcesSection = lazy(() => import("@/components/ExpertResourcesSection").then(m => ({ default: m.ExpertResourcesSection })));
const BeforeAfterSlider = lazy(() => import("@/components/BeforeAfterSlider").then(m => ({ default: m.BeforeAfterSlider })));

// Loading fallback for lazy components
const SectionLoader = () => (
  <div className="w-full py-8 md:py-16 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

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
        title="Secondary Glazing Specialist | London's Leading Heritage & Listed Building Experts"
        description="Professional secondary glazing installers in London. Specialists in Grade I & II listed buildings and conservation areas. Achieve 54dB noise reduction and 60% better heat retention with our discreet, bespoke installations."
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
      
      <ComprehensiveSchema
        pageName="Secondary Glazing Specialist London"
        pageDescription="Professional secondary glazing installers in London. Specialists in Grade I & II listed buildings and conservation areas."
        serviceName="Secondary Glazing Installation"
        serviceDescription="Professional secondary glazing services for listed buildings, conservation areas, and heritage properties. Reduce noise by up to 80%, improve thermal efficiency, and preserve your property's character."
      />
      
      {/* LocalBusiness + FAQPage + HomeImprovementBusiness Schema */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Secondary Glazing Specialist",
            "description": "Professional secondary glazing installers in London. Specialists in Grade I & II listed buildings and conservation areas. Achieve 54dB noise reduction and 60% better heat retention.",
            "url": "https://secondaryglazingspecialist.com",
            "logo": "https://secondaryglazingspecialist.com/lovable-uploads/b39446b8-e7b5-4000-ac4b-a7a691a5bb14.png",
            "image": "https://secondaryglazingspecialist.com/lovable-uploads/675b8861-030a-48d3-adbe-f9706ec54947.png",
            "telephone": "+442039293960",
            "email": "info@secondaryglazingspecialist.com",
            "priceRange": "££",
            "currenciesAccepted": "GBP",
            "paymentAccepted": "Cash, Credit Card, Bank Transfer",
            "openingHours": ["Mo-Fr 08:00-18:00", "Sa 09:00-16:00"],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Arch 141, MacFarlane Road",
              "addressLocality": "London",
              "addressRegion": "Greater London",
              "postalCode": "W12 7LA",
              "addressCountry": "GB"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 51.5074,
              "longitude": -0.1278
            },
            "areaServed": [
              { "@type": "City", "name": "London" },
              { "@type": "AdministrativeArea", "name": "Greater London" },
              { "@type": "AdministrativeArea", "name": "Surrey" },
              { "@type": "AdministrativeArea", "name": "Kent" },
              { "@type": "AdministrativeArea", "name": "Hertfordshire" }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Secondary Glazing Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Listed Buildings Secondary Glazing", "url": "https://secondaryglazingspecialist.com/listed-buildings-secondary-glazing" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Soundproof Secondary Glazing", "url": "https://secondaryglazingspecialist.com/noise-reduction-secondary-glazing" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Thermal Insulation Glazing", "url": "https://secondaryglazingspecialist.com/thermal-insulation-secondary-glazing" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Conservation Area Solutions", "url": "https://secondaryglazingspecialist.com/conservation-areas-secondary-glazing" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Secondary Glazing", "url": "https://secondaryglazingspecialist.com/commercial" } }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127",
              "bestRating": "5"
            },
            "sameAs": [
              "https://www.instagram.com/secondaryglazinglondon/",
              "https://www.linkedin.com/in/secondary-glazing-specialist-7500653a2/",
              "https://x.com/Sec0ndaryGlazin",
              "https://web.facebook.com/profile.php?id=61585744672659"
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is secondary glazing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Secondary glazing is an internal window system installed behind existing windows to improve thermal insulation, reduce noise by up to 80%, and enhance security without altering the original window appearance. It's ideal for listed buildings and conservation areas."
                }
              },
              {
                "@type": "Question",
                "name": "How much does secondary glazing cost in London?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Secondary glazing typically costs between £350-450 per window for standard installations. For listed buildings and conservation areas, bespoke solutions range from £500-1,200 per window depending on size, glass specification, and heritage requirements. We provide free surveys and quotes."
                }
              },
              {
                "@type": "Question",
                "name": "Does secondary glazing reduce noise effectively?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, secondary glazing with 10.8mm Stadip Silence acoustic laminate glass can reduce external noise by up to 54 decibels, making it highly effective for homes near busy roads, railways, or flight paths in London."
                }
              },
              {
                "@type": "Question",
                "name": "Can I install secondary glazing in a listed building?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, secondary glazing is the preferred solution for Grade I, II*, and II listed buildings because it preserves original windows, is fully reversible, and doesn't alter the external appearance. We handle all planning permission liaison and Listed Building Consent applications."
                }
              },
              {
                "@type": "Question",
                "name": "What is 10.8mm acoustic laminate glass?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "10.8mm Stadip Silence is a specialist acoustic laminate glass comprising two glass panes bonded with a PVB acoustic interlayer. Combined with a 100mm air gap, it delivers up to 54dB noise reduction—ideal for London properties near Heathrow flight paths, railway lines, and busy roads."
                }
              }
            ]
          })}
        </script>
      </Helmet>
      
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
        {/* Critical above-fold content - loads immediately, no Suspense wrapper for SSG crawlability */}
        <Hero />
        <LondonExpertise />
        <LondonBoroughsGrid />
        <HomepageIntro />
        
        {/* Below-fold content - wrapped in Suspense with SSG-friendly noscript fallbacks */}
        <Suspense fallback={<noscript><p>Loading specialist services...</p></noscript>}>
          <SisterServicePromo />
        </Suspense>
        <Suspense fallback={<noscript><p>Loading services...</p></noscript>}>
          <Services />
        </Suspense>
        <Suspense fallback={<noscript><p>Loading specialist services...</p></noscript>}>
          <SpecialistServices />
        </Suspense>
        <Suspense fallback={<noscript><p>Loading content...</p></noscript>}>
          <HomepageContent />
        </Suspense>
        <Suspense fallback={<noscript><p>Loading trust badges...</p></noscript>}>
          <TrustBadges />
        </Suspense>
        <Suspense fallback={<noscript><p>Loading testimonials...</p></noscript>}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<noscript><p>Loading featured content...</p></noscript>}>
          <FeaturedContent />
        </Suspense>
        <Suspense fallback={<noscript><p>Loading resources...</p></noscript>}>
          <ExpertResourcesSection />
        </Suspense>
        <Suspense fallback={<noscript><p>Loading gallery...</p></noscript>}>
          <BeforeAfterSlider />
        </Suspense>
        <Suspense fallback={<noscript><p>Loading contact form...</p></noscript>}>
          <ContactForm />
        </Suspense>
      </main>
      
      <Suspense fallback={<noscript><p>Loading footer...</p></noscript>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;