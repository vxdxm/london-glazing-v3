import { MainNav } from "@/components/MainNav";
import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Footer } from "@/components/Footer";

const SecondaryGlazingNoiseReduction = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Helmet>
      <title>Secondary Glazing Noise Reduction | Reduce Noise by up to 80%</title>
      <meta
        name="description"
        content="Discover how secondary glazing provides effective noise reduction for homes and businesses. Achieve peace and quiet by cutting external noise by up to 80%. Learn about acoustic glass, air gap options, and solutions for listed buildings."
      />
      <meta
        name="keywords"
        content="secondary glazing noise reduction, sound insulation, acoustic glazing, reduce noise pollution, quiet windows, listed building soundproofing, acoustic glass, air gap glazing, London"
      />
      <meta property="og:title" content="Secondary Glazing Noise Reduction" />
      <meta property="og:description" content="Transform your property with secondary glazing and cut external noise by up to 80%. Explore acoustic secondary glazing systems for peaceful interiors." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://secondaryglazingspecialist.com/secondary-glazing-noise-reduction" />
      <meta property="og:image" content="/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg" />
      <link rel="canonical" href="https://secondaryglazingspecialist.com/secondary-glazing-noise-reduction" />
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "headline": "Secondary Glazing Noise Reduction",
          "description": "Specialists in secondary glazing solutions that reduce outside noise by up to 80%. Get peace and silence even in busy locations.",
          "image": "/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg",
          "url": "https://secondaryglazingspecialist.com/secondary-glazing-noise-reduction",
          "mainEntity": {
            "@type": "Product",
            "name": "Secondary Glazing for Noise Reduction",
            "description": "Custom secondary glazing systems focused on reducing noise pollution with acoustic glass and optimal air gap.",
            "brand": {
              "@type": "Brand",
              "name": "Secondary Glazing Specialist"
            }
          },
          "breadcrumb": {
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
                "name": "Secondary Glazing Noise Reduction",
                "item": "https://secondaryglazingspecialist.com/secondary-glazing-noise-reduction"
              }
            ]
          }
        })}
      </script>
    </Helmet>
    <MainNav />

    <main className="container mx-auto px-4 py-16 flex-grow">
      <BreadcrumbNav />
      <h1 className="text-4xl font-bold mb-8">
        Secondary Glazing Noise Reduction
      </h1>
      <div className="prose max-w-none text-lg text-gray-700 mb-10">
        <p>
          Experience peace and quiet by installing <strong>secondary glazing</strong> designed specifically for <strong>noise reduction</strong>. Our systems offer up to <span className="font-semibold text-primary">80% reduction in external noise</span>, making your home or office a sanctuary from urban traffic, trains, or noisy streets.
        </p>
        <p>
          Whether you live in a busy city, near a railway, or simply want silence inside your property, secondary glazing with acoustic glass and optimized air gap is the proven solution. Suitable for <strong>listed buildings</strong> or modern homes, we tailor every installation for maximum sound insulation and minimal visual impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
        <Card>
          <CardContent className="p-6">
            <AspectRatio ratio={16/9} className="mb-6">
              <img
                src="/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg"
                alt="Secondary glazing windows with superior noise reduction"
                className="w-full h-full object-cover rounded-lg"
              />
            </AspectRatio>
            <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Custom-made internal windows added behind your existing windows</li>
              <li>Uses acoustic laminated glass and optimized air gaps</li>
              <li>Breaks up and absorbs sound waves at multiple frequencies</li>
              <li>Dramatically reduces road, train, aircraft, and city noise</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <AspectRatio ratio={16/9} className="mb-6">
              <img
                src="/lovable-uploads/09754466-a230-4ca4-a233-601125c832fc.png"
                alt="Diagram of secondary glazing cutting down sound transmission"
                className="w-full h-full object-cover rounded-lg"
              />
            </AspectRatio>
            <h2 className="text-2xl font-semibold mb-4">Performance & Benefits</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Up to 48dB noise reduction (80%) for heavy traffic and trains</li>
              <li>BS EN ISO 10140-2 tested acoustic glass</li>
              <li>Preserves the external appearance of the building</li>
              <li>Complies with heritage and conservation requirements</li>
              <li>Also improves thermal insulation and energy efficiency</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Is Secondary Glazing Right For You?</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
          <li>Struggling with nighttime city noise or traffic?</li>
          <li>Live near trainlines or airports?</li>
          <li>Want to soundproof a listed or historic building?</li>
          <li>Need a quiet home office or study space?</li>
        </ul>
        <p className="mt-4 text-gray-700">
          Our team will guide you through your options for glass thickness, air gap, and frame color, ensuring your noise reduction system exceeds your expectations.
        </p>
      </section>
      <div className="bg-secondary/50 p-6 rounded-lg prose max-w-none mb-10">
        <h2 className="text-xl font-semibold mb-2">Book Your Free Consultation Today</h2>
        <p>
          Ready to transform your property into a peaceful oasis? <a href="/quote-request" className="text-primary underline hover:text-primary/80">Request a free quote</a> or <a href="/faqs" className="text-primary underline hover:text-primary/80">learn more in our FAQs</a>.
        </p>
      </div>
      <div className="bg-secondary/80 p-5 rounded-lg mb-12">
        <h2 className="text-xl font-semibold mb-2 text-primary">Interested in Premium Acoustic Glazing?</h2>
        <p className="text-gray-700 mb-2">
          Explore our advanced <strong>Acoustic Secondary Glazing Windows</strong> page for detailed specs and real-world results from specialized glass systems.
        </p>
        <a
          href="/specialized/acoustic-secondary-glazing-windows"
          className="inline-block mt-2 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors"
        >
          Go to Acoustic Secondary Glazing Windows &rarr;
        </a>
      </div>
    </main>
    <Footer />
  </div>
);

export default SecondaryGlazingNoiseReduction;
