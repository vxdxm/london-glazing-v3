import { Helmet } from "react-helmet";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Terms and Conditions | Secondary Glazing London</title>
        <meta name="description" content="Our terms and conditions outline the rules and guidelines for using our website and services." />
      </Helmet>
      <MainNav />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
        <div className="prose max-w-none">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
            <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on Secondary Glazing London's website for personal, non-commercial transitory viewing only.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
            <p>The materials on Secondary Glazing London's website are provided on an 'as is' basis. Secondary Glazing London makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;