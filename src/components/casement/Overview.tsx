import React from 'react';

const Overview = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6">What Are Casement Secondary Glazing Windows?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img 
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705"
          alt="Casement window installation"
          className="rounded-lg shadow-lg w-full h-[300px] object-cover"
        />
        <p className="text-gray-700">
          Casement secondary glazing is a sophisticated window enhancement system designed to complement existing casement windows. This solution involves installing a secondary window on the interior side of your primary casement window, creating an additional barrier for improved insulation and noise reduction.
        </p>
      </div>
    </section>
  );
};

export default Overview;