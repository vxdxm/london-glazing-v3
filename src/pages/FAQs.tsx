import { MainNav } from "@/components/MainNav";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";
import { AIOverviewOptimizer, createPageAIConfig } from "@/components/seo/AIOverviewOptimizer";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { createFAQSchema } from "@/utils/faq-schema";
import { generateAIOptimizedSchema, contentTemplates, speakableConfigs } from "@/utils/ai-content-optimizer";
import { VoiceSearchOptimizer } from "@/components/seo/VoiceSearchOptimizer";
import { createLocalBusinessSchema, createServiceSchema } from "@/utils/structuredData";

const FAQs = () => {
  const faqs = [
    {
      question: "What is secondary glazing?",
      answer: "Secondary glazing involves installing a supplementary internal window behind your existing windows. This creates an insulating layer of air that improves thermal efficiency, reduces noise by up to 80%, and enhances security without altering the external appearance of your property. It's the ideal solution for listed buildings and conservation areas where replacing original windows isn't permitted."
    },
    {
      question: "How effective is secondary glazing at reducing noise?",
      answer: "Secondary glazing is highly effective at reducing noise, capable of blocking up to 80% of external sound (45-50 decibels) when properly installed with acoustic glass. The air gap between the primary and secondary glazing acts as an excellent sound barrier. For maximum noise reduction, we recommend 6.8mm or thicker acoustic laminated glass with a 100-150mm air gap."
    },
    {
      question: "Will secondary glazing affect the appearance of my property?",
      answer: "Secondary glazing is installed on the room side of your existing windows, so it doesn't affect the external appearance of your property. This makes it particularly suitable for listed buildings and conservation areas where maintaining original character is essential. Our sympathetic installations are designed to be as discreet as possible."
    },
    {
      question: "How much can I save on heating costs?",
      answer: "Secondary glazing can reduce heat loss through windows by up to 75%, potentially saving 15-30% on heating bills. The exact savings depend on your current window efficiency, property size, and heating usage patterns. Most homeowners see a return on investment within 3-7 years through reduced energy costs."
    },
    {
      question: "Is secondary glazing difficult to maintain?",
      answer: "No, secondary glazing is relatively easy to maintain. The panels can be easily cleaned with standard glass cleaner, and many systems feature removable or hinged panels for convenient access to clean both sides. Regular cleaning and occasional checks of seals and fixings are typically all that's required. We recommend annual inspections to ensure optimal performance."
    },
    {
      question: "Can I open my windows with secondary glazing installed?",
      answer: "Yes, secondary glazing systems are designed to allow full access to your original windows. Many styles are available including horizontal sliding, vertical sliding, hinged, tilt-in, and lift-out options. We'll recommend the best operating style based on your window type and how you use the room."
    },
    {
      question: "Is planning permission required for secondary glazing?",
      answer: "Generally, planning permission is not required for secondary glazing as it's considered an internal alteration that doesn't affect the external appearance. However, if you live in a Grade I, II*, or II listed building, you may need Listed Building Consent. We handle all planning permission liaison and can advise on your specific requirements during your free survey."
    },
    {
      question: "How long does installation take?",
      answer: "Installation typically takes 1-2 days for an average home with 5-10 windows. Each window takes approximately 1-2 hours depending on size and complexity. Larger projects or properties with unusual window shapes may take 3-5 days. We work efficiently to minimise disruption and keep your home clean throughout."
    },
    {
      question: "Do I need to be home during installation?",
      answer: "Yes, we require someone over 18 to be present during installation for access and to sign off the completed work. However, you don't need to supervise - our installers work independently and will call you if any decisions are needed. Many customers work from home or arrange for a family member to be present."
    },
    {
      question: "What's your process from quote to completion?",
      answer: "Our process is straightforward: 1) Free survey - we measure your windows and discuss your requirements. 2) Detailed quote - you receive a comprehensive written quote within 48 hours. 3) Manufacturing - once approved, your bespoke units are manufactured (typically 2-3 weeks). 4) Installation - our expert team installs your secondary glazing. 5) Final inspection - we ensure everything works perfectly and answer any questions."
    },
    {
      question: "Do you offer guarantees?",
      answer: "Yes, we provide comprehensive guarantees on all installations. Our standard package includes a 10-year guarantee on frames and hardware, plus manufacturer-backed guarantees on glass units. We also offer a 12-month installation workmanship guarantee. All guarantees are fully transferable if you sell your property."
    },
    {
      question: "Can secondary glazing be painted?",
      answer: "Yes, aluminium secondary glazing frames can be powder-coated in virtually any RAL colour to match your existing décor or window frames. We offer a wide range of standard colours including white, brown, black, and cream, plus custom colour matching for heritage properties. Timber secondary glazing can also be painted or stained to match existing woodwork."
    },
    {
      question: "How much does secondary glazing cost?",
      answer: "Secondary glazing typically costs between £350-450 per window for standard installations. For listed buildings and conservation areas, bespoke solutions range from £500-1,200 per window depending on size, glass specification, and heritage requirements. We provide free surveys and detailed quotes with no obligation. Volume discounts are available for larger projects."
    }
  ];

  const faqSchema = createFAQSchema(faqs, {
    includeAIOptimization: true,
    speakableSelectors: [".faq-question", ".faq-answer", "h1", "h2"],
    audience: "property owners seeking glazing information",
    language: "en-GB"
  });

  // Enhanced AI-optimized schema
  const aiOptimizedSchema = generateAIOptimizedSchema(
    contentTemplates.faq,
    speakableConfigs.faq,
    faqSchema
  );
  
  // AI Overview configuration
  const aiConfig = createPageAIConfig(
    'informational',
    'Secondary Glazing FAQs - Expert Answers',
    ['FAQ', 'installation guide', 'cost information', 'noise reduction', 'thermal efficiency']
  );
  
  aiConfig.keyFacts = [
    'Secondary glazing reduces noise by up to 80%',
    'No planning permission required for most installations',
    'Can save up to 20% on heating bills',
    'Installation typically takes 1-2 days',
    'Suitable for listed buildings and conservation areas'
  ];
  
  aiConfig.commonQuestions = faqs.map(faq => ({
    question: faq.question,
    answer: faq.answer
  }));

  return (
    <div className="min-h-screen bg-background">
      <EnhancedSEO
        title="Secondary Glazing FAQs | Expert Answers to Common Questions"
        description="Get expert answers to frequently asked questions about secondary glazing. Learn about installation, costs, benefits, and maintenance from London's leading glazing specialists."
        canonicalPath="/faqs"
        type="article"
        keywords={[
          "secondary glazing FAQ",
          "glazing questions answered",
          "secondary glazing costs",
          "window glazing installation",
          "glazing maintenance",
          "noise reduction windows"
        ]}
        serviceName="Secondary Glazing Consultation"
      />
      
      <AIOverviewOptimizer
        config={aiConfig}
        additionalFAQs={faqs.map(faq => ({
          question: faq.question,
          answer: faq.answer,
          relatedQuestions: []
        }))}
      />
      
      <Helmet>
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(aiOptimizedSchema)}
        </script>
        
        {/* LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify(createLocalBusinessSchema())}
        </script>
        
        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify(createServiceSchema(
            "Secondary Glazing Installation & Consultation",
            "Expert secondary glazing services for listed buildings, conservation areas, and heritage properties across London. Reduce noise by up to 80%, improve thermal efficiency, and preserve your property's character."
          ))}
        </script>
        
        {/* AggregateRating Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Secondary Glazing Services",
            "description": "Professional secondary glazing installation for London properties",
            "brand": {
              "@type": "Brand",
              "name": "Secondary Glazing Specialist"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127",
              "bestRating": "5",
              "worstRating": "1"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "GBP",
              "lowPrice": "350",
              "highPrice": "1200",
              "offerCount": "6"
            }
          })}
        </script>
        
        {/* Sample Reviews Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": {
              "@type": "LocalBusiness",
              "name": "Secondary Glazing Specialist"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "James H."
            },
            "reviewBody": "Excellent service from start to finish. The secondary glazing has dramatically reduced traffic noise in our Victorian terrace. Highly recommended for anyone in a conservation area."
          })}
        </script>
      </Helmet>
      
      <VoiceSearchOptimizer 
        primaryKeywords={["secondary glazing", "window glazing", "noise reduction"]}
        conversationalQueries={[
          {
            question: "What is secondary glazing?",
            answer: "Secondary glazing is an internal window system installed behind your existing windows. It creates an insulating air gap that reduces noise by up to 80%, improves thermal efficiency, and enhances security without altering the external appearance."
          },
          {
            question: "How much does secondary glazing cost?",
            answer: "Secondary glazing typically costs between £200-£600 per window in London, depending on window size, frame material, and glass specification. Larger windows and acoustic glass options cost more. We offer free surveys and quotes."
          },
          {
            question: "Does secondary glazing reduce noise?",
            answer: "Yes, secondary glazing is highly effective for noise reduction, blocking up to 80% of external noise (45-50 decibels). The air gap between panes acts as an acoustic buffer, making it ideal for homes near busy roads or flight paths."
          },
          {
            question: "Can I get secondary glazing in London?",
            answer: "Yes, we install secondary glazing throughout London and Greater London. Our service covers Central, West, East, North, and South London, with free surveys available for all residential and commercial properties."
          },
          {
            question: "How long does secondary glazing installation take?",
            answer: "Installation typically takes 1-2 days for an average home with 5-10 windows. Each window takes approximately 1-2 hours. We work efficiently to minimise disruption and complete most projects within a single day."
          }
        ]}
        localContext={{
          city: "London",
          region: "Greater London",
          serviceArea: ["London", "Greater London", "UK"]
        }}
      />
      
      <MainNav />
      <div className="container mx-auto px-4 py-16 faq-content" itemScope itemType="https://schema.org/FAQPage">
        <h1 
          className="text-4xl font-bold mb-8" 
          itemProp="name"
          data-ai-speakable="true"
        >
          Frequently Asked Questions
        </h1>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-white rounded-lg shadow-sm"
                itemScope 
                itemType="https://schema.org/Question"
              >
                <AccordionTrigger 
                  className="px-6 py-4 hover:no-underline faq-question"
                  itemProp="name"
                  data-ai-speakable="true"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent 
                  className="px-6 pb-4 faq-answer"
                  itemScope 
                  itemType="https://schema.org/Answer"
                  itemProp="acceptedAnswer"
                  data-ai-speakable="true"
                >
                  <div itemProp="text">{faq.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQs;
