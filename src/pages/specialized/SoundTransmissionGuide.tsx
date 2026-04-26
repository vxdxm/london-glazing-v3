
import React from "react";
import SoundGuideLayout from "@/components/sound-guide/SoundGuideLayout";
import SoundGuideHeader from "@/components/sound-guide/SoundGuideHeader";
import SoundGuideContent from "@/components/sound-guide/SoundGuideContent";
import { Helmet } from "react-helmet-async";
import { createPageSchema } from "@/utils/seo";

const SoundTransmissionGuide = () => {
  const pageMetadata = {
    title: "Sound Transmission Guide | Acoustic Secondary Glazing",
    description: "Comprehensive guide to sound transmission through windows and how secondary glazing creates effective acoustic barriers. Expert explanations and practical solutions.",
    canonicalPath: "/specialized/sound-transmission-guide",
    imageUrl: "/lovable-uploads/56e6bf65-3f25-4fcd-b697-e286aa479776.jpg",
    type: "article" as const,
    publishedDate: "2024-06-15",
    modifiedDate: "2025-05-17",
    keywords: ["sound transmission", "acoustic barriers", "secondary glazing", "sound waves", "noise reduction", "soundproofing windows", "sound insulation"]
  };

  const pageSchema = createPageSchema(pageMetadata);

  return (
    <>
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
                "item": "https://secondaryglazingspecialist.com/specialized"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Sound Transmission Guide",
                "item": "https://secondaryglazingspecialist.com${pageMetadata.canonicalPath}"
              }
            ]
          }
        `}
        </script>
      </Helmet>
      <SoundGuideLayout>
        <SoundGuideHeader />
        <SoundGuideContent />
        <section className="container max-w-4xl mx-auto mt-16 mb-8 px-4">
          <h2 className="text-3xl font-semibold mb-4 text-primary">Acoustic Performance Metrics & Standards</h2>
          <p className="text-muted-foreground mb-4">
            Sound transmission through glazing is quantified using the weighted sound reduction index Rw, derived from
            third-octave laboratory measurements between 100 Hz and 3,150 Hz under BS EN ISO 10140-2:2010. For real-world
            façade specification, the spectrum adaptation terms C (pink-noise / speech-spectrum) and Ctr
            (traffic-spectrum) are appended — for example, Rw (C; Ctr) = 45 (-1; -5) dB. The Ctr correction is the
            critical figure for road, rail, and aircraft noise, where low-frequency content dominates.
          </p>
          <p className="text-muted-foreground mb-4">
            Specifying to BS 8233:2014 requires designers to convert laboratory Rw values to a calculated façade
            attenuation Dw under BS EN 12354-3, accounting for flanking transmission, façade area, and reverberation
            time of the receiving room. A typical conversion factor of -3 to -5 dB applies, meaning a 45 dB Rw
            laboratory unit delivers approximately 40 dB Dw in situ. This is critical when validating against the
            BS 8233 internal target of 35 dB LAeq (living rooms) under a 65 dB LAeq external level.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse border border-border">
              <thead className="bg-muted">
                <tr>
                  <th className="border border-border p-3 text-left">Glazing System</th>
                  <th className="border border-border p-3 text-left">Rw (C; Ctr) dB</th>
                  <th className="border border-border p-3 text-left">External Noise Reduction</th>
                  <th className="border border-border p-3 text-left">Compliance Target</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">Single 4mm Float</td>
                  <td className="border border-border p-3">29 (-1; -3)</td>
                  <td className="border border-border p-3">~25 dB on-site</td>
                  <td className="border border-border p-3">Sub-standard</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">Standard DGU 4-16-4</td>
                  <td className="border border-border p-3">31 (-1; -4)</td>
                  <td className="border border-border p-3">~27 dB on-site</td>
                  <td className="border border-border p-3">Building Regs minimum</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">Single + 6.8mm Sec. (100mm)</td>
                  <td className="border border-border p-3">38 (-1; -4)</td>
                  <td className="border border-border p-3">~34 dB on-site</td>
                  <td className="border border-border p-3">BS 8233 living rooms</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">Single + 10.8mm Sec. (150mm)</td>
                  <td className="border border-border p-3">45 (-1; -5)</td>
                  <td className="border border-border p-3">~40 dB on-site</td>
                  <td className="border border-border p-3">BS 8233 bedrooms (good)</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">Single + 12.8mm Sec. (200mm)</td>
                  <td className="border border-border p-3">52 (-2; -7)</td>
                  <td className="border border-border p-3">~47 dB on-site</td>
                  <td className="border border-border p-3">BB93 schools / hotels</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-semibold mb-3 text-primary">Coincidence Dip & Mass Law</h3>
          <p className="text-muted-foreground mb-4">
            All glass exhibits a coincidence-dip frequency at which bending-wave velocity in the pane matches the
            wavelength of incident sound, causing a localised drop in attenuation. For 4mm annealed float, this dip
            occurs at ~3,200 Hz; for 10.8mm Stadip Silence with acoustic PVB, the dip is shifted to ~1,200 Hz and
            attenuated by 6–8 dB through interlayer damping (per Saint-Gobain technical bulletin TB-018). Pairing
            dissimilar pane thicknesses across the cavity — for instance 4mm primary with 10.8mm secondary — separates
            the two coincidence dips, eliminating the resonance valley that would otherwise compromise BS 8233 compliance.
          </p>
        </section>
        <div className="container max-w-2xl mx-auto mt-20 mb-16">
          <div className="bg-secondary/60 p-5 rounded-lg">
            <h2 className="text-xl font-semibold mb-2 text-primary">Next: Discover Practical Noise Reduction!</h2>
            <p className="text-gray-700 mb-2">
              For a real-world look at how secondary glazing technology cuts outside noise by up to 80%, see glass and air gap choices, performance stats, and tips for listed buildings.
            </p>
            <a
              href="/secondary-glazing-noise-reduction"
              className="inline-block mt-2 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors"
            >
              Visit Secondary Glazing Noise Reduction &rarr;
            </a>
          </div>
        </div>
      </SoundGuideLayout>
    </>
  );
};

export default SoundTransmissionGuide;
