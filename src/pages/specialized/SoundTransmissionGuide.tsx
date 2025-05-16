
import React from "react";
import SoundGuideLayout from "@/components/sound-guide/SoundGuideLayout";
import SoundGuideHeader from "@/components/sound-guide/SoundGuideHeader";
import SoundGuideContent from "@/components/sound-guide/SoundGuideContent";

const SoundTransmissionGuide = () => {
  return (
    <SoundGuideLayout>
      <SoundGuideHeader />
      <SoundGuideContent />
      <div className="container max-w-2xl mx-auto mt-20 mb-16">
        <div className="bg-secondary/60 p-5 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-primary">Next: Discover Practical Noise Reduction!</h2>
          <p className="text-gray-700 mb-2">
            For a real-world look at how secondary glazing technology cuts outside noise by up to 80%, see glass and air gap choices, performance stats, and tips for listed buildings.
          </p>
          <a
            href="/secondary-glazing-noise-reduction"
            className="inline-block mt-2 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors"
          >
            Visit Secondary Glazing Noise Reduction &rarr;
          </a>
        </div>
      </div>
    </SoundGuideLayout>
  );
};

export default SoundTransmissionGuide;
