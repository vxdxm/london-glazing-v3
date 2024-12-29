import React from 'react';

const BayWindowHeader = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Bay Window Secondary Glazing: Complete Guide</h1>
        <p className="text-gray-700 mb-6">
          Our bay window secondary glazing solutions are expertly designed to follow the contours 
          of your existing bay windows, preserving their architectural beauty while significantly 
          improving thermal and acoustic performance.
        </p>
      </div>
      <div>
        <img 
          src="/lovable-uploads/01ceac78-bd50-418e-9067-b15d13145c5c.png"
          alt="Elegant bay window installation"
          className="rounded-lg w-full h-[300px] object-cover"
        />
      </div>
    </div>
  );
};

export default BayWindowHeader;