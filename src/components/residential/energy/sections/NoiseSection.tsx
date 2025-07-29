
import { SectionHeading } from "@/components/ui/section-heading";

export const NoiseSection = () => {
  return (
    <div className="mb-12">
      <SectionHeading title="Noise Reduction Benefits" />
      <h3 className="text-2xl font-semibold mb-4">How Secondary Glazing Reduces Noise</h3>
      <p className="text-gray-600 mb-6">
        Another substantial advantage of secondary glazing is its ability to significantly reduce external noise. The air gap created by the two layers of glazing acts as an effective sound barrier, reducing noise pollution from outside sources such as traffic, construction, or urban environments. This is especially beneficial for homes located in busy areas.
      </p>
      <p className="text-gray-600 mb-8">
        Studies have shown that secondary glazing can reduce noise levels by up to 80%, creating a more serene indoor environment. This improvement in sound insulation enhances the quality of life for residents, making homes more comfortable and conducive to relaxation and productivity.
      </p>

      <h3 className="text-2xl font-semibold mb-4">Case Studies and Evidence</h3>
      <p className="text-gray-600 mb-6">
        Numerous case studies highlight the effectiveness of secondary glazing in noise reduction. For example, a residential building in London installed secondary glazing in its units facing a major road. Residents reported a marked decrease in noise disturbances, leading to better sleep quality and overall satisfaction with their living conditions.
      </p>
      <p className="text-gray-600 mb-8">
        Another study conducted in urban settings indicated that properties with secondary glazing experienced a profound improvement in acoustical comfort, which not only enhanced the living experience but also increased property values due to the appealing quietness.
      </p>

      <h3 className="text-2xl font-semibold mb-4">Location-Specific Noise Solutions</h3>
      <p className="text-gray-600 mb-6">
        Different areas of London face unique acoustic challenges. Our specialist location-based solutions address specific noise problems:
      </p>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-semibold mb-3">
            <a href="/locations/clapham-busy-roads" className="text-primary hover:underline">
              Traffic Noise Solutions - Clapham
            </a>
          </h4>
          <p className="text-gray-600 text-sm">
            Specialist solutions for homes near A3, Clapham High Street and busy bus routes. Reduce persistent traffic noise by up to 30dB.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-semibold mb-3">
            <a href="/locations/heathrow-aircraft" className="text-primary hover:underline">
              Aircraft Noise - Heathrow Area
            </a>
          </h4>
          <p className="text-gray-600 text-sm">
            Advanced acoustic glazing for properties affected by aircraft noise. Specialized solutions for high-frequency jet noise.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-semibold mb-3">
            <a href="/locations/shoreditch-urban-noise" className="text-primary hover:underline">
              Urban Noise - Shoreditch
            </a>
          </h4>
          <p className="text-gray-600 text-sm">
            Comprehensive solutions for 24/7 urban environments. Address sirens, traffic, construction and nightlife noise.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-semibold mb-3">
            <a href="/locations/kings-cross-train-noise" className="text-primary hover:underline">
              Railway Noise - King's Cross
            </a>
          </h4>
          <p className="text-gray-600 text-sm">
            Railway-specific noise reduction for properties near train stations. Combat both airborne and structural noise transmission.
          </p>
        </div>
      </div>
    </div>
  );
};
