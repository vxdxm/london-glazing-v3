import React from "react";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Home, Landmark, Volume2, Thermometer, Shield } from "lucide-react";

const caseStudies = [
  {
    title: "Grade II Listed Georgian Townhouse, Belgravia",
    category: "Listed Buildings",
    icon: Landmark,
    challenge: "Original sash windows dating from 1820 required preservation while reducing significant traffic noise from a busy London street.",
    solution: "Installed slim-profile secondary glazing with acoustic laminated glass, maintaining the period aesthetic while achieving 42dB noise reduction.",
    results: ["42dB noise reduction", "65% heat loss reduction", "Full planning approval", "Original windows preserved"],
    link: "/listed-buildings-secondary-glazing"
  },
  {
    title: "Victorian Terrace, Islington Conservation Area",
    category: "Conservation Areas",
    icon: Home,
    challenge: "Victorian bay windows with single glazing causing severe heat loss and condensation issues in a designated conservation area.",
    solution: "Custom-made curved secondary glazing panels to match the bay window profile, using low-E glass for enhanced thermal performance.",
    results: ["70% reduction in heating bills", "Condensation eliminated", "Conservation approval granted", "U-value improved from 5.0 to 1.8"],
    link: "/conservation-areas-secondary-glazing"
  },
  {
    title: "Canary Wharf Commercial Office",
    category: "Commercial",
    icon: Building2,
    challenge: "Open-plan office experiencing significant noise pollution from adjacent construction works affecting employee productivity.",
    solution: "Full building secondary glazing installation completed over two weekends to minimize business disruption, using 10.8mm acoustic glass.",
    results: ["50dB noise reduction", "Zero business downtime", "Improved staff wellbeing", "Energy costs reduced by 40%"],
    link: "/commercial/office-buildings"
  },
  {
    title: "Period Property Near Heathrow Flight Path",
    category: "Noise Reduction",
    icon: Volume2,
    challenge: "Beautiful Edwardian home suffering from severe aircraft noise, with sound levels exceeding 85dB during peak times.",
    solution: "Specialist acoustic secondary glazing with maximum air gap and triple-layer laminated glass throughout the property.",
    results: ["55dB noise reduction", "Sleep quality restored", "Property value increased", "Original character maintained"],
    link: "/noise-reduction-secondary-glazing"
  },
  {
    title: "Victorian School Building, Camden",
    category: "Educational",
    icon: Building2,
    challenge: "Historic school building with original windows requiring thermal upgrade without altering protected facade.",
    solution: "Magnetic secondary glazing system allowing easy removal for cleaning and maintenance, with thermal and acoustic benefits.",
    results: ["Heating costs reduced 50%", "Classroom noise reduced", "Easy maintenance access", "Heritage preserved"],
    link: "/commercial/educational-sector"
  },
  {
    title: "Georgian Property, Richmond",
    category: "Thermal Insulation",
    icon: Thermometer,
    challenge: "Large Georgian windows causing extreme cold drafts in winter and overheating in summer, with annual heating bills exceeding £4,000.",
    solution: "Slim-line secondary glazing with solar control glass to reduce summer heat gain while improving winter insulation.",
    results: ["Annual savings of £2,400", "Year-round comfort", "UV protection added", "Heritage maintained"],
    link: "/thermal-insulation-secondary-glazing"
  }
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Case Studies | Secondary Glazing Success Stories | London</title>
        <meta 
          name="description" 
          content="Explore our secondary glazing case studies from listed buildings, conservation areas, and commercial properties across London. See real results and solutions."
        />
        <meta name="keywords" content="secondary glazing case studies, glazing success stories, listed building glazing examples, conservation area windows" />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/case-studies" />
      </Helmet>

      <MainNav />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Secondary Glazing Case Studies
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we've transformed properties across London with bespoke secondary glazing solutions. 
            From Grade II listed buildings to modern commercial offices, see our work in action.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <study.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-primary">{study.category}</span>
                  </div>
                  <CardTitle className="text-xl">{study.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="space-y-4 flex-1">
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-1">The Challenge</h4>
                      <p className="text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-1">Our Solution</h4>
                      <p className="text-sm">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2">Results</h4>
                      <ul className="grid grid-cols-2 gap-1">
                        {study.results.map((result, i) => (
                          <li key={i} className="text-xs bg-secondary/50 px-2 py-1 rounded">
                            ✓ {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Link to={study.link} className="mt-4">
                    <Button variant="outline" className="w-full">
                      Learn More About This Service
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Property?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of satisfied customers across London. Get a free consultation and quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote-request">
              <Button size="lg" variant="secondary">
                Request a Free Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
