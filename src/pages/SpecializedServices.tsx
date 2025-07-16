
import { MainNav } from "@/components/MainNav";
import { PageHeader } from "@/components/specialized/PageHeader";
import { ServiceCards } from "@/components/specialized/ServiceCards";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { createPageSchema } from "@/utils/seo";

const SpecializedServices = () => {
  const pageMetadata = {
    title: "Specialized Secondary Glazing Services | Acoustic & Thermal Solutions",
    description: "Expert specialized secondary glazing services including acoustic glazing, thermal insulation, and security solutions. Professional installation for specific requirements.",
    canonicalPath: "/specialized",
    imageUrl: "/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg",
    type: "website" as const,
    publishedDate: "2024-06-01",
    modifiedDate: "2025-05-17",
    keywords: ["specialized glazing", "acoustic glazing", "thermal insulation", "security glazing", "noise reduction", "energy efficiency", "London specialist", "air gap secondary glazing", "condensation control"]
  };

  const pageSchema = createPageSchema(pageMetadata);

  // Add logging for indexing
  useEffect(() => {
    console.log("Specialized Services page loaded for indexing");
  }, []);

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
        
        {/* Breadcrumb structured data */}
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://secondaryglazingspecialist.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Specialized Services",
                "item": "https://secondaryglazingspecialist.com${pageMetadata.canonicalPath}"
              }
            ]
          }
        `}
        </script>
      </Helmet>
      <MainNav />
      <main id="main-content" className="container mx-auto px-4 py-16">
        <BreadcrumbNav />
        <PageHeader />
        <ServiceCards />
      </main>
      <Footer />
    </div>
  );
};

export default SpecializedServices;
