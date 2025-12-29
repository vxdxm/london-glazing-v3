import React from "react";

export const SisterServicePromo = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Looking for Professional Installation Services?
            </h3>
            <p className="text-muted-foreground mb-3">
              Visit our sister service at{" "}
              <a 
                href="https://www.secondaryglazinginstallers.com"
                className="text-primary hover:text-primary/80 font-medium underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Secondary Glazing Installers
              </a>{" "}
              for comprehensive installation guides, instant price calculators, and detailed London area coverage.
            </p>
            <a 
              href="https://www.secondaryglazinginstallers.com/calculator"
              className="inline-block bg-primary text-primary-foreground px-5 py-2 rounded-md hover:bg-primary/90 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try Our Price Calculator →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SisterServicePromo;
