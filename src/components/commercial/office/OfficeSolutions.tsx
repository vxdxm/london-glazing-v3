
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Briefcase, TrendingUp, Cpu, Landmark, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const OfficeSolutions = () => {
  const solutions = [
    {
      icon: Building2,
      title: "Corporate Headquarters",
      location: "City of London and Canary Wharf",
      description: "Towers benefit from improved climate control and acoustic comfort across multiple floors.",
      link: "/areas/central-london"
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      location: "Holborn and West End",
      description: "Law firms and consultancies require quiet environments for confidential meetings and concentrated work.",
      link: "/areas/central-london"
    },
    {
      icon: TrendingUp,
      title: "Financial Services",
      location: "City and Canary Wharf",
      description: "Trading floors and client meeting areas need acoustic separation and temperature stability for optimal performance.",
      link: "/areas/east-london"
    },
    {
      icon: Cpu,
      title: "Tech Companies",
      location: "Shoreditch and Tech City",
      description: "Open-plan offices gain focused work zones through strategic acoustic glazing.",
      link: "/areas/east-london"
    },
    {
      icon: Landmark,
      title: "Heritage Office Buildings",
      location: "Westminster and Clerkenwell",
      description: "Listed and conservation area properties can upgrade performance without affecting historic character.",
      link: "/listed-buildings-secondary-glazing"
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Ideal Solutions for Every Office Type</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {solutions.map((solution, index) => (
          <Link key={index} to={solution.link}>
            <Card className="border-border hover:border-primary/40 transition-colors h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <solution.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{solution.title}</CardTitle>
                    <p className="text-sm text-primary">{solution.location}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{solution.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="bg-secondary/30 rounded-lg p-6">
        <h3 className="font-semibold mb-3">Heritage Office Buildings</h3>
        <p className="text-muted-foreground mb-4">
          Many London office buildings occupy <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">listed structures</Link> or are located in <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline">conservation areas</Link>. Secondary glazing is the ideal solution as it requires no <Link to="/blog/planning-permission-secondary-glazing-conservation-areas" className="text-primary hover:underline">planning permission</Link> and preserves original <Link to="/victorian-windows-secondary-glazing" className="text-primary hover:underline">Victorian</Link>, <Link to="/georgian-windows-secondary-glazing" className="text-primary hover:underline">Georgian</Link>, and <Link to="/edwardian-property-secondary-glazing" className="text-primary hover:underline">Edwardian</Link> windows.
        </p>
      </div>
    </div>
  );
};

export default OfficeSolutions;
