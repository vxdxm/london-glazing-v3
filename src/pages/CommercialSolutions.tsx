import { Helmet } from "react-helmet";
import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CommercialSolutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Commercial Secondary Glazing | Office & Business Solutions</title>
        <meta name="description" content="Professional commercial secondary glazing solutions for offices, hotels, and businesses in London. Improve energy efficiency and reduce noise. Expert consultation available." />
        <meta name="keywords" content="commercial glazing, office glazing, business windows, hotel windows, commercial property, noise reduction, energy efficiency, London commercial" />
        <meta property="og:title" content="Commercial Secondary Glazing Solutions" />
        <meta property="og:description" content="Transform your commercial property with our expert secondary glazing solutions." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Commercial Secondary Glazing Solutions" />
        <meta name="twitter:description" content="Professional secondary glazing for London businesses and commercial properties." />
        <link rel="canonical" href="https://yourdomain.com/commercial" />
      </Helmet>
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Commercial Secondary Glazing Solutions</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Office Glazing Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Enhance your office environment with our secondary glazing solutions that provide excellent thermal insulation and noise reduction. Perfect for busy urban settings.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Hotel Glazing Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Create a peaceful atmosphere for your guests with our specialized hotel glazing solutions, designed to reduce noise and improve energy efficiency.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CommercialSolutions;
