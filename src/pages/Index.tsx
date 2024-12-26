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
      <ContactForm />
    </div>
  );
};

export default Index;