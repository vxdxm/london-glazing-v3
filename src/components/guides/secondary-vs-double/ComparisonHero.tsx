import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function ComparisonHero() {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-600 to-secondary bg-clip-text text-transparent">
              Secondary Glazing vs Double Glazing for Listed Buildings
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              If you own a <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">listed building</Link>, 
              you've probably faced the frustrating dilemma of wanting modern comfort while preserving your property's 
              historic character. Cold draughts, high heating bills, and street noise can make even the most beautiful 
              period home uncomfortable to live in.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              For most listed buildings, <strong className="text-primary">secondary glazing emerges as the clear winner</strong>. 
              It typically doesn't require planning permission, preserves your original windows completely, and often 
              delivers superior <Link to="/noise-reduction-secondary-glazing" className="text-primary hover:underline">noise reduction</Link>.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary text-white shadow-lg">
              <Link to="/quote">Get Expert Recommendation</Link>
            </Button>
          </div>
          <div className="relative">
            <img
              src="https://cdn.marblism.com/P6H8NkqeMud.webp"
              alt="Secondary glazing installation on a listed building preserving original windows"
              className="rounded-2xl shadow-2xl w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
