
import { MainNav } from "@/components/MainNav";
import { QuoteRequestForm } from "@/components/quote/QuoteRequestForm";
import { QuoteRequestHeader } from "@/components/quote/QuoteRequestHeader";
import { Footer } from "@/components/Footer";
import QuoteRequestSEO from "@/components/quote/QuoteRequestSEO";

const QuoteRequest = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <QuoteRequestSEO />
      <div className="container mx-auto px-4 py-16">
        <QuoteRequestHeader />
        <QuoteRequestForm />
      </div>
      <Footer />
    </div>
  );
};

export default QuoteRequest;
