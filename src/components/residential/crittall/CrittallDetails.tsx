
import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";

export const CrittallDetails = () => {
  return (
    <div className="space-y-12">
      <section>
        <SectionHeading 
          title="Improved Energy Efficiency"
          subtitle="Discover how secondary glazing enhances thermal performance"
        />
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">How Secondary Glazing Works</h3>
            <p className="text-gray-700">
              Secondary glazing involves adding a second layer of glass to existing windows, creating an air gap 
              that acts as insulation. This setup significantly reduces heat transfer between the inside and outside, 
              thus improving the overall energy efficiency of the building. The air gap created between the two panes 
              of glass serves as an insulating barrier that retains warmth in the winter and keeps interiors cooler 
              during the summer months.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Reduction of Heat Loss</h3>
            <p className="text-gray-700">
              One of the primary benefits of secondary glazing is the substantial reduction of heat loss. 
              Traditional Crittall windows, while aesthetically pleasing, can allow significant cold drafts 
              to enter and warm air to escape. By adding secondary glazing, homeowners can dramatically decrease 
              heat loss by up to 50%.
            </p>
          </div>
        </div>
      </section>

      <section>
        <SectionHeading 
          title="Enhanced Noise Reduction"
          subtitle="Create a quieter, more peaceful living environment"
        />
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Understanding Sound Transmission</h3>
            <p className="text-gray-700">
              Noise pollution is an increasingly prevalent issue, particularly in urban environments. 
              Sound travels through air, and single-pane windows provide minimal resistance to this transmission. 
              Secondary glazing creates an additional barrier that can significantly reduce sound transmission, 
              making homes quieter and more peaceful.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Benefits for Urban Living</h3>
            <p className="text-gray-700">
              For those residing in bustling cities, secondary glazing can transform the living experience. 
              Not only does it reduce unwanted noise, but it also enhances comfort by creating a serene environment. 
              This improvement is particularly valuable for homes with bedrooms facing busy streets.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
