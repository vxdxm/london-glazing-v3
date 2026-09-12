import React, { useState } from "react";
import { ArrowLeftRight, Droplets, Sun, Volume2, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
const beforeImage = "/images/office-before-single-glazing.webp";
const afterImage = "/images/office-after-secondary-glazing.webp";



export const BeforeAfterSlider = () => {
  const [position, setPosition] = useState(50);

  const setComparison = (value: number) => setPosition(value);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">See the Difference</h2>
          <p className="text-muted-foreground">Drag, tap or use your arrow keys to compare the same meeting room before and after secondary glazing.</p>
        </div>

        <div
          className="group relative aspect-[4/3] md:aspect-[3/2] overflow-hidden rounded-lg border border-border bg-card shadow-xl select-none"
        >
          {/* Upgraded room with secondary glazing */}
          <img
            src={afterImage}
            alt="Quiet London meeting room after secondary glazing, staff working calmly beside tall windows"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />

          {/* Original single-glazed condition, revealed on the left */}
          <div
            className="absolute inset-0 overflow-hidden border-r-2 border-primary-foreground shadow-lg"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <img
              src={beforeImage}
              alt="Noisy single-glazed London meeting room before secondary glazing, with traffic noise disrupting a meeting"
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>


          {/* Labels remain anchored and never enter the clipping collision zone */}
          <div className="absolute left-3 top-3 z-20 md:left-5 md:top-5">
            <div className="flex items-center gap-2 rounded-md border border-border bg-background/90 px-3 py-2 shadow-md backdrop-blur-sm">
              <Droplets className="h-4 w-4 text-destructive" />
              <div className="text-left">
                <p className="text-xs font-bold text-foreground md:text-sm">Before</p>
                <p className="hidden text-xs text-muted-foreground sm:block">Single glazed</p>
              </div>
            </div>
          </div>
          <div className="absolute right-3 top-3 z-20 md:right-5 md:top-5">
            <div className="flex items-center gap-2 rounded-md border border-border bg-background/90 px-3 py-2 shadow-md backdrop-blur-sm">
              <Sun className="h-4 w-4 text-primary" />
              <div className="text-left">
                <p className="text-xs font-bold text-foreground md:text-sm">After</p>
                <p className="hidden text-xs text-muted-foreground sm:block">Secondary glazed</p>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 z-20" style={{ left: `${position}%` }}>
            <div className="h-full w-0.5 bg-primary-foreground shadow-lg" />
            <div className="absolute top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-primary-foreground bg-primary text-primary-foreground shadow-xl transition-transform group-hover:scale-110">
              <ArrowLeftRight className="h-5 w-5" />
            </div>
          </div>

          <input
            type="range"
            min="0"
            max="100"
            value={position}
            onChange={(event) => setPosition(Number(event.target.value))}
            aria-label="Compare the room before and after secondary glazing"
            aria-valuetext={`${position}% of the before view shown`}
            className="absolute inset-0 z-30 h-full w-full cursor-ew-resize opacity-0"
          />

          <div className="pointer-events-none absolute bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full border border-border bg-background/90 px-4 py-2 text-xs font-medium text-foreground shadow-md backdrop-blur-sm md:text-sm">
            <span className="flex items-center gap-2"><ArrowLeftRight className="h-4 w-4 text-primary" /> Drag to compare</span>
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-2" aria-label="Comparison presets">
          <Button variant={position === 100 ? "default" : "outline"} size="sm" onClick={() => setComparison(100)}>Before</Button>
          <Button variant={position === 50 ? "default" : "outline"} size="sm" onClick={() => setComparison(50)}>Split view</Button>
          <Button variant={position === 0 ? "default" : "outline"} size="sm" onClick={() => setComparison(0)}>After</Button>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-4">
            <Droplets className="mb-3 h-5 w-5 text-primary" />
            <p className="text-sm font-semibold text-foreground">Condensation</p>
            <p className="mt-1 text-sm text-muted-foreground">Up to 99% reduction with correct ventilation.</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <Volume2 className="mb-3 h-5 w-5 text-primary" />
            <p className="text-sm font-semibold text-foreground">Outside noise</p>
            <p className="mt-1 text-sm text-muted-foreground">Up to 80% quieter with acoustic glass.</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <Waves className="mb-3 h-5 w-5 text-primary" />
            <p className="text-sm font-semibold text-foreground">Heat loss</p>
            <p className="mt-1 text-sm text-muted-foreground">Up to 60% lower through upgraded windows.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
