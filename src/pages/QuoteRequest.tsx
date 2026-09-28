
import { Link } from "react-router-dom";
import { ClipboardList } from "lucide-react";
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
        <div className="max-w-3xl mx-auto mb-8 rounded-xl border border-border bg-muted/40 p-5 flex flex-col sm:flex-row sm:items-center gap-4">
          <ClipboardList className="h-6 w-6 text-primary shrink-0" aria-hidden="true" />
          <p className="text-sm flex-1">
            Not sure what to measure or photograph? Build a free, tailored checklist for your rooms first.
          </p>
          <Link to="/quote-checklist" className="text-sm font-semibold text-primary underline whitespace-nowrap">
            Build my checklist
          </Link>
        </div>
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
