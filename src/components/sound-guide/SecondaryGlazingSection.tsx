
import { Card } from "@/components/ui/card";

const SecondaryGlazingSection = () => {
  return (
    <div>
      <h2 id="secondary-glazing-noise-reduction" className="text-3xl font-semibold mb-6">How Secondary Glazing Reduces Noise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6 bg-secondary/30">
          <h3 className="text-xl font-semibold mb-4">The Science Behind Acoustic Secondary Glazing</h3>
          <p className="text-gray-600 mb-4">
            Secondary glazing creates a highly effective sound barrier through multiple mechanisms:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-3">
            <li><span className="font-medium">Air gap principle:</span> The substantial air gap (typically 100-200mm) between primary and secondary glazing disrupts sound wave transmission</li>
            <li><span className="font-medium">Mass-air-mass resonance:</span> The combination of two glass panes with an air space creates a system that's difficult for sound to penetrate</li>
            <li><span className="font-medium">Acoustic decoupling:</span> Independent frames prevent vibration transfer between panes</li>
            <li><span className="font-medium">Laminated glass:</span> Special acoustic laminated glass incorporates sound-damping PVB interlayers</li>
          </ul>
        </Card>
        <div>
          <p className="text-gray-600 mb-4">
            Secondary glazing is particularly effective at reducing noise because it adds another barrier with 
            a significant air gap between the panes. This air gap is crucial - it's much more effective than 
            the narrow gap in double glazing.
          </p>
          <p className="text-gray-600 mb-4">
            When properly installed with acoustic glass, secondary glazing can reduce noise levels by up to 
            45-48 dB, which means that loud external noise like heavy traffic or trains would be reduced to a 
            whisper-like level inside your property.
          </p>
          <div className="bg-blue-50 p-4 rounded-md border border-blue-100 mt-6">
            <h4 className="font-semibold text-blue-800 mb-2">Technical Insight</h4>
            <p className="text-blue-700 text-sm">
              A 10 dB reduction in sound equates to a perceived 50% reduction in loudness to human ears. 
              This means our systems providing 45-48 dB reduction can make even the loudest urban environments 
              feel peaceful and quiet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryGlazingSection;
