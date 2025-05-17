
import { Helmet } from "react-helmet";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { createPageSchema } from "@/utils/seo";

const EducationalSector = () => {
  const pageMetadata = {
    title: "Secondary Glazing for Schools and Universities | Educational Sector",
    description: "Specialized secondary glazing solutions for educational institutions. Improve energy efficiency, reduce noise, and create optimal learning environments in schools, colleges, and universities.",
    canonicalPath: "/commercial/educational-sector",
    imageUrl: "/lovable-uploads/1c6ae08e-8c9d-4d76-a036-5b7643b5f28a.jpg",
    type: "article" as const,
    publishedDate: "2025-03-15",
    modifiedDate: "2025-05-17",
    keywords: ["educational glazing", "school windows", "university glazing", "classroom noise reduction", "energy efficient schools", "learning environment", "acoustic glazing for schools", "university buildings"]
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
        
        {/* Service structured data */}
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Educational Sector Secondary Glazing Solutions",
            "description": "Specialized secondary glazing solutions for educational institutions. Improve energy efficiency, reduce noise, and create optimal learning environments in schools, colleges, and universities.",
            "provider": {
              "@type": "Organization",
              "name": "Secondary Glazing Specialist",
              "logo": {
                "@type": "ImageObject",
                "url": "https://secondaryglazingspecialist.com/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg"
              }
            },
            "image": "https://secondaryglazingspecialist.com/lovable-uploads/1c6ae08e-8c9d-4d76-a036-5b7643b5f28a.jpg",
            "serviceType": "Secondary Glazing Installation",
            "serviceArea": {
              "@type": "Place",
              "name": "London, United Kingdom"
            },
            "audience": {
              "@type": "Audience",
              "audienceType": "Educational Institutions"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://secondaryglazingspecialist.com/commercial/educational-sector"
            }
          }
        `}
        </script>
      </Helmet>
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <BreadcrumbNav />
        <h1 className="text-4xl font-bold mb-4">Secondary Glazing Solutions for Educational Institutions</h1>
        <div className="prose max-w-none mb-8 text-gray-600">
          <p className="text-lg">
            Educational institutions face unique challenges when it comes to creating optimal learning environments. Our specialized secondary glazing solutions for schools, colleges, and universities help address these challenges by improving thermal efficiency, reducing external noise, and enhancing security while maintaining the aesthetic integrity of the building.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow h-full">
            <div className="w-full h-48 overflow-hidden">
              <img 
                alt="Classroom with secondary glazing" 
                className="w-full h-full object-cover" 
                src="/lovable-uploads/1c6ae08e-8c9d-4d76-a036-5b7643b5f28a.jpg" 
              />
            </div>
            <CardHeader>
              <CardTitle>Acoustic Secondary Glazing for Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Our acoustic secondary glazing reduces external noise by up to 80%, creating quieter classrooms that enhance concentration and learning outcomes for students of all ages.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow h-full">
            <div className="w-full h-48 overflow-hidden">
              <img 
                alt="Energy efficient educational building" 
                className="w-full h-full object-cover" 
                src="/lovable-uploads/976ac845-a391-42fe-ba2e-dbe7893b2ded.jpg" 
              />
            </div>
            <CardHeader>
              <CardTitle>Thermal Secondary Glazing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Reduce heating costs and carbon footprint with our thermal insulation solutions. Our secondary glazing can help educational institutions meet sustainability targets and reduce operational costs.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow h-full">
            <div className="w-full h-48 overflow-hidden">
              <img 
                alt="Secure school windows" 
                className="w-full h-full object-cover" 
                src="/lovable-uploads/ef528e3e-c607-4674-a887-b1635565f167.jpg" 
              />
            </div>
            <CardHeader>
              <CardTitle>Security Enhanced Secondary Glazing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Our security glazing solutions provide additional protection for educational facilities, helping to safeguard students, staff, and valuable equipment without compromising on aesthetics.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Benefits of Secondary Glazing for Educational Institutions</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Improved acoustic environment for better learning outcomes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Enhanced thermal efficiency reducing heating and cooling costs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Additional security layer for student and staff safety</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Preservation of heritage buildings while meeting modern standards</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Compliance with building regulations and sustainability requirements</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Reduced maintenance costs compared to full window replacement</span>
            </li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Educational Sector Secondary Glazing Projects</h2>
          <p className="text-gray-600 mb-8">
            We have successfully installed secondary glazing systems in numerous educational establishments across London and the surrounding areas, from primary schools to universities. Our experienced team understands the unique requirements of educational buildings and can work around academic schedules to minimize disruption.
          </p>
          <div className="flex justify-center">
            <Link to="/quote-request" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors">
              Request a Consultation
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EducationalSector;
