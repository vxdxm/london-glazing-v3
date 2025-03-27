
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  linkPath: string;
  linkText: string;
  icon?: React.ReactNode;
}

export const ServiceCard = ({
  imageSrc,
  imageAlt,
  title,
  description,
  linkPath,
  linkText,
  icon,
}: ServiceCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        <AspectRatio ratio={16/9}>
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover rounded-t-lg"
          />
        </AspectRatio>
        <div className="p-6">
          {icon ? (
            <div className="flex items-center gap-2 mb-2">
              {icon}
              <h2 className="text-2xl font-semibold">{title}</h2>
            </div>
          ) : (
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
          )}
          <p className="text-gray-600 mb-4">{description}</p>
          <Link to={linkPath} className="text-primary hover:underline">
            {linkText}
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
