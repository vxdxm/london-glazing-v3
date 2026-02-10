import { Helmet } from "react-helmet-async";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import CookiePolicySEO from "@/components/legal/CookiePolicySEO";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen">
      <CookiePolicySEO />
      <MainNav />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
        <div className="prose max-w-none">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">What Are Cookies</h2>
            <p>Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide a better user experience.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
            <p>We use cookies to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Understand how you use our website</li>
              <li>Remember your preferences</li>
              <li>Improve your experience</li>
              <li>Analyze website performance</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
            <p>You can control and manage cookies in your browser settings. Please note that removing or blocking cookies may impact your user experience and parts of our website may no longer be fully accessible.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
