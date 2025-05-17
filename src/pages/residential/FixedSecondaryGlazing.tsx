
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import GlassOptions from "@/components/residential/GlassOptions";
import { KeyPoint } from "@/components/ui/key-point";
import { Helmet } from "react-helmet";
import { createPageSchema } from "@/utils/seo";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";

const FixedSecondaryGlazing = () => {
  // Define page metadata
  const pageMetadata = {
    title: "Fixed Secondary Glazing Solutions | Permanent Window Insulation",
    description: "Discover our fixed secondary glazing solutions for permanent thermal and acoustic insulation. Perfect for windows that don't need regular access.",
    canonicalPath: "/residential/fixed-secondary-glazing",
    imageUrl: "/lovable-uploads/79704a01-b2d6-4a7a-bafa-92ca6af81c70.png",
    type: "article" as const,
    publishedDate: "2025-05-09",
    modifiedDate: "2025-05-17",
    keywords: ["fixed secondary glazing", "permanent glazing", "window insulation", "thermal efficiency", "noise reduction", "historic buildings"]
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
        {pageMetadata.imageUrl && <meta property="og:image" content={`https://secondaryglazingspecialist.com${pageMetadata.imageUrl}`} />}
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageMetadata.title} />
        <meta name="twitter:description" content={pageMetadata.description} />
        {pageMetadata.imageUrl && <meta name="twitter:image" content={`https://secondaryglazingspecialist.com${pageMetadata.imageUrl}`} />}
        
        {/* JSON-LD structured data */}
        <script type="application/ld+json">{pageSchema}</script>
      </Helmet>
      
      <MainNav />
      <main className="container mx-auto px-4 py-16">
        <BreadcrumbNav />
        <div className="grid gap-12">
          <section>
            <h1 className="text-4xl font-bold mb-8">Fixed Secondary Glazing for Thermal Insulation & Noise Reduction</h1>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Energy-Efficient Fixed Secondary Glazing Solutions</h2>
                <p className="text-gray-700 mb-4">
                  In an era where sustainability and energy efficiency are at the forefront of architectural discussions, the preservation of historic buildings presents unique challenges. Historic structures often face issues related to energy loss due to outdated window systems. Implementing fixed secondary glazing offers a practical solution, enhancing energy efficiency while maintaining the building's historical integrity.
                </p>
              </div>
              <div>
                <AspectRatio ratio={16 / 9}>
                  <img src="/lovable-uploads/79704a01-b2d6-4a7a-bafa-92ca6af81c70.png" alt="Fixed Secondary Glazing Installation" className="rounded-lg object-cover w-full h-full" />
                </AspectRatio>
              </div>
            </div>

            <section className="mb-12">
              <SectionHeading title="Energy Savings Analysis" subtitle="Quantifiable benefits of fixed secondary glazing" />
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <KeyPoint title="Methodology">
                    Our comprehensive evaluation methodology involves detailed energy audits across various climates, utilizing energy modeling software and thermal imaging for precise data collection.
                  </KeyPoint>
                  <KeyPoint title="Results">
                    Buildings demonstrate reduced heat loss, with energy consumption decreasing by 30-50% during winter months. U-values improve from 2.0-3.0 W/m²K to 1.0-1.5 W/m²K.
                  </KeyPoint>
                </div>
                <div>
                  <AspectRatio ratio={4 / 3}>
                    <img alt="Energy Savings Demonstration" className="rounded-lg object-cover w-full h-full" src="/lovable-uploads/580ad3ed-9e6a-4a69-81ad-2a84b36a0150.jpg" />
                  </AspectRatio>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <SectionHeading title="Heritage Building Secondary Glazing" subtitle="Preserving historical value while improving efficiency" />
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <AspectRatio ratio={4 / 3}>
                    <img alt="Building Preservation" src="/lovable-uploads/c23f8df7-ca5f-4d5d-913a-5d6c11eae435.jpg" className="rounded-lg w-full h-full object-scale-down" />
                  </AspectRatio>
                </div>
                <div>
                  <KeyPoint title="Preservation">
                    Maintains architectural integrity while improving energy performance, ideal for historic buildings.
                  </KeyPoint>
                  <KeyPoint title="Structure">
                    Reduces thermal stress on building envelope and provides additional protection against environmental factors.
                  </KeyPoint>
                  <KeyPoint title="Compliance">
                    Meets preservation guidelines while enhancing energy efficiency.
                  </KeyPoint>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <SectionHeading title="Comparison with Other Solutions" />
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Fixed Secondary Glazing</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Preserves original windows</li>
                    <li>Cost-effective solution</li>
                    <li>Minimal disruption</li>
                    <li>Reversible installation</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Traditional Double Glazing</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Requires window replacement</li>
                    <li>Higher installation cost</li>
                    <li>Alters original appearance</li>
                    <li>Permanent modification</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Window Replacement</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Complete window removal</li>
                    <li>Highest cost option</li>
                    <li>Loss of historical value</li>
                    <li>Major structural changes</li>
                  </ul>
                </div>
              </div>
            </section>

            <GlassOptions />

            <section className="mb-12">
              <SectionHeading title="Conclusion" subtitle="Making the right choice for your property" />
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-4">
                  The implementation of fixed secondary glazing offers a compelling solution to enhance energy efficiency while preserving architectural integrity. With substantial energy consumption reductions and long-term financial benefits, it presents an attractive option for property owners looking to improve their building's performance without compromising its historical value.
                </p>
                <p className="text-gray-700">
                  As we move towards a more sustainable future, fixed secondary glazing continues to prove its worth as an effective, preservation-friendly solution for historic buildings. Contact us today to learn more about how this solution can benefit your property.
                </p>
              </div>
            </section>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FixedSecondaryGlazing;
