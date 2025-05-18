
import React from 'react';
import { OptimizedImage } from "@/components/ui/optimized-image";

const HomeExamples = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Secondary Glazing Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <OptimizedImage
              src="/lovable-uploads/105df4cf-806c-402e-aaba-ccb4792bad5f.png"
              alt="Triple sash window installation with grey roman blinds overlooking urban area"
              className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold px-4 text-center">
                Sash Window Solutions
              </p>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <OptimizedImage
              src="/lovable-uploads/289db534-0ea4-4a46-b9f6-1896892c42b5.png"
              alt="Wide horizontal sliding secondary glazing installation with garden view"
              className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold px-4 text-center">
                Horizontal Sliding Systems
              </p>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <OptimizedImage
              src="/lovable-uploads/85a35431-eb67-44c0-bc47-544b29a786f6.png"
              alt="Modern casement window with secondary glazing in a contemporary setting"
              className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold px-4 text-center">
                Casement Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeExamples;
