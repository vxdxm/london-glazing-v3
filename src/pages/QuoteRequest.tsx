import { Helmet } from "react-helmet";
import { MainNav } from "@/components/MainNav";
import { QuoteRequestForm } from "@/components/quote/QuoteRequestForm";
import { QuoteRequestHeader } from "@/components/quote/QuoteRequestHeader";

const QuoteRequest = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <Helmet>
        <title>Request a Free Secondary Glazing Quote | Expert Installation Services London</title>
        <meta 
          name="description" 
          content="Request a free quote for professional secondary glazing installation in London. Get expert consultation and competitive pricing for all window types." 
        />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/quote-request" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <QuoteRequestHeader />
        <QuoteRequestForm />
      </div>
    </div>
  );
};

export default QuoteRequest;