
import React from "react";

const TechnicalSpecs = () => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Glass Options</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>4mm - Double Glazed Glass</li>
              <li>6.4mm to 12.8mm Acoustic glass available</li>
              <li>Low-E coating options</li>
              <li>Safety laminate variations</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Frame Specifications</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Slim aluminum profiles</li>
              <li>Multiple color options</li>
              <li>Thermal break technology</li>
              <li>Weather-resistant seals</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSpecs;
