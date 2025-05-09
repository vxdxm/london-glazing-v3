
import React from "react";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";

export const CondensationHeader = () => {
  return (
    <>
      <BreadcrumbNav />
      <h1 className="text-4xl font-bold mb-8">Condensation Control</h1>

      <div className="prose max-w-none mb-12 text-gray-600">
        <p className="text-lg leading-relaxed mb-4">
          Effective condensation control is crucial for maintaining a healthy living environment and protecting your property's 
          windows from moisture damage. Our specialized secondary glazing solutions are designed to combat condensation issues 
          by creating an additional barrier that helps regulate temperature differences between indoor and outdoor environments.
        </p>
        <p className="text-lg leading-relaxed">
          By installing our secondary glazing systems, you can significantly reduce or eliminate condensation problems, 
          preventing issues such as mold growth, dampness, and deterioration of window frames. Our solutions work by 
          maintaining a more consistent surface temperature on your windows, effectively preventing the formation of 
          condensation while also improving your property's overall thermal efficiency.
        </p>
      </div>
    </>
  );
};
