import { Helmet } from "react-helmet";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Privacy Policy | Secondary Glazing London</title>
        <meta name="description" content="Our privacy policy outlines how we collect, use, and protect your personal information." />
      </Helmet>
      <MainNav />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <div className="prose max-w-none">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p>We collect information that you provide directly to us when you:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Fill out our contact forms</li>
              <li>Request a quote</li>
              <li>Subscribe to our newsletter</li>
              <li>Communicate with us via email or phone</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide and improve our services</li>
              <li>Respond to your inquiries</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;