import React, { useState } from "react";
import { Droplets, Sun } from "lucide-react";

export const BeforeAfterSlider = () => {
  const [position, setPosition] = useState(50);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">See the Difference</h2>
          <p className="text-muted-foreground">Drag the slider to compare before and after secondary glazing.</p>
        </div>

        <div
          className="relative rounded-2xl overflow-hidden border border-border select-none touch-none"
          style={{ aspectRatio: "16/9" }}
          onPointerMove={(e) => {
            if (e.buttons !== 1) return;
            const rect = e.currentTarget.getBoundingClientRect();
            setPosition(Math.max(5, Math.min(95, ((e.clientX - rect.left) / rect.width) * 100)));
          }}
          onPointerDown={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setPosition(Math.max(5, Math.min(95, ((e.clientX - rect.left) / rect.width) * 100)));
          }}
        >
          {/* After (full background) */}
          <div className="absolute inset-0 bg-primary/5 flex flex-col items-center justify-center p-8">
            <Sun className="h-10 w-10 text-primary mb-3" />
            <p className="text-xl font-bold text-foreground">After: Secondary Glazing</p>
            <p className="text-sm text-muted-foreground mt-1">Clear, dry glass — 99% condensation reduction</p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-center">
              <div className="bg-background/80 rounded-lg px-4 py-2"><p className="text-xs text-muted-foreground">Noise</p><p className="font-bold text-primary text-sm">-80%</p></div>
              <div className="bg-background/80 rounded-lg px-4 py-2"><p className="text-xs text-muted-foreground">Heat Loss</p><p className="font-bold text-primary text-sm">-60%</p></div>
            </div>
          </div>

          {/* Before (clipped left) */}
          <div
            className="absolute inset-0 bg-destructive/5 flex flex-col items-center justify-center p-8 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <Droplets className="h-10 w-10 text-destructive mb-3" />
            <p className="text-xl font-bold text-foreground">Before: Single Glazed</p>
            <p className="text-sm text-muted-foreground mt-1">Condensation, draughts, and noise</p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-center">
              <div className="bg-background/80 rounded-lg px-4 py-2"><p className="text-xs text-muted-foreground">U-Value</p><p className="font-bold text-destructive text-sm">5.0</p></div>
              <div className="bg-background/80 rounded-lg px-4 py-2"><p className="text-xs text-muted-foreground">Noise</p><p className="font-bold text-destructive text-sm">Loud</p></div>
            </div>
          </div>

          {/* Slider handle */}
          <div className="absolute top-0 bottom-0" style={{ left: `${position}%`, transform: "translateX(-50%)" }}>
            <div className="w-1 h-full bg-primary" />
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg cursor-ew-resize">
              <span className="text-primary-foreground text-xs font-bold">↔</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
