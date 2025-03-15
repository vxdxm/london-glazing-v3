
import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export const SectionHeading = ({
  id,
  title,
  subtitle,
  className,
  align = "left",
}: SectionHeadingProps) => {
  const alignment = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div id={id} className={cn("mb-6", alignment[align], className)}>
      <h2 className="text-3xl font-semibold mb-2">{title}</h2>
      {subtitle && <p className="text-gray-600">{subtitle}</p>}
    </div>
  );
};
