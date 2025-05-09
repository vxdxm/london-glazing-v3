
import React from "react";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { SectionHeading } from "@/components/ui/section-heading";

export const AirGapHeader = () => {
  return (
    <>
      <BreadcrumbNav />
      <SectionHeading 
        title="Air Gap Secondary Glazing Guide"
        subtitle="Understanding optimal spacing for maximum performance"
        className="mb-8"
      />

      <div className="prose max-w-none mb-12 text-gray-600">
        <p className="text-lg leading-relaxed mb-4">
          The air gap between your existing window and secondary glazing plays a crucial role in both thermal and acoustic performance.
          Selecting the right cavity size is essential for achieving optimal results in noise reduction, heat retention, and overall comfort.
        </p>
        <p className="text-lg leading-relaxed">
          Our detailed guide helps you understand the technical considerations and practical implications of different air gap distances,
          allowing you to make informed decisions about your secondary glazing installation for maximum benefit.
        </p>
      </div>
    </>
  );
};
