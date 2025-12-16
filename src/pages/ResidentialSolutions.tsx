
import { Helmet } from "react-helmet";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  FixedPanelIcon, 
  HingedPanelIcon, 
  VerticalSlidingIcon, 
  HorizontalSlidingIcon, 
  LiftOutIcon, 
  CasementIcon,
  MagneticIcon,
  TiltTurnIcon
} from "@/components/icons/GlazingTypeIcons";
import type { FC } from "react";

interface ResidentialService {
  title: string;
  description: string;
  details: string;
  image: string;
  path: string;
  icon?: FC<{ className?: string; size?: number }>;
}

const residentialServices: ResidentialService[] = [
  {
    title: "Sash Windows",
    description: "Perfect for traditional Victorian and Georgian properties",
    details: "Our sash window solutions preserve the original character of your period property while providing modern insulation benefits. We use specially designed systems that complement existing window frames.",
    image: "/lovable-uploads/9d38f051-c9a7-48cb-8b79-5166e75a3f64.png",
    path: "/residential/sash-windows",
    icon: VerticalSlidingIcon
  },
  {
    title: "Casement Windows",
    description: "Ideal for modern homes and apartments",
    details: "Custom-fitted secondary glazing for casement windows, offering excellent thermal and acoustic insulation without compromising the window's functionality.",
    image: "/lovable-uploads/2363aeff-ca37-4a34-91c1-75267dfaae9f.png",
    path: "/residential/casement-windows",
    icon: CasementIcon
  },
  {
    title: "Bay Windows",
    description: "Specialized solutions for bay window configurations",
    details: "Expertly designed secondary glazing systems that follow the contours of your bay windows, maintaining their aesthetic appeal while improving insulation.",
    image: "/lovable-uploads/963badc7-4485-4f5d-9f11-27736802f9fe.png",
    path: "/residential/bay-windows",
    icon: HingedPanelIcon
  },
  {
    title: "Horizontal Sliding",
    description: "Perfect for wide window openings",
    details: "Smooth-operating horizontal sliding panels that provide easy access to primary windows. Ideal for large windows and offering excellent ventilation options.",
    image: "/lovable-uploads/05d0c1b7-76e1-4670-9f8f-60e65dad2615.png",
    path: "/residential/horizontal-sliding",
    icon: HorizontalSlidingIcon
  },
  {
    title: "Lift Out",
    description: "Simple and practical solution",
    details: "Removable panels that can be completely lifted out for easy cleaning and maintenance. Perfect for windows that require occasional full access.",
    image: "/lovable-uploads/2227be6b-9b45-485d-b57b-69efaee9a8fe.png",
    path: "/residential/lift-out",
    icon: LiftOutIcon
  },
  {
    title: "Combination",
    description: "Versatile mixed-style solutions",
    details: "Combining different opening styles in one unit to meet specific requirements. Ideal for unique window configurations or when different functionalities are needed.",
    image: "/lovable-uploads/41fdf8fc-4bed-4792-87dd-45ca3fa377de.png",
    path: "/residential/combination",
    icon: TiltTurnIcon
  },
  {
    title: "Crittall Windows",
    description: "Heritage-sensitive secondary glazing solutions for Crittall windows",
    details: "Enhance thermal performance while preserving the iconic aesthetic of your Crittall windows. Perfect for period properties and listed buildings.",
    image: "/lovable-uploads/614f68f6-ff97-437b-894a-29e8b8c5d9ac.png",
    path: "/residential/crittall-windows",
    icon: FixedPanelIcon
  },
  {
    title: "Single & Double Glazed",
    description: "Compare single and double glazed secondary window options",
    details: "Discover the benefits and differences between single and double glazed secondary windows to find the perfect solution for your property's needs.",
    image: "/lovable-uploads/bb1e765e-3b82-4d6d-a206-31bdf9c0af0d.png",
    path: "/residential/single-double-glazed",
    icon: FixedPanelIcon
  },
  {
    title: "Energy Performance",
    description: "Maximize your home's energy efficiency with our secondary glazing solutions",
    details: "Learn how secondary glazing can improve your home's thermal performance, reduce energy bills, and create a more comfortable living environment.",
    image: "/lovable-uploads/2f4fa321-a97b-487b-a0f2-bb38093e6ca3.jpg",
    path: "/residential/energy-performance",
    icon: MagneticIcon
  },
  {
    title: "Modern Solutions",
    description: "Contemporary window design and functionality",
    details: "Discover our modern secondary glazing solutions that combine cutting-edge technology with sleek design for today's homes.",
    image: "/lovable-uploads/c346e589-42af-4989-9b7d-29bc69feea06.png",
    path: "/residential/modern-solutions",
    icon: HorizontalSlidingIcon
  },
  {
    title: "Traditional Options",
    description: "Classic window styles preserved with modern technology",
    details: "Preserve the historic character of your property while enjoying modern comfort with our traditional glazing solutions.",
    image: "/lovable-uploads/5592528a-f976-44e2-a6af-e79c4a3c3f18.png",
    path: "/residential/traditional-options",
    icon: VerticalSlidingIcon
  },
  {
    title: "Fixed Secondary Glazing",
    description: "Permanent insulation solutions for non-opening windows",
    details: "Our fixed secondary glazing provides maximum thermal and acoustic insulation for windows that don't require regular access. Perfect for high-level windows or where maximum efficiency is priority.",
    image: "/lovable-uploads/79704a01-b2d6-4a7a-bafa-92ca6af81c70.png",
    path: "/residential/fixed-secondary-glazing",
    icon: FixedPanelIcon
  }
];

const ResidentialSolutions = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Residential Secondary Glazing Solutions | Home Window Upgrades</title>
        <meta name="description" content="Transform your home with our residential secondary glazing solutions. Expert installation for sash windows, casement windows, bay windows and more. Enhanced comfort and energy efficiency." />
        <meta name="keywords" content="residential glazing, home windows, sash windows, casement windows, bay windows, thermal insulation, noise reduction, home improvement, combination windows" />
        <meta property="og:title" content="Residential Secondary Glazing Solutions | Home Window Upgrades" />
        <meta property="og:description" content="Expert residential secondary glazing solutions for your home. Enhance comfort, reduce noise, and improve energy efficiency with our custom combination window options." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.secondaryglazingspecialist.com/residential" />
      </Helmet>
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Residential Solutions</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {residentialServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title} 
                className="hover:shadow-lg transition-shadow cursor-pointer group"
                onClick={() => navigate(service.path)}
              >
                <CardHeader>
                  <div className="w-full h-48 mb-4 overflow-hidden rounded-t-lg relative">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    {IconComponent && (
                      <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-800/90 p-2 rounded-lg shadow-md backdrop-blur-sm">
                        <IconComponent size={32} className="text-primary" />
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    {IconComponent && (
                      <IconComponent size={28} className="text-primary flex-shrink-0" />
                    )}
                    <CardTitle>{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="text-sm text-gray-500">{service.details}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Maintenance & Repairs</h2>
          <p className="text-gray-700 mb-6">
            Already have secondary glazing installed? We offer comprehensive repair and maintenance services to keep your 
            glazing in perfect working condition.
          </p>
          <Button asChild>
            <Link to="/secondary-glazing-repairs">View Repair Services</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResidentialSolutions;
