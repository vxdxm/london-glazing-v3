import { Helmet } from "react-helmet";
import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
const CommercialSolutions = () => {
  return <div className="min-h-screen bg-background">
      <Helmet>
        <title>Commercial Secondary Glazing London | Business & Office Solutions</title>
        <meta name="description" content="Professional commercial secondary glazing solutions for London businesses. Improve energy efficiency, reduce noise, and enhance security in offices, hotels, and commercial buildings." />
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
          <Link to="/commercial/office-buildings">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <div className="w-full h-48 overflow-hidden">
                <img alt="Modern office building" className="w-full h-full object-cover" src="/lovable-uploads/41ac9ed1-11cf-4479-90f7-8aa763917c75.jpg" />
              </div>
              <CardHeader>
                <CardTitle>Office Glazing Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Enhance your office environment with our secondary glazing solutions that provide excellent thermal insulation and noise reduction. Perfect for busy urban settings.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/commercial/hospitality-sector">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <div className="w-full h-48 overflow-hidden">
                <img alt="Modern hotel building" className="w-full h-full object-cover" src="/lovable-uploads/8c405e6d-83e1-4a0e-8cf5-de325c39e542.jpg" />
              </div>
              <CardHeader>
                <CardTitle>Hotel & Hospitality Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Create a peaceful atmosphere for your guests with our specialized hotel glazing solutions, designed to reduce noise and improve energy efficiency.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/commercial/healthcare-industry">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <div className="w-full h-48 overflow-hidden">
                <img alt="Modern healthcare facility" className="w-full h-full object-cover" src="/lovable-uploads/056a60d0-4ffa-4e1c-977a-c2bbe100e809.jpg" />
              </div>
              <CardHeader>
                <CardTitle>Healthcare Industry Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Specialized glazing solutions for healthcare facilities, ensuring optimal temperature control, sound insulation, and maintaining a sterile environment for patient comfort.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/commercial/educational-sector">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <div className="w-full h-48 overflow-hidden">
                <img alt="Modern educational facility" src="/lovable-uploads/1c6ae08e-8c9d-4d76-a036-5b7643b5f28a.jpg" className="w-full h-full object-fill" />
              </div>
              <CardHeader>
                <CardTitle>Educational Sector Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Create the perfect learning environment with our secondary glazing solutions designed specifically for schools, universities, and other educational institutions.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>;
};
export default CommercialSolutions;