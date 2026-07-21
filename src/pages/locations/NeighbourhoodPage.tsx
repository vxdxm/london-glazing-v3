import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { LocationBreadcrumb } from "@/components/locations/LocationBreadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { getNeighbourhoodBySlug } from "@/data/neighbourhoodPages";

const NeighbourhoodPage = () => {
  const { slug = "" } = useParams();
  const data = getNeighbourhoodBySlug(slug);

  if (!data) return <Navigate to="/locations" replace />;

  const canonical = `https://secondaryglazingspecialist.com/locations/${data.slug}`;
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Secondary Glazing in ${data.name}`,
    provider: {
      "@type": "LocalBusiness",
      name: "Secondary Glazing Specialist",
      url: "https://secondaryglazingspecialist.com",
      telephone: "+44 207 060 1572",
    },
    areaServed: { "@type": "Place", name: `${data.name}, London (${data.postcodes})` },
    description: data.metaDescription,
  };

  return (
    <>
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={data.metaTitle} />
        <meta property="og:description" content={data.metaDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>
      <MainNav />
      <main className="container mx-auto px-4 py-8">
        <LocationBreadcrumb locationName={data.name} />

        {/* Hero */}
        <section className="mb-12">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <MapPin className="w-4 h-4 text-primary" />
            <Link to={data.regionPath} className="hover:text-primary">
              {data.region}
            </Link>
            <span>·</span>
            <span>{data.postcodes}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{data.h1}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-6">{data.intro}</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/quote-request">Get a {data.name} quote</Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link to="/compliance-hub">Planning &amp; LBC guidance</Link>
            </Button>
          </div>
        </section>

        {/* Property types + Challenges */}
        <section className="grid lg:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Property types we serve</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{data.propertyTypes}</p>
            </CardContent>
          </Card>
          {data.keyChallenges.map((c) => (
            <Card key={c.title}>
              <CardHeader>
                <CardTitle className="text-lg">{c.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{c.body}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Recommended spec */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Recommended specification for {data.name}</h2>
          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b">
                  <th className="text-left p-4 bg-secondary/40 w-1/3">Frame system</th>
                  <td className="p-4">{data.recommendedSpec.frame}</td>
                </tr>
                <tr className="border-b">
                  <th className="text-left p-4 bg-secondary/40">Glass</th>
                  <td className="p-4">{data.recommendedSpec.glass}</td>
                </tr>
                <tr className="border-b">
                  <th className="text-left p-4 bg-secondary/40">Air gap / cavity</th>
                  <td className="p-4">{data.recommendedSpec.airGap}</td>
                </tr>
                <tr>
                  <th className="text-left p-4 bg-secondary/40">Performance</th>
                  <td className="p-4 font-medium">{data.recommendedSpec.performance}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Planning notes */}
        <section className="mb-12 bg-secondary/30 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-3">Planning &amp; LPA notes for {data.name}</h2>
          <p className="text-muted-foreground mb-4">{data.planningNotes}</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link to="/compliance-hub#article-4" className="text-primary hover:underline inline-flex items-center gap-1">
              Article 4 &amp; conservation guidance <ArrowRight className="w-3 h-3" />
            </Link>
            <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline inline-flex items-center gap-1">
              Listed building specifics <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </section>

        {/* Nearby */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Also serving nearby</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {data.nearby.map((n) => (
              <Link
                key={n.path}
                to={n.path}
                className="flex items-center gap-3 p-4 rounded-lg border hover:border-primary/50 transition-colors"
              >
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="font-medium">{n.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Frequently asked about {data.name}</h2>
          <div className="space-y-4">
            {data.faqs.map((f) => (
              <Card key={f.q}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    {f.q}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{f.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary/5 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to plan your {data.name} install?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Site survey, LPA-ready drawings and installation from a specialist team that
            works in {data.region} every week.
          </p>
          <Button asChild size="lg">
            <Link to="/quote-request">Request a survey</Link>
          </Button>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NeighbourhoodPage;