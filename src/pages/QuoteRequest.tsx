import { Helmet } from "react-helmet";
import { MainNav } from "@/components/MainNav";
import { ContactForm } from "@/components/ContactForm";

const QuoteRequest = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Request a Quote | Secondary Glazing Installation London</title>
        <meta name="description" content="Get a free quote for secondary glazing installation in London. Expert consultation and competitive pricing for residential and commercial properties." />
        <meta name="keywords" content="secondary glazing quote, free consultation, glazing installation, London glazing services, window installation quote" />
        <meta property="og:title" content="Request a Secondary Glazing Quote" />
        <meta property="og:description" content="Get your free secondary glazing quote today. Expert installation in London." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Request a Secondary Glazing Quote" />
        <meta name="twitter:description" content="Get your free quote for secondary glazing installation in London." />
        <link rel="canonical" href="https://yourdomain.com/quote-request" />
      </Helmet>
      <MainNav />
      <ContactForm />
    </div>
  );
};

export default QuoteRequest;