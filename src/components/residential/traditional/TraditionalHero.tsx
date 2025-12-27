import React from "react";
import { VerticalSlidingIcon } from "@/components/icons/GlazingTypeIcons";

export function TraditionalHero() {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-4 mb-6">
        <VerticalSlidingIcon size={56} className="text-primary" />
        <h1 className="text-4xl font-bold">Traditional Secondary Glazing for Heritage Properties</h1>
      </div>
      <p className="text-xl text-muted-foreground max-w-4xl">
        Traditional secondary glazing offers heritage-approved solutions for London's period properties, 
        combining authentic operating styles, period-appropriate materials, and conservation-friendly aesthetics. 
        With costs ranging from £400-£900 per window, these systems provide 50-60% thermal improvement and 
        70-80% acoustic reduction while preserving architectural character and often requiring no planning 
        permission for listed buildings.
      </p>
    </section>
  );
}
