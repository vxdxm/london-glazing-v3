import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer"; // Changed from dynamic to static import
import { Card, CardContent } from "@/components/ui/card";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Helmet } from "react-helmet";
import { Shield, Sun, Sofa, Palette } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";

const UVProtection = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>UV Protection Secondary Glazing | Furniture & Art Protection</title>
        <meta 
          name="description" 
          content="Protect your furnishings, artwork, and interiors from UV damage with specialized secondary glazing solutions. Learn about UV filtering technology and preservation benefits." 
        />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/specialized/uv-protection" />
        <link rel="preload" href="/lovable-uploads/43d4f1cb-1c9a-460e-b2f5-37e4c742df34.jpg" as="image" />
      </Helmet>
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <BreadcrumbNav />
        <h1 className="text-4xl font-bold mb-8">UV Protection Secondary Glazing</h1>
        
        {/* Rest of your component remains exactly the same */}
        {/* ... */}
        
      </div>
      <Footer />
    </div>
  );
};

export default UVProtection;