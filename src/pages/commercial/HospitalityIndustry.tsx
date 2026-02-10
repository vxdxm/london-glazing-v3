
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { createPageSchema } from "@/utils/seo";

const HospitalityIndustry = () => {
  const navigate = useNavigate();
  
  const pageMetadata = {
    title: "Secondary Glazing for Hospitality Industry | Hotels & Restaurants",
    description: "Specialized secondary glazing solutions for the hospitality sector. Create comfortable guest environments with superior noise reduction and energy efficiency.",
    canonicalPath: "/commercial/hospitality-industry",
    imageUrl: "/lovable-uploads/8c405e6d-83e1-4a0e-8cf5-de325c39e542.jpg",
    type: "website" as const,
    publishedDate: "2025-01-10",
    modifiedDate: "2025-05-17",
    keywords: ["hospitality glazing", "hotel windows", "restaurant glazing", "guest comfort", "noise reduction hospitality", "energy efficient hotels"]
  };

  const pageSchema = createPageSchema(pageMetadata);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{pageMetadata.title}</title>
        <meta name="description" content={pageMetadata.description} />
        <meta name="keywords" content={pageMetadata.keywords?.join(", ")} />
        <link rel="canonical" href={`https://secondaryglazingspecialist.com${pageMetadata.canonicalPath}`} />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={pageMetadata.title} />
        <meta property="og:description" content={pageMetadata.description} />
        <meta property="og:type" content={pageMetadata.type} />
        <meta property="og:url" content={`https://secondaryglazingspecialist.com${pageMetadata.canonicalPath}`} />
        {pageMetadata.imageUrl && <meta property="og:image" content={pageMetadata.imageUrl} />}
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageMetadata.title} />
        <meta name="twitter:description" content={pageMetadata.description} />
        {pageMetadata.imageUrl && <meta name="twitter:image" content={pageMetadata.imageUrl} />}
        
        {/* JSON-LD structured data */}
        <script type="application/ld+json">{pageSchema}</script>
      </Helmet>
      <MainNav />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Secondary Glazing for Hospitality Industry</h1>
          
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1518005020951-eccb494ad742"
              alt="Modern hotel building facade"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-6"
            />
          </div>

          <div className="space-y-6 text-lg">
            <p>
              Our premium secondary glazing solutions are specifically designed for the hospitality sector,
              helping create comfortable and peaceful environments for your guests.
            </p>

            <h2 className="text-2xl font-semibold mt-8">Key Benefits of Hospitality Secondary Glazing</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Superior noise reduction for peaceful guest rooms</li>
              <li>Enhanced temperature control for year-round comfort</li>
              <li>Elegant aesthetics that complement your property</li>
              <li>Energy efficiency to reduce operational costs</li>
              <li>UV protection to prevent furniture fading</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8">Perfect For Hospitality Buildings</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Hotels and resorts</li>
              <li>Restaurants and cafes</li>
              <li>Bars and lounges</li>
              <li>Spa and wellness centers</li>
              <li>Conference facilities</li>
            </ul>
          </div>

          <div className="mt-12 space-x-4">
            <Button 
              onClick={() => navigate("/quote-request")}
              className="bg-primary text-primary-foreground"
            >
              Request a Quote
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate("/commercial")}
            >
              Back to Commercial Solutions
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HospitalityIndustry;
