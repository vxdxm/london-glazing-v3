import { MainNav } from "@/components/MainNav";
import { Helmet } from "react-helmet";
import DecibelsCard from "@/components/sound-guide/DecibelsCard";
import STCCard from "@/components/sound-guide/STCCard";
import SoundTravelSection from "@/components/sound-guide/SoundTravelSection";
import SecondaryGlazingSection from "@/components/sound-guide/SecondaryGlazingSection";
import NoiseSourcesTable from "@/components/sound-guide/NoiseSourcesTable";
import NoiseReductionPractice from "@/components/sound-guide/NoiseReductionPractice";
import AcousticSolutions from "@/components/sound-guide/AcousticSolutions";
import WhatsAppButton from "@/components/WhatsAppButton";
import GetQuoteButton from "@/components/GetQuoteButton";

const SoundTransmissionGuide = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Understanding Sound Transmission & Decibels | Acoustic Glazing Guide</title>
        <meta 
          name="description" 
          content="Expert guide on sound transmission, decibel measurements, and how secondary glazing reduces noise by up to 80%. Learn how to create a quieter home environment." 
        />
        <meta 
          name="keywords" 
          content="decibels, sound transmission, acoustic glazing, dB scale, noise reduction, sound insulation, secondary glazing, London noise reduction, sound proof windows" 
        />
        <meta property="og:title" content="Understanding Sound Transmission & Decibels | Acoustic Glazing Guide" />
        <meta 
          property="og:description" 
          content="Comprehensive guide to understanding sound measurement, transmission, and how secondary glazing can reduce noise by up to 80%. Expert advice from London's secondary glazing specialists." 
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://secondaryglazingspecialist.com/specialized/sound-transmission-guide" />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/specialized/sound-transmission-guide" />
      </Helmet>
      
      <MainNav />
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-2">Understanding Sound Transmission & Acoustic Glazing Solutions</h1>
        <p className="text-xl text-gray-600 mb-8">A comprehensive guide to decibels, sound levels, and effective noise reduction techniques</p>
        
        <div className="prose max-w-none mb-12">
          <p className="text-lg mb-6">
            Sound reduction is measured in decibels (dB), but understanding what this means and how it applies to 
            acoustic glazing requires some background knowledge. This guide explains the key concepts behind 
            sound measurement, transmission, and how secondary glazing works to create quieter living and working spaces.
          </p>
          
          <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 mb-8">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">Did you know?</h2>
            <p className="text-blue-700">
              High-quality acoustic secondary glazing can reduce external noise by up to 80% (48dB), transforming even the noisiest urban environments into peaceful, quiet spaces.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <DecibelsCard />
          <STCCard />
        </div>

        <div className="space-y-12 mb-12">
          <SoundTravelSection />
          <SecondaryGlazingSection />
        </div>

        <NoiseSourcesTable />
        <NoiseReductionPractice />
        <AcousticSolutions />
      </div>
      
      <WhatsAppButton />
      <GetQuoteButton />
    </div>
  );
};

export default SoundTransmissionGuide;
