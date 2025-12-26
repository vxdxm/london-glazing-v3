import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export const HomepageIntro = () => {
  return (
    <section className="py-12 bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
            London's Trusted Secondary Glazing Specialists Since 2008
          </h2>
          
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed text-center">
            Secondary Glazing Specialist provides expert installation of internal window systems for{" "}
            <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">listed buildings</Link>,{" "}
            <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline">conservation areas</Link>, and{" "}
            <Link to="/residential" className="text-primary hover:underline">period properties</Link> across London and the Home Counties. 
            Our bespoke secondary glazing solutions reduce noise by up to 80%, improve thermal efficiency by 65%, 
            and enhance security—all without altering your property's external appearance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-start gap-3 p-4 bg-card rounded-lg border">
              <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Heritage Property Experts</h3>
                <p className="text-sm text-muted-foreground">
                  Specialists in Grade I, II*, and II listed buildings with full planning permission support
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-card rounded-lg border">
              <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">All London Boroughs</h3>
                <p className="text-sm text-muted-foreground">
                  Serving Westminster, Kensington & Chelsea, Camden, Islington, Richmond, and beyond
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-card rounded-lg border">
              <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">10-Year Guarantee</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive warranty on all installations with prices from £350 per window
                </p>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground text-center leading-relaxed">
            Whether you own a{" "}
            <Link to="/victorian-windows-secondary-glazing" className="text-primary hover:underline">Victorian townhouse</Link>,{" "}
            <Link to="/georgian-windows-secondary-glazing" className="text-primary hover:underline">Georgian terrace</Link>, or{" "}
            <Link to="/edwardian-property-secondary-glazing" className="text-primary hover:underline">Edwardian semi-detached</Link>, 
            our expert team delivers sympathetic installations that preserve architectural character while dramatically 
            improving comfort and reducing energy bills. We handle everything from initial survey to final installation, 
            including conservation officer liaison and Listed Building Consent applications where required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomepageIntro;
