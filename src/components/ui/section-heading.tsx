
import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center" | "right";
  /** Render the title as the page H1 (use once per page). */
  as?: "h1" | "h2";
}

export const SectionHeading = ({
  id,
  title,
  subtitle,
  className,
  align = "left",
  as: Tag = "h2",
}: SectionHeadingProps) => {
  const alignment = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div id={id} className={cn("mb-6", alignment[align], className)}>
      <Tag className="text-3xl font-semibold mb-2">{title}</Tag>
      {subtitle && <p className="text-gray-600">{subtitle}</p>}
    </div>
  );
};
