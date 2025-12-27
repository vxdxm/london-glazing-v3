
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PoundSterling, TrendingUp, Clock, Award } from "lucide-react";

const InvestmentROI = () => {
  const investments = [
    {
      icon: PoundSterling,
      title: "Typical Investment",
      value: "£300-£700",
      detail: "per window depending on size and specification",
      note: "A 50-room hotel typically invests £30,000-£50,000 for complete installation"
    },
    {
      icon: TrendingUp,
      title: "Energy Savings",
      value: "30-50%",
      detail: "reduction in heating/cooling costs",
      note: "Delivers £8,000-£15,000 annual savings for typical properties"
    },
    {
      icon: Award,
      title: "Revenue Benefits",
      value: "15-25%",
      detail: "improvement in guest satisfaction scores",
      note: "Improved ratings increase direct bookings and reduce OTA commission costs"
    },
    {
      icon: Clock,
      title: "Payback Period",
      value: "2-4 years",
      detail: "typical ROI achievement",
      note: "20+ year lifespan ensuring long-term value"
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Investment & ROI Analysis</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {investments.map((item, index) => (
          <Card key={index} className="text-center border-primary/20">
            <CardHeader className="pb-2">
              <item.icon className="h-10 w-10 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary mb-1">{item.value}</p>
              <p className="text-sm text-muted-foreground mb-2">{item.detail}</p>
              <p className="text-xs text-muted-foreground/80">{item.note}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InvestmentROI;
