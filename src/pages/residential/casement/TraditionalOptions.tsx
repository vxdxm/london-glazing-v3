import React from "react";
import SEOHelmet from "@/components/SEOHelmet";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CasementTraditionalOptions = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <SEOHelmet
        title="Traditional Casement Window Secondary Glazing | Heritage Spec"
        description="Heritage-grade secondary glazing for traditional casement windows. Hinged and lift-out units engineered for Grade I/II listed buildings — 35-45dB Rw, U-values to 1.6 W/m²K."
        canonicalPath="/residential/casement-windows/traditional-options"
      />
      
      <MainNav />
      
      <div className="container mx-auto px-4 py-12">
        <BreadcrumbNav />
        
        <article className="prose max-w-none">
          <h1 className="text-4xl font-bold mb-6">Traditional Casement Window Secondary Glazing</h1>
          
          <p className="text-lg mb-6 text-muted-foreground">
            Period casement windows — whether timber-framed Victorian, Edwardian leaded lights, or Arts-and-Crafts steel
            Crittall units — present a specific brief to the secondary glazing specifier: deliver measurable acoustic and
            thermal performance without altering the primary fenestration. Our traditional range is detailed for Grade I
            and Grade II listed buildings, conservation areas, and Article 4 zones where reversibility, sightline
            preservation, and material sympathy are non-negotiable.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8">Specification Overview</h2>
          <p className="mb-4">
            Traditional casement secondary glazing is supplied as bespoke side-hinged or top-hung units, manufactured
            from low-profile aluminium (typically 18–22mm sightlines) with a powder-coated heritage finish. Frames are
            colour-matched to the primary timber — RAL or BS 4800 references on request — and fitted independently of
            the original window using sub-frame liners that are mechanically fixed without disturbing historic joinery.
            All systems comply with BS 8233:2014 (sound insulation) and Approved Document L (conservation of fuel and power).
          </p>

          <Card className="my-8">
            <CardHeader>
              <CardTitle>Performance Data — Traditional Casement System</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li><strong>Acoustic reduction (Rw):</strong> 35–45dB depending on glass spec and air gap (BS EN ISO 717-1)</li>
                <li><strong>U-value:</strong> 1.6–1.9 W/m²K when retrofitted to single-glazed primary windows</li>
                <li><strong>Air gap:</strong> 100mm minimum, 150–200mm optimal for low-frequency attenuation</li>
                <li><strong>Glass options:</strong> 4mm float, 6.4mm laminated, 6.8mm acoustic laminated, 8.8mm Stadip Silence</li>
                <li><strong>Frame depth:</strong> 22mm head and jamb, 30mm cill</li>
                <li><strong>Compliance:</strong> Reversible install per Historic England guidance, fully removable without fabric damage</li>
              </ul>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-semibold mb-4 mt-8">Heritage Detailing</h2>
          <p className="mb-4">
            Traditional configurations include glazing-bar overlays that align with the primary window's astragal pattern,
            preserving the visual rhythm of the elevation when viewed from the street. For leaded lights and stained-glass
            primaries, we recommend non-reflective Optiwhite glass to minimise the secondary plane's visual presence. All
            ironmongery — espagnolette handles, brass turn-buckles, and friction stays — is selected to match period
            convention and operates without interference with the original sash or casement.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8">Suitable Applications</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Grade I and Grade II listed Georgian, Victorian, and Edwardian residences</li>
            <li>Conservation area properties subject to Article 4 directions</li>
            <li>Crittall steel-frame casements in Arts-and-Crafts and 1930s housing stock</li>
            <li>Leaded-light church and chapel conversions</li>
            <li>Mews properties with original timber casements</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 mt-8">Listed Building Consent</h2>
          <p className="mb-6">
            Secondary glazing is widely recognised by Local Authority conservation officers as the preferred thermal and
            acoustic upgrade for listed properties because it does not alter the listed fabric. We provide drawings,
            performance schedules, and Historic England-compliant heritage statements as part of the LBC submission package
            on request. Most installations proceed under permitted development; we'll advise during survey whether a
            formal application is required.
          </p>

          <div className="bg-secondary/30 p-6 rounded-lg my-8">
            <h3 className="text-xl font-semibold mb-3">Survey & Specification</h3>
            <p className="mb-4">
              Every traditional casement project begins with an on-site technical survey: glass selection is determined
              by an acoustic measurement of the existing window's Rw performance and the dominant external noise spectrum.
              We'll specify the precise glass thickness, interlayer type, and air gap required to hit your target
              dB reduction and U-value.
            </p>
            <Button onClick={() => navigate("/quote-request")}>Request a Technical Survey</Button>
          </div>
        </article>
      </div>
      
      <Footer />
    </div>
  );
};

export default CasementTraditionalOptions;
