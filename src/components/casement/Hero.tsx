import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
      <div className="flex-1">
        <h1 className="text-4xl font-bold mb-8">Casement Secondary Glazing Windows: Complete Guide</h1>
        <p className="text-gray-700 mb-4">
          Casement secondary glazing is a sophisticated window enhancement system designed to complement existing casement windows. This solution involves installing a secondary window on the interior side of your primary casement window, creating an additional barrier for improved insulation and noise reduction.
        </p>
      </div>
      <div className="flex-1">
        <img 
          src="/lovable-uploads/3ac41e6a-bf47-4217-bb87-49b8ac430f5a.png"
          alt="Modern casement window with secondary glazing"
          className="rounded-lg shadow-lg w-full h-[400px] object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;