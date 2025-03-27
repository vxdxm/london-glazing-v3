
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";

interface FullWidthServiceCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  linkPath: string;
  linkText: string;
  icon?: React.ReactNode;
}

export const FullWidthServiceCard = ({
  imageSrc,
  imageAlt,
  title,
  description,
  linkPath,
  linkText,
  icon,
}: FullWidthServiceCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow md:col-span-2">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <AspectRatio ratio={16/9} className="h-full">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover md:rounded-l-lg md:rounded-r-none rounded-t-lg md:rounded-t-none"
              />
            </AspectRatio>
          </div>
          <div className="p-6 md:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2">
              {icon && icon}
              <h2 className="text-2xl font-semibold">{title}</h2>
            </div>
            <p className="text-gray-600 mb-4">{description}</p>
            <Link to={linkPath} className="text-primary hover:underline">{linkText}</Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
