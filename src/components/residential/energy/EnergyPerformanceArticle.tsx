
import { SectionHeading } from "@/components/ui/section-heading";
import { UnderstandingSection } from "./sections/UnderstandingSection";
import { ImpactSection } from "./sections/ImpactSection";
import { NoiseSection } from "./sections/NoiseSection";
import { InstallationSection } from "./sections/InstallationSection";
import { AestheticsSection } from "./sections/AestheticsSection";
import { CostSection } from "./sections/CostSection";
import { EnvironmentalSection } from "./sections/EnvironmentalSection";

export const EnergyPerformanceArticle = () => {
  return (
    <article className="prose prose-slate max-w-none mt-16">
      <div className="mb-12">
        <SectionHeading title="Introduction" />
        <p className="text-gray-600 mb-8">
          In an era where energy efficiency is of paramount importance, homeowners are constantly seeking ways to enhance the thermal performance of their properties. One innovative solution that has gained traction is secondary glazing. This article delves into the effectiveness of secondary glazing in improving energy efficiency, offering a comprehensive analysis of its benefits, installation strategies, and long-term implications for homeowners. By understanding what secondary glazing is and how it can transform your home, you can make informed decisions that not only save on energy costs but also contribute to a more sustainable environment.
        </p>
      </div>

      <UnderstandingSection />
      <ImpactSection />
      <NoiseSection />
      <InstallationSection />
      <AestheticsSection />
      <CostSection />
      <EnvironmentalSection />

      <div className="mb-12">
        <SectionHeading title="Conclusion" />
        <p className="text-gray-600 mb-8">
          In summary, secondary glazing presents a multifaceted solution for homeowners seeking to improve energy efficiency, reduce noise, and enhance the overall comfort of their living spaces. With various types of secondary glazing available, homeowners can select options that best suit their needs, all while enjoying the benefits of long-term energy savings and environmental contributions. Whether opting for a DIY installation or professional services, secondary glazing proves to be a worthwhile investment in both function and aesthetics.
        </p>
      </div>
    </article>
  );
};
