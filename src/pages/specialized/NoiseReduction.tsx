
import { MainNav } from "@/components/MainNav";
import NoiseReductionCalculator from "@/components/NoiseReductionCalculator";
import { StandardSEO } from "@/components/specialized/SEOUtils";
import { AIOverviewOptimizer, createPageAIConfig } from "@/components/seo/AIOverviewOptimizer";
import { VoiceSearchOptimizer } from "@/components/seo/VoiceSearchOptimizer";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";

const NoiseReduction = () => {
  const aiConfig = createPageAIConfig(
    'service',
    'Noise Reduction Secondary Glazing - Acoustic Solutions',
    ['acoustic performance', 'sound insulation', 'traffic noise', 'urban noise control', 'dB reduction']
  );
  
  aiConfig.keyFacts = [
    'Reduces noise by up to 80% with proper installation',
    'Effective against traffic, railway, and aircraft noise',
    'Larger air gap provides superior acoustic performance',
    'No external changes to building appearance',
    'Can be installed in listed buildings'
  ];
  
  aiConfig.commonQuestions = [
    {
      question: 'How much noise does secondary glazing block?',
      answer: 'Secondary glazing can reduce noise levels by 70-80%, which translates to a reduction of 45-50 decibels. The exact reduction depends on the air gap size, glass type, and installation quality.'
    },
    {
      question: 'What is the best glass for noise reduction?',
      answer: 'Laminated acoustic glass (6.4mm or 6.8mm) provides the best noise reduction. Using different glass thicknesses in the primary and secondary glazing prevents resonance and blocks a wider range of frequencies.'
    },
    {
      question: 'How does the air gap affect noise reduction?',
      answer: 'A larger air gap (100-150mm) provides significantly better noise reduction than smaller gaps. The air cavity acts as an acoustic buffer, with larger gaps being more effective at blocking low-frequency noise like traffic rumble.'
    }
  ];
  
  return (
    <div className="min-h-screen bg-background">
      <StandardSEO
        title="Noise Reduction Secondary Glazing | Acoustic Solutions London"
        description="Our noise reduction secondary glazing solutions offer exceptional sound insulation with various glass configurations. Reduce external noise by up to 80% with our expert installations."
        canonicalPath="/specialized/noise-reduction"
        imageUrl="/lovable-uploads/6ec1e201-5107-4f52-bb73-2cb26d88efa8.jpg"
        type="article"
        keywords={["noise reduction", "secondary glazing", "acoustic glazing", "sound insulation", "noise pollution", "London glazing", "soundproofing windows"]}
      />
      
      <AIOverviewOptimizer
        config={aiConfig}
        service={{
          name: 'Noise Reduction Secondary Glazing',
          description: 'Professional acoustic secondary glazing to reduce noise by up to 80%',
          benefits: [
            'Up to 80% noise reduction',
            'Improved sleep quality',
            'Enhanced concentration',
            'Increased property value',
            'No planning permission required',
            'Preserves window aesthetics'
          ],
          process: [
            'Free acoustic survey',
            'Custom glass specification',
            'Professional installation',
            'Post-installation testing'
          ],
          pricing: { min: 300, max: 800 }
        }}
        additionalFAQs={aiConfig.commonQuestions.map(faq => ({
          question: faq.question,
          answer: faq.answer,
          relatedQuestions: []
        }))}
      />
      
      <VoiceSearchOptimizer
        primaryKeywords={['noise reduction secondary glazing', 'acoustic windows', 'soundproof glazing']}
        conversationalQueries={[
          {
            question: 'How can I reduce traffic noise in my home?',
            answer: 'Secondary glazing with acoustic laminated glass reduces traffic noise by 70-80% (45-50 decibels). For best results, use 6.4mm laminated glass with a 100-150mm air gap. This blocks low-frequency traffic rumble and high-pitched sounds effectively.'
          },
          {
            question: 'What is the best way to block street noise?',
            answer: 'Install secondary glazing with laminated acoustic glass (6.4mm or 6.8mm) and ensure a minimum 100mm air gap from your primary window. Using different glass thicknesses prevents resonance and blocks a wider frequency range.'
          },
          {
            question: 'Does secondary glazing work for noise reduction?',
            answer: 'Yes, secondary glazing is highly effective, reducing noise by 45-50 decibels - that is a 70-80% reduction in perceived sound. It outperforms double glazing for acoustics because the larger air gap provides superior sound insulation.'
          },
          {
            question: 'How much does acoustic secondary glazing cost?',
            answer: 'Acoustic secondary glazing costs £300-£800 per window, depending on size and glass specification. Laminated acoustic glass adds approximately £50-£100 per window compared to standard glass but provides significantly better noise reduction.'
          },
          {
            question: 'Can I install secondary glazing in a listed building?',
            answer: 'Yes, secondary glazing is the preferred solution for listed buildings as it is installed internally and does not alter the external appearance. Conservation officers often recommend it as a reversible, sympathetic improvement that protects original windows.'
          }
        ]}
        localContext={{
          city: 'London',
          region: 'Greater London',
          serviceArea: ['London', 'Greater London', 'South East England']
        }}
      />
      
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <BreadcrumbNav />
        <h1 className="text-4xl font-bold mb-8">Noise Reduction Secondary Glazing</h1>
        
        <div className="prose max-w-none mb-12">
          <p className="text-lg mb-6">
            Our noise reduction secondary glazing solutions offer exceptional sound insulation using various glass thicknesses 
            and configurations to meet your specific needs. From residential properties to commercial buildings, we provide 
            tailored solutions to combat noise pollution effectively.
          </p>
        </div>

        <div className="mb-12" id="calculator">
          <NoiseReductionCalculator />
        </div>

        <div className="bg-secondary/60 p-5 rounded-lg mt-16">
          <h2 className="text-xl font-semibold mb-2 text-primary">Learn More: Secondary Glazing Noise Reduction</h2>
          <p className="text-gray-700 mb-2">
            Want to understand how secondary glazing can cut outside noise by up to 80%? Discover detailed acoustic glass options, air gap strategies, and solutions for listed buildings on our dedicated page.
          </p>
          <a
            href="/secondary-glazing-noise-reduction"
            className="inline-block mt-2 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors"
          >
            Explore Secondary Glazing Noise Reduction
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NoiseReduction;
