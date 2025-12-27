import React from "react";
import { MapPin, TrendingDown, Volume2, Thermometer } from "lucide-react";

const HorizontalCaseStudies = () => {
  const caseStudies = [
    {
      title: "Canary Wharf Modern Apartment Success",
      location: "Canary Wharf, London",
      challenge: "New build apartment featuring 3-metre wide floor-to-ceiling living room window facing busy road with DLR noise and traffic. Builder-grade double glazing proved insufficient, creating cold zones despite existing double glazing.",
      solution: "Multi-track 4-panel horizontal sliding secondary glazing with 8.8mm acoustic glass and white frames matching existing uPVC.",
      results: [
        { metric: "74%", label: "Noise reduction" },
        { metric: "42%", label: "Further energy savings" },
        { metric: "£480", label: "Annual savings" },
        { metric: "3.4 yrs", label: "Payback period" }
      ],
      investment: "£1,650",
      quote: "The 3-metre wide window was supposed to be our apartment's best feature with stunning views. But noise and cold made it unusable. Horizontal sliding secondary glazing transformed everything. Now it's genuinely our favorite feature - quiet, warm, and the sliding panels operate so smoothly."
    },
    {
      title: "Dulwich Victorian Villa Transformation",
      location: "Dulwich, South London",
      challenge: "Two wide Victorian sash windows positioned side by side forming 2.8-metre total width, single-glazed and draughty with high energy bills. Front-facing busy road generated school run traffic noise.",
      solution: "Single 3-panel horizontal sliding system spanning both windows with 6.8mm acoustic glass, color-matched cream to existing sashes.",
      results: [
        { metric: "61%", label: "Energy bill reduction" },
        { metric: "£2,640", label: "Annual savings" },
        { metric: "78%", label: "Noise reduction" },
        { metric: "0.4 yrs", label: "Payback period" }
      ],
      investment: "£1,100",
      quote: "The horizontal sliding system spanning both proved brilliant - looks seamless, operates smoothly, cost less than two units, and the energy savings are incredible. Much easier to use than lifting heavy sash weights."
    },
    {
      title: "Shoreditch Office Conversion Excellence",
      location: "Shoreditch, East London",
      challenge: "Converted warehouse loft featuring huge 5-metre wide × 2.5-metre high industrial window with single-glazed metal frame. Freezing office space unusable in winter. Street noise from busy Shoreditch road, bars, and nightlife.",
      solution: "Multi-track 5-panel horizontal sliding secondary glazing with 10.8mm high-performance acoustic glass and black powder-coated frames maintaining industrial aesthetic.",
      results: [
        { metric: "68%", label: "Heating cost reduction" },
        { metric: "£4,200", label: "Annual savings" },
        { metric: "82%", label: "Noise reduction" },
        { metric: "0.6 yrs", label: "Payback period" }
      ],
      investment: "£2,400",
      quote: "Our 5-metre industrial window was incredible visually but impossible to work near. Horizontal sliding secondary glazing proved perfect - spans the entire width smoothly, looks professional, and the office is finally comfortable."
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-foreground">Real-World Success Stories</h2>

      <div className="space-y-6 mb-8">
        {caseStudies.map((study, index) => (
          <div key={index} className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="bg-primary/10 p-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg font-semibold text-foreground">{study.title}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {study.location}
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Challenge:</h4>
                  <p className="text-sm text-muted-foreground">{study.challenge}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Solution:</h4>
                  <p className="text-sm text-primary font-medium mb-2">{study.solution}</p>
                  <p className="text-sm text-muted-foreground">Investment: <strong className="text-foreground">{study.investment}</strong></p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Results:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="text-center p-2 bg-green-50 dark:bg-green-950/30 rounded-lg">
                        <p className="text-lg font-bold text-green-600 dark:text-green-400">{result.metric}</p>
                        <p className="text-xs text-muted-foreground">{result.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-4 bg-muted/50 rounded-lg p-4">
                <p className="text-sm text-muted-foreground italic">"{study.quote}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <img 
        src="/images/horizontal-sliding/horizontal-5.jpg" 
        alt="Horizontal sliding secondary glazing case study" 
        className="w-full rounded-lg shadow-lg"
      />
    </section>
  );
};

export default HorizontalCaseStudies;
