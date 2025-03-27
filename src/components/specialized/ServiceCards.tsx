
import React from "react";
import { ServiceCard } from "./ServiceCard";
import { FullWidthServiceCard } from "./FullWidthServiceCard";
import { Earth, Wrench, Volume2, Maximize2, Building } from "lucide-react";

export const ServiceCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <ServiceCard 
        imageSrc="/lovable-uploads/7891494f-5e77-40d3-b5fc-cabf6262f2fe.png"
        imageAlt="Air gap spacing diagram for secondary glazing"
        title="Air Gap Secondary Glazing"
        description="Learn about optimal air gap distances in secondary glazing installations. Our expert guide covers how 100mm and 150mm cavity spacing affects thermal and acoustic performance."
        linkPath="/air-gap-secondary-glazing"
        linkText="Explore Air Gap Secondary Glazing"
        icon={<Maximize2 className="h-5 w-5 text-blue-600" />}
      />

      <ServiceCard
        imageSrc="/lovable-uploads/f491fe90-350d-4010-9359-769a93c85044.png"
        imageAlt="Original window with secondary glazing installation"
        title="Heritage Window Solutions"
        description="Preserve your original windows while enhancing their performance. Our secondary glazing solutions for heritage properties maintain historical integrity while improving insulation."
        linkPath="/specialized/secondary-glazing-original-windows"
        linkText="Learn about Original Window Solutions"
        icon={<Building className="h-5 w-5 text-amber-700" />}
      />

      <ServiceCard
        imageSrc="/lovable-uploads/9ff3e6d6-15f4-4553-8354-cd715631af50.png"
        imageAlt="Acoustic glazing installation showing sound dampening features"
        title="Acoustic Glazing"
        description="Our acoustic glazing solutions significantly reduce external noise, creating a peaceful indoor environment perfect for urban properties."
        linkPath="/specialized/acoustic-glazing"
        linkText="Learn more about Acoustic Glazing"
      />

      <ServiceCard
        imageSrc="/lovable-uploads/6dc186a4-6846-4f8f-ba1a-8bcbdbdac94c.png"
        imageAlt="Thermal insulation glazing demonstration"
        title="Thermal Insulation"
        description="Improve your property's energy efficiency with our thermal insulation solutions, reducing heat loss and energy bills."
        linkPath="/specialized/thermal-insulation"
        linkText="Learn more about Thermal Insulation"
      />

      <ServiceCard
        imageSrc="/lovable-uploads/963badc7-4485-4f5d-9f11-27736802f9fe.png"
        imageAlt="Security glazing features and installation"
        title="Security Glazing"
        description="Enhance your property's security with our reinforced secondary glazing options, providing peace of mind without compromising on style."
        linkPath="/specialized/security-glazing"
        linkText="Learn more about Security Glazing"
      />

      <ServiceCard
        imageSrc="/lovable-uploads/421bc849-0e6d-479e-a002-22fe336f654a.png"
        imageAlt="Condensation control system demonstration"
        title="Condensation Control"
        description="Combat condensation issues effectively with our specialized glazing solutions, maintaining a healthier indoor environment."
        linkPath="/specialized/condensation-control"
        linkText="Learn more about Condensation Control"
      />
      
      <ServiceCard
        imageSrc="/lovable-uploads/3fab2280-476f-4095-a2cf-83d2f4485ca3.png"
        imageAlt="Secondary glazing repair specialist fixing vertical sliding mechanisms"
        title="Secondary Glazing Repairs"
        description="Expert repair services for secondary glazing, specializing in spiral balances for vertical sliding units and other common issues."
        linkPath="/secondary-glazing-repairs"
        linkText="Learn about our Repair Services"
        icon={<Wrench className="h-5 w-5 text-sky-700" />}
      />
      
      <ServiceCard
        imageSrc="/lovable-uploads/90c68028-9503-4ba2-b65b-9cfce4cd13a0.jpg"
        imageAlt="Sound transmission guide and acoustic measurement diagram"
        title="Understanding Sound & Noise Reduction"
        description="Comprehensive guide to understanding decibels, sound transmission, and how secondary glazing can reduce external noise by up to 80%. Essential reading for noise-affected properties."
        linkPath="/specialized/sound-transmission-guide"
        linkText="Explore our Sound Transmission Guide"
        icon={<Volume2 className="h-5 w-5 text-blue-600" />}
      />
      
      <FullWidthServiceCard
        imageSrc="/lovable-uploads/41ac9ed1-11cf-4479-90f7-8aa763917c75.jpg"
        imageAlt="Environmental impact of secondary glazing visualized with eco-friendly imagery"
        title="Sustainability Impact"
        description="Discover the environmental benefits of secondary glazing, from reduced carbon emissions to energy conservation. Our sustainability tracker helps you visualize your contribution to a greener planet."
        linkPath="/sustainability-impact-tracker-secondary-glazing"
        linkText="Explore the Sustainability Impact Tracker"
        icon={<Earth className="h-6 w-6 text-green-600" />}
      />
    </div>
  );
};
