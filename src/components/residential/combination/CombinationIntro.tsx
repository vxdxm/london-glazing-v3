
import React from "react";

const CombinationIntro = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Custom Combination Secondary Glazing Solutions</h1>
        <p className="text-gray-700 mb-6">
          Our combination window solutions represent the pinnacle of architectural versatility,
          offering unparalleled flexibility in design and functionality. By expertly blending
          different window styles - from classic sash to modern casement - we create custom
          configurations that perfectly match your property's character while providing superior noise reduction and thermal insulation.
        </p>
      </div>
      <div className="relative h-[300px] group">
        <img 
          src="/lovable-uploads/37775d2f-c264-46a3-afb0-ef2414bbb9e1.png"
          alt="Modern combination window featuring sash and horizontal sliding elements in a bright interior setting"
          className="absolute inset-0 w-full h-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-95"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default CombinationIntro;
