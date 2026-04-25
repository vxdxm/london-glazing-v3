
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
              Hotel guest experience is increasingly defined by sleep quality, and sleep quality is defined acoustically.
              The World Health Organisation's Night Noise Guidelines for Europe recommend an indoor Lnight maximum of
              40 dBA to protect sleep, with 30 dBA preferred for restorative rest. For four- and five-star hotels in
              central London, achieving these levels against arterial-road, rail, and night-time entertainment-district
              noise sources is the single biggest acoustic challenge facing the operator. Secondary glazing is the
              specified retrofit for any property where the existing window plane delivers less than Rw 45 dB — which
              covers virtually every Victorian, Edwardian, and Georgian building stock conversion in zones 1–2.
            </p>

            <h2 className="text-2xl font-semibold mt-8">Acoustic Targets for Hospitality</h2>
            <p>
              The relevant standards for hotel acoustics are HBN 08-01 (where adopted in serviced accommodation),
              BS 8233:2014 Sound Insulation in Buildings, and the brand-specific acoustic standards published by
              Marriott, Hilton, IHG, Accor, and Four Seasons. Typical guest-room targets are an indoor LAeq,16h of
              35 dBA daytime and Lnight of 30 dBA. Against an external façade level of 70 dBA — common on Park Lane,
              the Strand, Knightsbridge, and Holborn — this requires a glazing system delivering Rw 45–50 dB minimum.
              A single-glazed Georgian sash achieves around Rw 28 dB; even a modern 28mm IGU only reaches Rw 35 dB.
              Secondary glazing fitted internally to either system lifts whole-window performance to Rw 50–54 dB,
              comfortably hitting brand standard with margin.
            </p>

            <h2 className="text-2xl font-semibold mt-8">Specification — Hotel Guest Rooms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Glass: 8.8mm or 10.8mm Stadip Silence acoustic laminated</li>
              <li>Frame: 18mm slim-line aluminium, RAL-matched to existing reveal joinery</li>
              <li>Air gap: 150–200mm with mineral-fibre absorbent reveal lining</li>
              <li>Operation: Lift-out for cleaning access, with concealed magnetic seals</li>
              <li>Combined Rw: 50–54 dB; daytime Lnight contribution &lt;30 dBA at 70 dBA façade</li>
              <li>Whole-window U-value: 1.4 W/m²K — reduces heating/cooling load by 25–35%</li>
              <li>UV blocking: &gt;99% UV-A and UV-B (protects FF&amp;E from fade)</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8">BREEAM and ESG Reporting</h2>
            <p>
              Secondary glazing contributes credits under BREEAM In-Use HQM 06 (Acoustic Performance) and Ene 01
              (Reduction of Energy Use and Carbon Emissions). For hotel groups reporting under SBTi or the Hotel
              Carbon Measurement Initiative (HCMI), the kWh/room/year reduction from window upgrades is a directly
              attributable Scope 2 saving. We provide pre- and post-install kWh modelling to support sustainability
              reporting and brand ESG submissions.
            </p>

            <h2 className="text-2xl font-semibold mt-8">Listed Building and Conservation Hotels</h2>
            <p>
              A high proportion of London's premium hotel stock occupies Grade I and Grade II listed buildings —
              The Savoy, Claridge's, The Connaught, Brown's, The Lanesborough, the Corinthia, the Rosewood, the
              Langham — where window replacement is prohibited. Secondary glazing is the only consented route to
              brand-standard acoustic and thermal performance in these properties because the install is reversible
              and does not affect the listed primary fenestration. We work routinely with conservation officers at
              Westminster, Camden, Kensington &amp; Chelsea, and the City of London on hotel-grade installations and
              supply Heritage Statements as part of any LBC application package.
            </p>

            <h2 className="text-2xl font-semibold mt-8">Phased Installation, Live Trading</h2>
            <p>
              Hotels rarely close for refurbishment. We install on a room-by-room basis around the housekeeping
              schedule, typically completing a guest room in a single day with all materials, dust suppression,
              and waste removed before evening turn-down. For larger refurbishments we work floor-by-floor,
              coordinating with the front-of-house team to manage room blocks and revenue impact.
            </p>

            <h2 className="text-2xl font-semibold mt-8">Suitable For</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>4- and 5-star hotels in zones 1–2</li>
              <li>Boutique hotels in conservation and listed buildings</li>
              <li>Serviced apartment operators (Cheval, SACO, Native, Roomzzz)</li>
              <li>Restaurants and bars in late-licence entertainment districts</li>
              <li>Hotel meeting and conference suites with acoustic privacy briefs</li>
              <li>Spa, wellness, and treatment-room environments requiring NR 25</li>
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
