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
import { Helmet } from "react-helmet";
import { createFAQSchema } from "@/utils/faq-schema";
import { generateAIOptimizedSchema, contentTemplates, speakableConfigs } from "@/utils/ai-content-optimizer";
import { VoiceSearchOptimizer } from "@/components/seo/VoiceSearchOptimizer";

const FAQs = () => {
  const faqs = [
    {
      question: "What is secondary glazing?",
      answer: "Secondary glazing involves installing a supplementary internal window behind your existing windows. This creates an insulating layer of air that improves thermal efficiency, reduces noise, and enhances security without altering the external appearance of your property."
    },
    {
      question: "How effective is secondary glazing at reducing noise?",
      answer: "Secondary glazing is highly effective at reducing noise, capable of reducing external noise by up to 80% when properly installed. The air gap between the primary and secondary glazing acts as an excellent sound barrier."
    },
    {
      question: "Will secondary glazing affect the appearance of my property?",
      answer: "Secondary glazing is installed on the room side of your existing windows, so it doesn't affect the external appearance of your property. This makes it particularly suitable for listed buildings and conservation areas."
    },
    {
      question: "How much can I save on heating costs?",
      answer: "Secondary glazing can significantly reduce heat loss through windows, potentially saving up to 20% on heating bills. The exact savings depend on your current window efficiency and heating usage patterns."
    },
    {
      question: "Is secondary glazing difficult to maintain?",
      answer: "No, secondary glazing is relatively easy to maintain. The panels can be easily cleaned and many systems feature removable panels for convenient access. Regular cleaning and occasional checks of seals and fixings are typically all that's required."
    },
    {
      question: "Can I open my windows with secondary glazing installed?",
      answer: "Yes, secondary glazing systems are designed to allow access to your original windows. Many styles are available, including sliding, hinged, and lift-out options that can be easily operated when you need to open your windows."
    },
    {
      question: "Is planning permission required for secondary glazing?",
      answer: "Generally, planning permission is not required for secondary glazing as it's considered an internal alteration. However, if you live in a listed building, you should check with your local authority before proceeding."
    },
    {
      question: "How long does installation take?",
      answer: "Installation time varies depending on the number and size of windows, but typically a professional team can install secondary glazing in an average home within 1-2 days with minimal disruption."
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
        <script type="application/ld+json">
          {JSON.stringify(aiOptimizedSchema)}
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
