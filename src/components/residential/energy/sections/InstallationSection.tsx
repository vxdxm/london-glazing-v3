
import { SectionHeading } from "@/components/ui/section-heading";

export const InstallationSection = () => {
  return (
    <div className="mb-12">
      <SectionHeading title="Installation Techniques for Homeowners" />
      <h3 className="text-2xl font-semibold mb-4">DIY Installation vs. Professional Installation</h3>
      <p className="text-gray-600 mb-6">
        When it comes to installing secondary glazing, homeowners have two primary options: DIY installation or hiring a professional. DIY installation can be a cost-effective solution for handy homeowners, allowing them to save on labor costs while taking on a manageable project. However, it requires careful measurement and precision to ensure effective insulation and aesthetics.
      </p>
      <p className="text-gray-600 mb-8">
        On the other hand, professional installation provides the benefit of expertise and experience, ensuring that the secondary glazing is installed correctly and effectively. This option may be more expensive, but it can save time and reduce the risk of mistakes that could compromise the system's efficiency.
      </p>

      <h3 className="text-2xl font-semibold mb-4">Step-by-Step Installation Guide</h3>
      <p className="text-gray-600 mb-4">For those choosing the DIY route, here is a general step-by-step guide for installing secondary glazing:</p>
      <ol className="list-decimal list-inside space-y-2 mb-8 text-gray-600">
        <li><strong>Measure the Window:</strong> Accurately measure the dimensions of your existing windows.</li>
        <li><strong>Choose Your Glazing Material:</strong> Decide whether to use acrylic, polycarbonate, or glass for your secondary glazing.</li>
        <li><strong>Cut the Panels:</strong> Cut the chosen material to size, ensuring it fits snugly within the window frame.</li>
        <li><strong>Prepare the Surface:</strong> Clean the window frame to ensure proper adhesion of the glazing material.</li>
        <li><strong>Install the Glazing:</strong> Follow the specific instructions for your chosen glazing type, whether it involves magnetic strips, screws, or other methods.</li>
        <li><strong>Seal the Edges:</strong> Use weather stripping or sealant to prevent air leakage and enhance insulation.</li>
      </ol>
    </div>
  );
};
