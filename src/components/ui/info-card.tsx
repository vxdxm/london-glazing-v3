
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface InfoCardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
  icon?: React.ReactNode;
  headerClassName?: string;
  contentClassName?: string;
}

export const InfoCard = ({ 
  title, 
  children, 
  className, 
  highlight = false,
  icon,
  headerClassName,
  contentClassName,
}: InfoCardProps) => {
  return (
    <Card className={cn(
      "overflow-hidden transition-shadow hover:shadow-md", 
      highlight && "border-primary/40 bg-primary/5",
      className
    )}>
      {title && (
        <CardHeader className={headerClassName}>
          {icon && icon}
          <CardTitle className={cn("flex items-center gap-2", { "mt-2": icon })}>
            {title}
          </CardTitle>
        </CardHeader>
      )}
      <CardContent className={cn("p-6", { "pt-0": title }, contentClassName)}>
        {children}
      </CardContent>
    </Card>
  );
};
