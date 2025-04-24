
import { SectionHeading } from "@/components/ui/section-heading";

export const UnderstandingSection = () => {
  return (
    <div className="mb-12">
      <SectionHeading title="Understanding Secondary Glazing" />
      <h3 className="text-2xl font-semibold mb-4">Definition and Overview</h3>
      <p className="text-gray-600 mb-6">
        Secondary glazing refers to the installation of a second layer of glazing on the interior side of existing windows. This method creates an insulating air gap between the original window and the secondary glazing, significantly enhancing thermal performance and energy efficiency. Unlike double glazing, which involves replacing the entire window unit, secondary glazing allows homeowners to retain their existing windows while improving their insulation properties.
      </p>
      <p className="text-gray-600 mb-8">
        This innovative approach is particularly beneficial for older homes, where replacing original windows may not be feasible due to preservation regulations or aesthetic concerns. By opting for secondary glazing, homeowners can improve energy efficiency without compromising the character of their properties.
      </p>

      <h3 className="text-2xl font-semibold mb-4">Types of Secondary Glazing</h3>
      <p className="text-gray-600 mb-4">There are several types of secondary glazing systems available, each with its unique features and benefits. The most common types include:</p>
      <ul className="list-disc list-inside space-y-2 mb-8 text-gray-600">
        <li><strong>Magnetic Secondary Glazing:</strong> This type uses magnetic strips to attach a lightweight acrylic or polycarbonate panel to the window frame, allowing for easy removal and reinstallation.</li>
        <li><strong>Fixed Panels:</strong> These are permanently installed panels that provide a high level of insulation and noise reduction.</li>
        <li><strong>Sliding Systems:</strong> These panels can slide open, providing ventilation options without sacrificing energy efficiency.</li>
        <li><strong>Hinged Systems:</strong> Hinged panels allow access for cleaning and maintenance while providing excellent energy performance.</li>
      </ul>
    </div>
  );
};
