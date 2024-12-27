import { Hero } from "@/components/Hero";
import { MainNav } from "@/components/MainNav";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <MainNav />
      <Hero />
      <Services />
      <Testimonials />
      <div id="contact-section">
        <ContactForm />
      </div>
    </div>
  );
};

export default Index;