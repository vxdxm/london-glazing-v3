
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const CrittallIntro = () => {
  return (
    <div>
      <div className="mb-12 w-full max-w-4xl mx-auto">
        <AspectRatio ratio={16 / 9} className="bg-muted">
          <img 
            src="/lovable-uploads/bb016762-b43f-498a-be1c-7e477fcb368a.jpg" 
            alt="Modern Crittall windows with secondary glazing installed"
            className="object-cover w-full h-full rounded-lg"
          />
        </AspectRatio>
      </div>
      <div className="prose max-w-none mb-12">
        <p className="text-lg text-gray-700">
          When it comes to maintaining historical properties or simply enhancing the performance of existing windows, 
          Crittall windows offer a unique charm and functionality. However, they can often fall short in terms of 
          energy efficiency and noise reduction. This is where secondary glazing comes into play, providing an 
          effective solution to these common issues. This article explores the multifaceted benefits of secondary 
          glazing for Crittall windows, focusing on how it improves energy efficiency, reduces noise, increases 
          property value, and why it is an optimal choice for homeowners.
        </p>
      </div>
    </div>
  );
};
