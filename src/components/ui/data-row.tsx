
import React from "react";
import { cn } from "@/lib/utils";

interface DataRowProps {
  label: string;
  value: React.ReactNode;
  className?: string;
}

export const DataRow = ({ label, value, className }: DataRowProps) => {
  return (
    <div className={cn("flex justify-between py-2 border-b border-gray-100 last:border-0", className)}>
      <span className="font-medium text-gray-700">{label}</span>
      <span className="text-gray-600">{value}</span>
    </div>
  );
};
