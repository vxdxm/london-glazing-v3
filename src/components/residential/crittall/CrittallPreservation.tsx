
import { InfoCard } from "@/components/ui/info-card";

export const CrittallPreservation = () => {
  return (
    <div className="space-y-8 mb-12">
      <h2 className="text-3xl font-semibold">Why Choose Secondary Glazing</h2>
      <div className="grid gap-6">
        <InfoCard
          title="Preserve Historical Features"
          className="bg-background"
        >
          <div className="mb-6">
            <img 
              src="/lovable-uploads/976ac845-a391-42fe-ba2e-dbe7893b2ded.jpg"
              alt="Historical Crittall window with secondary glazing"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
          </div>
          <p className="text-gray-700">
            Secondary glazing allows you to maintain the integrity of your Crittall windows 
            without altering the original structure. This is crucial for homes in conservation 
            areas where historical accuracy is enforced by local regulations.
          </p>
        </InfoCard>
        
        <InfoCard
          title="Cost-Effective Solution"
          className="bg-background"
        >
          <div className="mb-6">
            <img 
              src="/lovable-uploads/2f4fa321-a97b-487b-a0f2-bb38093e6ca3.jpg"
              alt="Secondary glazing installation process"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
          </div>
          <p className="text-gray-700">
            Secondary glazing offers a cost-effective alternative to window replacement, 
            especially important when considering the historical significance of Crittall 
            windows. This approach preserves your home's character while improving performance.
          </p>
        </InfoCard>
      </div>
    </div>
  );
};
