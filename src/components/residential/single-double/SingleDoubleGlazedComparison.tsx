import { AspectRatio } from "@/components/ui/aspect-ratio";
export const SingleDoubleGlazedComparison = () => {
  const comparisonData = [{
    category: "Thermal Insulation",
    single: "Moderate improvement over original windows",
    double: "Significant improvement over original windows and single glazed secondary"
  }, {
    category: "Noise Reduction",
    single: "40-50% noise reduction",
    double: "60-80% noise reduction"
  }, {
    category: "Cost",
    single: "Lower initial investment",
    double: "Higher initial investment but potentially greater long-term savings"
  }, {
    category: "Weight",
    single: "Lighter - suitable for delicate frames",
    double: "Heavier - may require frame reinforcement"
  }, {
    category: "Profile Thickness",
    single: "Slimmer profile",
    double: "Thicker profile"
  }, {
    category: "Installation Complexity",
    single: "Simpler installation process",
    double: "More complex installation"
  }];
  return <div className="py-12">
      <h2 className="text-3xl font-bold mb-8">Detailed Comparison</h2>
      
      <div className="mb-12">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-4 text-left">Feature</th>
                <th className="border p-4 text-left">Single Glazed</th>
                <th className="border p-4 text-left">Double Glazed</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="border p-4 font-medium">{item.category}</td>
                  <td className="border p-4">{item.single}</td>
                  <td className="border p-4">{item.double}</td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Best For Single Glazed</h3>
          <ul className="space-y-2 list-disc pl-5">
            <li>Listed buildings with restrictions</li>
            <li>Properties with delicate window frames</li>
            <li>Budget-conscious homeowners</li>
            <li>Properties in milder climates</li>
            <li>Buildings where appearance is a primary concern</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-4">Best For Double Glazed</h3>
          <ul className="space-y-2 list-disc pl-5">
            <li>Properties in colder climates</li>
            <li>Homes near busy roads or high noise areas</li>
            <li>Buildings with sturdy existing frames</li>
            <li>Homeowners prioritizing maximum energy efficiency</li>
            <li>Properties where condensation is a significant issue</li>
          </ul>
        </div>
      </div>
      
      <div className="w-full max-w-4xl mx-auto">
        <AspectRatio ratio={16 / 9} className="bg-muted">
          <img alt="Side by side comparison of single and double glazed secondary windows" className="object-cover w-full h-full rounded-lg" src="/lovable-uploads/9843c321-bf8c-4eea-a1b3-09d57c35998d.jpg" />
        </AspectRatio>
        <p className="text-sm text-gray-500 mt-2 text-center">
          Visual comparison between single and double glazed secondary window installations
        </p>
      </div>
    </div>;
};