import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { createPageSchema } from "@/utils/seo";
import { Store, ShieldCheck, ThermometerSun, Volume2, Eye, Clock } from "lucide-react";

const RetailSpaces = () => {
  const navigate = useNavigate();
  
  const pageMetadata = {
    title: "Retail Secondary Glazing Solutions | Shop & Store Windows London",
    description: "Specialized secondary glazing for retail spaces and shops. Enhance customer experience with noise reduction, thermal comfort, security, and UV protection for merchandise displays.",
    canonicalPath: "/commercial/retail-spaces",
    imageUrl: "/lovable-uploads/41ac9ed1-11cf-4479-90f7-8aa763917c75.jpg",
    type: "website" as const,
    keywords: ["retail glazing", "shop windows", "store glazing", "retail security", "display window glazing", "London retail", "commercial shop windows"]
  };

  const pageSchema = createPageSchema(pageMetadata);

  const benefits = [
    {
      icon: Volume2,
      title: "Noise Reduction",
      description: "Create a peaceful shopping environment by reducing street noise by up to 80%, allowing customers to browse comfortably."
    },
    {
      icon: ThermometerSun,
      title: "Temperature Control",
      description: "Maintain consistent temperatures year-round, reducing heating and cooling costs while improving customer comfort."
    },
    {
      icon: ShieldCheck,
      title: "Enhanced Security",
      description: "Additional layer of protection against break-ins and vandalism, safeguarding your merchandise and premises."
    },
    {
      icon: Eye,
      title: "UV Protection",
      description: "Protect merchandise from sun damage and fading with UV-filtering glass options for display windows."
    },
    {
      icon: Store,
      title: "Heritage Compliance",
      description: "Preserve original shopfront character in conservation areas while achieving modern performance standards."
    },
    {
      icon: Clock,
      title: "Minimal Disruption",
      description: "Quick installation with minimal impact on trading hours, keeping your business running smoothly."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{pageMetadata.title}</title>
        <meta name="description" content={pageMetadata.description} />
        <meta name="keywords" content={pageMetadata.keywords?.join(", ")} />
        <link rel="canonical" href={`https://secondaryglazingspecialist.com${pageMetadata.canonicalPath}`} />
        <meta property="og:title" content={pageMetadata.title} />
        <meta property="og:description" content={pageMetadata.description} />
        <meta property="og:type" content={pageMetadata.type} />
        <script type="application/ld+json">{pageSchema}</script>
      </Helmet>
      
      <MainNav />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Store className="w-4 h-4" />
                Retail & Shop Solutions
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Retail Spaces & Shops Secondary Glazing
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Transform your retail environment with secondary glazing solutions that enhance customer experience, 
                protect merchandise, reduce energy costs, and maintain security – all while preserving your shopfront aesthetics.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => navigate("/quote-request")}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Get Free Retail Assessment
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => navigate("/commercial")}
                >
                  View All Commercial Solutions
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Key Benefits for Retail Environments
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive improvements that enhance customer experience and protect your investment
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <benefit.icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Retail Types */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Perfect for All Retail Types
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "High Street Shops",
                "Boutique Stores",
                "Shopping Centre Units",
                "Heritage Shopfronts",
                "Restaurant Frontages",
                "Gallery Spaces",
                "Jewellery Stores",
                "Fashion Retailers"
              ].map((type, index) => (
                <div key={index} className="bg-card p-4 rounded-lg border text-center hover:shadow-md transition-shadow">
                  <span className="text-foreground font-medium">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Enhance Your Retail Space?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Contact us for a free consultation and discover how secondary glazing can transform your shop environment.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => navigate("/quote-request")}
            >
              Get Your Free Quote
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default RetailSpaces;
