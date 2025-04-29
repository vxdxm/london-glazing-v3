
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ConclusionSection = () => {
  return (
    <section id="conclusion" className="mb-12 scroll-mt-20">
      <SectionHeading title="Conclusion" />
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Summary of Key Benefits</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Secondary glazing emerges as a pivotal solution for enhancing energy efficiency in historic buildings while preserving their architectural integrity. 
              The dual advantages of improved insulation and reduced noise contribute to a more comfortable indoor environment, while the retention of original windows maintains aesthetic value.
            </p>
            <p className="text-gray-600">
              As historic buildings face the challenges of modern energy demands, secondary glazing offers a balanced approach that respects the past while looking towards a sustainable future.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>The Future of Historic Building Improvements</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              As awareness of energy efficiency continues to grow, it is likely that more historic buildings will adopt secondary glazing solutions. 
              The emphasis on sustainability and climate-conscious practices will drive further innovations in preservation techniques, 
              ensuring that these valuable structures can be enjoyed by future generations while meeting modern standards.
            </p>
            <p className="text-gray-600">
              By bridging the gap between historic preservation and contemporary efficiency, secondary glazing stands out as a forward-thinking solution.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ConclusionSection;
