import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Images } from "lucide-react";

const SoundTravelSection = () => {
  return (
    <div>
      <h2 id="how-sound-travels" className="text-3xl font-semibold mb-6">How Sound Travels Through Windows</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-600 mb-4">
            Sound travels as a wave through air, causing vibrations when it hits a surface like a window. 
            Single-pane windows offer minimal resistance to these sound waves, allowing them to pass through 
            with little reduction in intensity.
          </p>
          <p className="text-gray-600 mb-4">
            When sound waves hit a window, three things happen:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li>Some sound is reflected back</li>
            <li>Some sound is absorbed by the glass</li>
            <li>Some sound passes through to the other side</li>
          </ul>
          <p className="text-gray-600">
            Standard windows are particularly vulnerable to sound transmission due to their relatively thin 
            glass and the direct pathway they provide between outside and inside environments.
          </p>
          
          <div className="mt-6 rounded-lg overflow-hidden">
            <AspectRatio ratio={4/3}>
              <img 
                src="/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg" 
                alt="Sound waves traveling through windows" 
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
        </div>
        <Card className="p-6 bg-secondary/30">
          <div className="mb-4">
            <AspectRatio ratio={16/9}>
              <img 
                src="/lovable-uploads/9bfb006c-0e46-48b3-a8d6-9e00277a2bcd.png" 
                alt="Sash windows with secondary glazing installed" 
                className="w-full h-full object-cover rounded-lg"
              />
            </AspectRatio>
          </div>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Images className="w-5 h-5 text-primary" /> 
            Factors Affecting Sound Transmission
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-3">
            <li><span className="font-medium">Glass mass:</span> Heavier, thicker glass absorbs more sound energy</li>
            <li><span className="font-medium">Air gaps:</span> Larger gaps between panes disrupt sound wave continuity</li>
            <li><span className="font-medium">Different glass thicknesses:</span> Using varying thicknesses prevents resonance</li>
            <li><span className="font-medium">Lamination:</span> Acoustic interlayers dampen vibrations</li>
            <li><span className="font-medium">Edge sealing:</span> Proper sealing prevents sound leakage around frames</li>
            <li><span className="font-medium">Frame quality:</span> Solid frames transmit less vibration</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default SoundTravelSection;
