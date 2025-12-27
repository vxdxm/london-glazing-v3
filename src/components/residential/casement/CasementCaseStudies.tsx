import { Building2, Home, Plane, Quote } from "lucide-react";

const CasementCaseStudies = () => {
  const caseStudies = [
    {
      title: "1930s Art Deco Semi, Ealing",
      icon: Building2,
      challenge: "Original steel casements rusting and extremely draughty, single-glazed throughout, cold bedrooms, high energy bills, but beautiful character property that needed original windows preserved.",
      solution: "8 hinged secondary glazing units with 6.8mm acoustic glass to match the Art Deco aesthetic perfectly.",
      results: [
        "52% energy bill reduction saving £2,800 annually",
        "72% noise reduction from the main road",
        "Original Art Deco casements protected from further deterioration",
        "Maintained complete period character",
        "Hinged secondary glazing mirrors the original casement operation seamlessly",
      ],
      quote: "The steel casements are an integral part of the character of our 1930s home. Secondary glazing saved them and completely transformed our comfort. The house is warm and quiet now, and the original windows are properly protected.",
    },
    {
      title: "1950s Semi-Detached, Croydon",
      icon: Home,
      challenge: "Metal casements severely deteriorated, difficult to open properly, extremely draughty, cold rooms throughout winter, seriously considering expensive total replacement.",
      solution: "10 fixed secondary glazing units (casements were rarely opened anyway due to deterioration), 6.8mm glass specification.",
      results: [
        "58% heating cost reduction saving £3,200 annually",
        "75% noise reduction",
        "Avoided expensive casement replacement (saved £8,000-£15,000)",
        "Protected deteriorating originals from further weather damage",
        "Dramatic comfort improvement throughout the house",
      ],
      quote: "We never opened most of the casements anyway because they were so deteriorated. Fixed secondary glazing was the perfect solution - affordable, incredibly effective, and protects our original windows.",
    },
    {
      title: "Modern Home, Richmond",
      icon: Plane,
      challenge: "Builder-grade double glazed uPVC casements, severe flight path noise from Heathrow approaches, disrupted sleep, work from home challenges with constant aircraft noise.",
      solution: "6 hinged secondary glazing units in bedrooms and home office, 10.8mm high-performance acoustic glass for maximum noise reduction.",
      results: [
        "78% noise reduction despite existing double glazing",
        "Completely transformed sleep quality",
        "Comfortable video calls with no background aircraft noise",
        "35% additional energy savings from the third thermal barrier",
      ],
      quote: "We thought our double glazing was sufficient. Secondary glazing made an absolutely incredible difference for the flight path noise. We're finally sleeping through the night again.",
    },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Real London Case Studies</h2>

      <div className="space-y-8">
        {caseStudies.map((study, index) => (
          <div key={index} className="bg-muted/30 rounded-xl overflow-hidden">
            <div className="bg-primary/10 p-4 flex items-center gap-3">
              <study.icon className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">{study.title}</h3>
            </div>
            
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-destructive mb-2">Challenge:</h4>
                  <p className="text-foreground/80">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Solution:</h4>
                  <p className="text-foreground/80">{study.solution}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-green-600 mb-3">Results:</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-green-500/5 rounded-lg p-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span className="text-sm text-foreground/80">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-background/60 rounded-lg p-4 flex gap-3">
                <Quote className="h-6 w-6 text-primary flex-shrink-0" />
                <p className="text-foreground/80 italic">"{study.quote}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CasementCaseStudies;
