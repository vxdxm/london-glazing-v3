import { Hero } from "@/components/Hero";
import { MainNav } from "@/components/MainNav";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import CostCalculator from "@/components/CostCalculator";

const Index = () => {
  return (
    <div className="min-h-screen">
      <MainNav />
      <Hero />
      <Services />
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Calculate Your Potential Savings
          </h2>
          <CostCalculator />
        </div>
      </div>
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default Index;