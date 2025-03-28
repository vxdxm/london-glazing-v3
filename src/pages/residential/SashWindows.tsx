
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SashWindowGlassOptions from "@/components/residential/SashWindowGlassOptions";
import SashWindowsSEO from "@/components/residential/sash/SashWindowsSEO";
import SashWindowCTA from "@/components/residential/sash/SashWindowCTA";
import { useState } from "react";

const SashWindows = () => {
  const [standardImageError, setStandardImageError] = useState(false);
  const [tiltInImageError, setTiltInImageError] = useState(false);

  const handleStandardImageError = () => {
    console.error("Standard sliding image failed to load");
    setStandardImageError(true);
  };

  const handleTiltInImageError = () => {
    console.error("Tilt-in image failed to load");
    setTiltInImageError(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <SashWindowsSEO />
      <MainNav />
      <div className="container mx-auto px-4 py-8">
        <BreadcrumbNav />
        <article className="prose lg:prose-xl max-w-none">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-8">Sash Window Secondary Glazing: Complete Guide</h1>
              <p className="text-gray-700 mb-4">
                Our sash window secondary glazing solutions are designed to preserve the original character 
                of your period property while providing modern insulation benefits. We use specially designed 
                systems that complement existing window frames, enhancing both aesthetics and functionality.
              </p>
            </div>
            <div className="flex-1">
              <img 
                src="/lovable-uploads/5592528a-f976-44e2-a6af-e79c4a3c3f18.png"
                alt="Three elegant sash windows with Roman blinds, overlooking brick buildings and trees, demonstrating classic period property features"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                loading="eager"
              />
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Window Styles Available</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Standard Vertical Sliding</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <img 
                      src={standardImageError ? "/placeholder.svg" : "/lovable-uploads/35ea6134-3501-45e1-9ac7-ed7d91680ad6.png"}
                      alt="Interior view of two elegant sash windows with traditional radiators beneath, showing the classic vertical sliding design in a period property with grey walls and a chandelier"
                      className="rounded-lg w-full h-[200px] object-cover mb-4"
                      onError={handleStandardImageError}
                      loading="lazy"
                    />
                    <div className="text-gray-700 space-y-4">
                      <p>
                        Our traditional vertical sliding secondary glazing is expertly designed to complement your existing sash windows
                        while providing superior insulation and noise reduction benefits. The system features:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Smooth, balanced operation with high-quality spring balances</li>
                        <li>Custom-matched frame colors to blend seamlessly with your existing windows</li>
                        <li>Precision-engineered sliding mechanism for effortless use</li>
                        <li>Discrete brush seals for enhanced draught proofing</li>
                        <li>Optional tilt-in facility for easy cleaning access</li>
                      </ul>
                      <p>
                        Perfect for period properties, our vertical sliding secondary glazing maintains the original character
                        while significantly improving thermal and acoustic performance. The system can reduce heat loss by up
                        to 65% and noise levels by up to 80%.
                      </p>
                      <p>
                        Installation is carried out with minimal disruption to your property, and our expert fitters ensure
                        perfect alignment and operation. The result is a virtually invisible solution that enhances your
                        windows' performance without compromising their historic charm.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Tilt-In Sash Windows</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <img 
                      src={tiltInImageError ? "/placeholder.svg" : "/lovable-uploads/7d4c00ee-9a1c-4552-a1ab-033429c4803c.png"}
                      alt="Tilt-in sash window demonstration showing the window tilted inward for easy cleaning and maintenance"
                      className="rounded-lg w-full h-[200px] object-cover mb-4"
                      onError={handleTiltInImageError}
                      loading="lazy"
                    />
                    <div className="text-gray-700 space-y-4">
                      <p>
                        Our innovative tilt-in secondary glazing system combines traditional aesthetics with modern convenience,
                        offering exceptional accessibility for cleaning and maintenance. Key features include:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>90-degree tilt-in functionality for safe and easy cleaning from inside</li>
                        <li>Advanced safety mechanisms to prevent accidental release</li>
                        <li>Suitable for high-rise applications where external access is challenging</li>
                        <li>Integrated child safety locks</li>
                        <li>Weather-resistant seals for superior draught protection</li>
                      </ul>
                      <p>
                        The tilt-in mechanism is particularly valuable for upper-floor installations where external cleaning
                        would be difficult or dangerous. The system maintains all the thermal and acoustic benefits of our
                        standard vertical sliding units while adding unprecedented accessibility.
                      </p>
                      <p>
                        Each unit is custom-manufactured to your exact specifications, ensuring perfect fit and operation.
                        Our expert installation team will demonstrate the safe operation of the tilt-in mechanism and provide
                        comprehensive care instructions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <SashWindowGlassOptions />
          <SashWindowCTA />
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default SashWindows;
