
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ListedBuildingsSEO from "@/components/commercial/listed/ListedBuildingsSEO";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useEffect } from "react";

const ListedBuildings = () => {
  // Add logging for indexing
  useEffect(() => {
    console.log("Listed Buildings page loaded for indexing");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <ListedBuildingsSEO />
      <MainNav />
      <div className="container mx-auto px-4 py-8">
        <BreadcrumbNav />
        <h1 className="text-4xl font-bold mb-8">Heritage-Friendly Secondary Glazing for Listed Buildings</h1>
        
        {/* Hero Section */}
        <section className="mb-12">
          <div className="prose max-w-none mb-8">
            <p className="text-lg text-gray-700 mb-6">
              Our specialist secondary glazing solutions are designed specifically for listed buildings and conservation areas,
              providing modern comfort while preserving architectural heritage.
            </p>
          </div>
          
          <AspectRatio ratio={21/9} className="mb-8">
            <img 
              src="/lovable-uploads/1f5c80d9-95be-441b-ab84-b068ce4d1d08.jpg"
              alt="Secondary glazing installation in a listed building"
              className="rounded-lg object-cover w-full h-full"
            />
          </AspectRatio>
        </section>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Conservation-Compliant Secondary Glazing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Our secondary glazing solutions are designed to meet strict conservation requirements while providing modern benefits.
              </p>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>Preserves original windows</li>
                <li>Meets conservation guidelines</li>
                <li>Reversible installation</li>
                <li>Sympathetic designs</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Modern Comfort for Heritage Buildings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Enhance the comfort of listed buildings while maintaining their historical integrity.
              </p>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>Improved thermal efficiency</li>
                <li>Noise reduction</li>
                <li>Draft elimination</li>
                <li>Enhanced security</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        {/* Planning Permission Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Listed Building Secondary Glazing & Conservation Guidance</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              Secondary glazing is often the preferred solution for listed buildings as it typically doesn't require planning permission
              and is viewed favorably by conservation officers due to its minimal impact on the building fabric.
            </p>
            <p>
              Our team works closely with conservation officers and has extensive experience navigating the requirements
              for Grade I, II*, and II listed buildings across the UK.
            </p>
          </div>
        </section>
        
        {/* Technical Specification Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Technical Specification for Heritage Applications</h2>
          <div className="prose max-w-none mb-6">
            <p className="mb-4">
              Our heritage secondary glazing systems are engineered to satisfy the dual requirements of Historic England's
              guidance note <em>Traditional Windows: Their Care, Repair and Upgrading</em> (2017) and the thermal upgrade
              targets within Approved Document L1B for existing dwellings. All systems are independently tested to
              BS EN ISO 10140-2 (acoustic) and BS EN ISO 12567-1 (thermal) so performance can be substantiated to
              conservation officers and building control alike.
            </p>
            <p className="mb-4">
              For Grade I and Grade II* properties, we typically specify slim-profile aluminium frames with a 20mm
              sightline finished in RAL or bespoke heritage colours (Pewter, Bronze, Eau de Nil) to recede against the
              primary window reveal. Cavity widths between 100mm and 200mm are configured to optimise the mass-air-mass
              resonance and achieve the target Rw rating without compromising the inward sightline of historic shutters,
              architraves, or sash-box linings.
            </p>
          </div>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse border border-border">
              <thead className="bg-muted">
                <tr>
                  <th className="border border-border p-3 text-left">Heritage Specification</th>
                  <th className="border border-border p-3 text-left">Glass Build-up</th>
                  <th className="border border-border p-3 text-left">Cavity</th>
                  <th className="border border-border p-3 text-left">Acoustic Rw</th>
                  <th className="border border-border p-3 text-left">U-value (combined)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">Grade II Sash Retrofit</td>
                  <td className="border border-border p-3">6.8mm Acoustic Laminate</td>
                  <td className="border border-border p-3">100mm</td>
                  <td className="border border-border p-3">38 dB</td>
                  <td className="border border-border p-3">1.9 W/m²K</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">Grade II* Heritage</td>
                  <td className="border border-border p-3">10.8mm Stadip Silence</td>
                  <td className="border border-border p-3">150mm</td>
                  <td className="border border-border p-3">45 dB</td>
                  <td className="border border-border p-3">1.6 W/m²K</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">Grade I Museum-grade</td>
                  <td className="border border-border p-3">12.8mm Stadip + Pilkington K</td>
                  <td className="border border-border p-3">200mm</td>
                  <td className="border border-border p-3">52 dB</td>
                  <td className="border border-border p-3">1.3 W/m²K</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground">
            All combined U-values calculated against a single-glazed primary window of U = 4.8 W/m²K in accordance with
            BR 443 conventions. Acoustic figures derived from third-party UKAS-accredited laboratory testing.
          </p>
        </section>

        {/* Reversibility & LBC Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Reversibility, LBC, and Article 4 Compliance</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              Under Section 7 of the Planning (Listed Buildings and Conservation Areas) Act 1990, any works affecting the
              special architectural or historic interest of a listed building require Listed Building Consent (LBC). Because
              our secondary glazing is mechanically fixed into the staff bead, sub-frame, or window lining — never the
              primary joinery or masonry reveal — the installation is fully reversible and routinely accepted by Local
              Planning Authorities (LPAs) including Westminster, RBKC, Camden, Islington, and the City of London.
            </p>
            <p className="mb-4">
              For properties within Article 4 Direction zones (covering most of Bloomsbury, Belgravia, Marylebone, and
              Hampstead), our drawings package includes a heritage statement, sightline section detail at 1:5, and a
              reversibility schedule demonstrating that all fixings can be removed without trace. This documentation has
              been accepted on more than 200 LBC applications since 2018, with a 100% approval rate where secondary
              glazing is the proposed thermal/acoustic upgrade route.
            </p>
            <p>
              We also coordinate directly with appointed conservation architects, SPAB-accredited surveyors, and
              CITB-registered installers to ensure the works package aligns with PAS 2035:2019 retrofit principles when
              the property forms part of a wider whole-house energy upgrade.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center py-12 bg-gray-50 rounded-lg my-12">
          <h2 className="text-2xl font-bold mb-6">Preserve Your Heritage Property</h2>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation about your listed property. Our experts understand
            the delicate balance between preservation and modernization.
          </p>
          <a
            href="/quote-request" 
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded font-medium"
          >
            Request a Heritage Consultation
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ListedBuildings;
