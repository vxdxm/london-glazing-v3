
import React from "react";
import SoundTravelSection from "@/components/sound-guide/SoundTravelSection";
import SecondaryGlazingSection from "@/components/sound-guide/SecondaryGlazingSection";
import DecibelsCard from "@/components/sound-guide/DecibelsCard";
import STCCard from "@/components/sound-guide/STCCard";
import NoiseSourcesTable from "@/components/sound-guide/NoiseSourcesTable";
import AcousticSolutions from "@/components/sound-guide/AcousticSolutions";
import NoiseReductionPractice from "@/components/sound-guide/NoiseReductionPractice";

const SoundGuideContent = () => {
  return (
    <div className="space-y-16">
      <SoundTravelSection />
      <SecondaryGlazingSection />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <DecibelsCard />
        <STCCard />
      </div>
      
      <NoiseSourcesTable />
      <AcousticSolutions />
      <NoiseReductionPractice />
    </div>
  );
};

export default SoundGuideContent;
