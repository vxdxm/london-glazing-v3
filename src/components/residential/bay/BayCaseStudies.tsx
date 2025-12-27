import React from "react";
import { Home, MapPin, TrendingDown, Volume2 } from "lucide-react";

const BayCaseStudies = () => {
  const caseStudies = [
    {
      location: "Victorian Terrace, North London",
      challenge: "A family with a 3-panel sash bay in their front living room was spending £420 monthly on winter heating bills. The bay area was too cold to use, despite being the room's most attractive feature.",
      solution: "Vertical sliding secondary glazing with acoustic glass (£1,850)",
      results: [
        { metric: "58%", label: "Energy bill reduction" },
        { metric: "£2,928", label: "Annual savings" },
        { metric: "75%", label: "Street noise reduction" }
      ],
      highlight: "The bay window seat is now the family's favorite spot"
    },
    {
      location: "Edwardian Villa, West London",
      challenge: "A Grade II listed 5-panel canted bay in a master bedroom faced a busy A-road, disrupting sleep nightly. Planning permission for replacement was refused.",
      solution: "Secondary glazing with high-performance acoustic glass (£2,650)",
      results: [
        { metric: "78%", label: "Noise reduction" },
        { metric: "62%", label: "Heating cost reduction" },
        { metric: "100%", label: "Conservation compliance" }
      ],
      highlight: "Satisfied conservation requirements while delivering peaceful sleep"
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-foreground">Real-World Success Stories</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {caseStudies.map((study, index) => (
          <div key={index} className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="bg-primary/10 p-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">{study.location}</h3>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-2">Challenge:</h4>
                <p className="text-sm text-muted-foreground">{study.challenge}</p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-2">Solution:</h4>
                <p className="text-sm text-primary font-medium">{study.solution}</p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-3">Results:</h4>
                <div className="grid grid-cols-3 gap-2">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="text-center p-2 bg-green-50 dark:bg-green-950/30 rounded-lg">
                      <p className="text-lg font-bold text-green-600 dark:text-green-400">{result.metric}</p>
                      <p className="text-xs text-muted-foreground">{result.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
                <p className="text-sm text-foreground italic">"{study.highlight}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <img 
        src="/images/bay-windows/bay-window-4.jpg" 
        alt="Bay window secondary glazing case study results" 
        className="w-full rounded-lg shadow-lg"
      />
    </section>
  );
};

export default BayCaseStudies;
