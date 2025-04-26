
import { Helmet } from "react-helmet";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import GlassOptions from "@/components/residential/GlassOptions";

const FixedSecondaryGlazing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Fixed Secondary Glazing Solutions | Permanent Window Insulation</title>
        <meta name="description" content="Discover our fixed secondary glazing solutions for permanent thermal and acoustic insulation. Perfect for windows that don't need regular access." />
        <meta name="keywords" content="fixed secondary glazing, permanent glazing, window insulation, thermal efficiency, noise reduction" />
      </Helmet>
      <MainNav />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Fixed Secondary Glazing</h1>
        <div className="grid gap-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">What is Fixed Secondary Glazing?</h2>
            <p className="text-gray-700 mb-4">
              Fixed secondary glazing provides a permanent solution for improving window insulation. Unlike removable options, fixed panels are permanently installed to create a constant thermal and acoustic barrier, ideal for windows that don't require regular access.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maximum thermal efficiency</li>
                <li>Superior noise reduction</li>
                <li>Enhanced security</li>
                <li>Minimal maintenance required</li>
                <li>Seamless appearance</li>
              </ul>
            </div>
          </section>
          <GlassOptions />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FixedSecondaryGlazing;
