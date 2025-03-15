
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface InfoCardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
}

export const InfoCard = ({ 
  title, 
  children, 
  className, 
  highlight = false 
}: InfoCardProps) => {
  return (
    <Card className={cn(
      "overflow-hidden transition-shadow hover:shadow-md", 
      highlight && "border-primary/40 bg-primary/5",
      className
    )}>
      <CardContent className="p-6">
        {title && <h3 className="text-xl font-semibold mb-4">{title}</h3>}
        {children}
      </CardContent>
    </Card>
  );
};
