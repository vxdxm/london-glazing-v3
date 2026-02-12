import React from "react";
import { Play } from "lucide-react";

export const VideoPlaceholder = ({ title = "Noise Reduction Video Demo" }: { title?: string }) => (
  <div className="my-12 rounded-2xl overflow-hidden border border-border bg-muted/30">
    <div className="aspect-video flex flex-col items-center justify-center p-8">
      <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
        <Play className="h-8 w-8 text-primary ml-1" />
      </div>
      <p className="text-lg font-bold text-foreground mb-1">{title}</p>
      <p className="text-sm text-muted-foreground text-center max-w-md">
        Watch how 10.8mm acoustic laminate glass with a 100mm air gap transforms London traffic noise into peaceful silence.
      </p>
      <p className="text-xs text-muted-foreground mt-3">Video coming soon</p>
    </div>
  </div>
);
