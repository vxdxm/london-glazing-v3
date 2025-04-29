
import React from "react";

const FeaturesSection = () => {
  return (
    <section className="bg-gray-50 rounded-lg p-8 space-y-6">
      <h2 className="text-3xl font-semibold mb-6">Why Choose Our Solutions?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">For Hotels</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Superior sound insulation for peaceful guest rooms</li>
            <li>Enhanced temperature control for year-round comfort</li>
            <li>Reduced energy costs through better insulation</li>
            <li>Minimal disruption during installation</li>
            <li>Suitable for listed and historic buildings</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">For Restaurants & Bars</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Create comfortable dining environments</li>
            <li>Reduce street noise interference</li>
            <li>Prevent condensation on windows</li>
            <li>Maintain clear views for diners</li>
            <li>Easy access for window cleaning</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
