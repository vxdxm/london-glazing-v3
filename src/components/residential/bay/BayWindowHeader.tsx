
import React from 'react';
import { OptimizedImage } from "@/components/ui/optimized-image";

const BayWindowHeader = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Bespoke Secondary Glazing for Bay Windows</h1>
        <p className="text-gray-700 mb-6">
          Our bay window secondary glazing solutions are expertly designed to follow the contours 
          of your existing bay windows, preserving their architectural beauty while significantly 
          improving thermal insulation and acoustic performance.
        </p>
      </div>
      <div className="relative h-[300px] group">
        <OptimizedImage 
          src="/lovable-uploads/01ceac78-bd50-418e-9067-b15d13145c5c.png"
          alt="Elegant bay window secondary glazing installation"
          className="w-full h-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-95"
          width={600}
          height={300}
          priority={true}
        />
      </div>
    </div>
  );
};

export default BayWindowHeader;
