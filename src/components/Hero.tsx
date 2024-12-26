import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center bg-secondary">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460574283810-2aab119d8511')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-accent mb-6 animate-fade-up">
            London's Premium Secondary Glazing Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-up">
            Enhance your home's comfort and value with our expert secondary glazing services. 
            Reduce noise, improve insulation, and maintain your property's character.
          </p>
          <Button size="lg" className="animate-fade-up">
            Get Free Quote
          </Button>
        </div>
      </div>
    </div>
  );
};