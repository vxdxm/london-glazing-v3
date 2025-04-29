
import { SectionHeading } from "@/components/ui/section-heading";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ComfortSection = () => {
  return (
    <section id="comfort" className="mb-12 scroll-mt-20">
      <SectionHeading title="Enhanced Indoor Comfort" />
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-3">Improved Acoustic Insulation</h3>
          <p className="text-gray-600 mb-4">
            In addition to thermal benefits, secondary glazing also provides substantial acoustic insulation. The additional pane of glass creates a barrier that significantly reduces noise intrusion from the outside, making living spaces more comfortable.
          </p>
          <p className="text-gray-600">
            This is particularly valuable in urban areas or near busy roads, where noise pollution can detract from the quality of life. 
            Residents of buildings with secondary glazing often report a notable improvement in their comfort levels due to reduced noise exposure.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-3">Reduction of Drafts and Temperature Fluctuations</h3>
          <p className="text-gray-600 mb-4">
            Secondary glazing effectively reduces drafts that commonly plague older buildings. By sealing off gaps around windows, 
            it prevents cold air from entering and warm air from escaping, resulting in a more stable indoor climate.
          </p>
          <p className="text-gray-600">
            This stability minimizes temperature fluctuations, creating a more comfortable environment throughout the year. 
            Homeowners and building occupants benefit from consistent temperatures, which can be particularly advantageous in spaces that require specific climate control for preservation purposes.
          </p>
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <h3 className="text-xl font-semibold mb-3">Feedback from Residents and Users</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-gray-600 italic mb-2">
              "After installing secondary glazing in our Victorian home, we noticed an immediate difference in warmth and comfort. 
              The house maintains a steady temperature now, and the street noise has been significantly reduced."
            </p>
            <p className="text-right text-sm font-medium">— Heritage homeowner, Bath</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-gray-600 italic mb-2">
              "As a museum curator, I was concerned about protecting our exhibits while maintaining visitor comfort. 
              Secondary glazing has helped us achieve both, regulating temperature and blocking UV rays without altering the building's historic facade."
            </p>
            <p className="text-right text-sm font-medium">— Museum curator, Edinburgh</p>
          </div>
        </div>
      </div>
      
      <AspectRatio ratio={21 / 9} className="overflow-hidden rounded-lg shadow-md">
        <img 
          src="/lovable-uploads/733d2e89-3c8b-437b-b5a1-074997517da0.jpg" 
          alt="Modern interior with secondary glazed windows" 
          className="w-full h-full object-cover" 
          loading="lazy" 
        />
      </AspectRatio>
    </section>
  );
};

export default ComfortSection;
