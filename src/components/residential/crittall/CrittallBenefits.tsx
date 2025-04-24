import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Thermometer, VolumeX } from "lucide-react";
export const CrittallBenefits = () => {
  return <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="mb-6">
              <img src="/lovable-uploads/f3eb05a4-a9c1-49c4-bc8a-81cb8ef23da9.png" alt="Thermal efficiency demonstration on Crittall window" className="w-full h-48 object-cover rounded-lg mb-4" />
            </div>
            <Thermometer className="w-12 h-12 text-primary mb-4" />
            <CardTitle>Energy Efficiency</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Secondary glazing creates an insulating air gap between panes, reducing heat loss by up to 50%. 
              This setup significantly improves thermal efficiency, helping maintain comfortable indoor 
              temperatures while reducing heating costs.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="mb-6">
              <img alt="Noise reduction visualization for secondary glazing" src="/lovable-uploads/ba2dcf94-13c7-4eef-bad6-1d3f75576e56.jpg" className="w-full h-48 rounded-lg mb-4 object-fill" />
            </div>
            <VolumeX className="w-12 h-12 text-primary mb-4" />
            <CardTitle>Noise Reduction</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              The double-glazed setup with an air gap significantly reduces sound transmission, 
              making homes quieter and more peaceful. This is particularly beneficial for properties 
              in urban areas or near busy streets.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>;
};