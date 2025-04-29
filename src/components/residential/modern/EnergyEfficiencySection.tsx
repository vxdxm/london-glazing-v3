
import { SectionHeading } from "@/components/ui/section-heading";

const EnergyEfficiencySection = () => {
  return (
    <section id="energy-efficiency" className="mb-12 scroll-mt-20">
      <SectionHeading title="Importance of Energy Efficiency in Older Structures" />
      <p className="text-gray-600 mb-6">
        Energy efficiency is essential in all buildings, but it takes on heightened importance in older structures due to their often inefficient original building methods and materials. 
        Inadequate insulation and air leakage can lead to excessive heating and cooling costs, which can be detrimental to both the environment and the economic feasibility of maintaining these buildings.
      </p>
      <p className="text-gray-600 mb-6">
        Secondary glazing can significantly reduce heat loss through windows, which are often the largest source of thermal inefficiency in historic buildings. By creating an additional insulating air gap between existing windows and the new glazing, heat transfer is dramatically reduced.
      </p>
      <p className="text-gray-600">
        Furthermore, retrofitting historic buildings with modern energy-efficient systems like secondary glazing can enhance their long-term viability and sustainability while preserving their architectural integrity.
      </p>
    </section>
  );
};

export default EnergyEfficiencySection;
