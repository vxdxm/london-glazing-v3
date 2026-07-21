
import { MainNav } from "@/components/MainNav";
import { QuoteRequestForm } from "@/components/quote/QuoteRequestForm";
import { QuoteRequestHeader } from "@/components/quote/QuoteRequestHeader";
import { Footer } from "@/components/Footer";
import QuoteRequestSEO from "@/components/quote/QuoteRequestSEO";
import { LondonServiceAreas } from "@/components/seo/LondonServiceAreas";

const QuoteRequest = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <QuoteRequestSEO />
      <div className="container mx-auto px-4 py-16">
        <QuoteRequestHeader />
        <QuoteRequestForm />
      </div>
      <LondonServiceAreas
        heading="Local Surveyors Across London"
        subheading="Free on-site surveys in every borough — usually within 5–7 working days."
        compact
      />
      <Footer />
    </div>
  );
};

export default QuoteRequest;
