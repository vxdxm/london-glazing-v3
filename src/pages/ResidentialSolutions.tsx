
import { Helmet } from "react-helmet";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const residentialServices = [
  {
    title: "Sash Windows",
    description: "Perfect for traditional Victorian and Georgian properties",
    details: "Our sash window solutions preserve the original character of your period property while providing modern insulation benefits. We use specially designed systems that complement existing window frames.",
    image: "/lovable-uploads/9d38f051-c9a7-48cb-8b79-5166e75a3f64.png",
    path: "/residential/sash-windows"
  },
  {
    title: "Casement Windows",
    description: "Ideal for modern homes and apartments",
    details: "Custom-fitted secondary glazing for casement windows, offering excellent thermal and acoustic insulation without compromising the window's functionality.",
    image: "/lovable-uploads/2363aeff-ca37-4a34-91c1-75267dfaae9f.png",
    path: "/residential/casement-windows"
  },
  {
    title: "Bay Windows",
    description: "Specialized solutions for bay window configurations",
    details: "Expertly designed secondary glazing systems that follow the contours of your bay windows, maintaining their aesthetic appeal while improving insulation.",
    image: "/lovable-uploads/963badc7-4485-4f5d-9f11-27736802f9fe.png",
    path: "/residential/bay-windows"
  },
  {
    title: "Horizontal Sliding",
    description: "Perfect for wide window openings",
    details: "Smooth-operating horizontal sliding panels that provide easy access to primary windows. Ideal for large windows and offering excellent ventilation options.",
    image: "/lovable-uploads/05d0c1b7-76e1-4670-9f8f-60e65dad2615.png",
    path: "/residential/horizontal-sliding"
  },
  {
    title: "Lift Out",
    description: "Simple and practical solution",
    details: "Removable panels that can be completely lifted out for easy cleaning and maintenance. Perfect for windows that require occasional full access.",
    image: "/lovable-uploads/2227be6b-9b45-485d-b57b-69efaee9a8fe.png",
    path: "/residential/lift-out"
  },
  {
    title: "Combination",
    description: "Versatile mixed-style solutions",
    details: "Combining different opening styles in one unit to meet specific requirements. Ideal for unique window configurations or when different functionalities are needed.",
    image: "/lovable-uploads/41fdf8fc-4bed-4792-87dd-45ca3fa377de.png",
    path: "/residential/combination"
  },
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
          {residentialServices.map((service) => (
            <Card 
              key={service.title} 
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => navigate(service.path)}
            >
              <CardHeader>
                <div className="w-full h-48 mb-4 overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-sm text-gray-500">{service.details}</p>
              </CardContent>
            </Card>
          ))}
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
