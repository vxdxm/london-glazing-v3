
import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface KeyPointProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "secondary" | "outline";
}

export const KeyPoint = ({
  title,
  children,
  className,
  variant = "default",
}: KeyPointProps) => {
  return (
    <div className={cn("mb-4", className)}>
      <Badge variant={variant} className="mb-2">{title}</Badge>
      <p className="text-gray-600">{children}</p>
    </div>
  );
};
