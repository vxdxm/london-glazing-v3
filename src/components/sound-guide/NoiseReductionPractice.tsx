
import { InfoCard } from "@/components/ui/info-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { DataRow } from "@/components/ui/data-row";

const NoiseReductionPractice = () => {
  const noiseReductionExamples = [
    { source: "Busy road (85 dB)", result: "Reduced to approximately 40 dB - quieter than a library" },
    { source: "Passing train (100 dB)", result: "Reduced to about 55 dB - barely louder than a normal conversation" },
    { source: "Aircraft noise (110 dB)", result: "Brought down to around 65 dB - noticeable but not disruptive" }
  ];

  return (
    <div className="prose max-w-none mb-12">
      <SectionHeading 
        id="noise-reduction-practice"
        title="Noise Reduction in Practice"
      />
      
      <p className="text-gray-600 mb-4">
        When we specify a noise reduction of 45 dB for our premium acoustic glazing solutions, here's what that means in practice:
      </p>

      <InfoCard highlight className="mb-6">
        <div className="space-y-2">
          {noiseReductionExamples.map((example, index) => (
            <DataRow 
              key={index}
              label={example.source}
              value={example.result}
            />
          ))}
        </div>
      </InfoCard>

      <p className="text-gray-600 mb-6">
        The human perception of sound is subjective, but as a rule of thumb, a 10 dB reduction feels like a halving of loudness. 
        This means that our 45 dB reduction solutions can make even the noisiest environments feel dramatically quieter.
      </p>
    </div>
  );
};

export default NoiseReductionPractice;
