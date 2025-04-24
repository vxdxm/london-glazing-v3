
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
