import { OptimizedImage } from "@/components/ui/optimized-image";

const LiftOutHero = () => {
  return (
    <section className="mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            <strong className="text-foreground">Looking for secondary glazing that adapts to London's seasons?</strong> Lift-out secondary glazing offers the perfect balance of winter insulation and summer flexibility at £300-£500 per window.
          </p>
          <p className="text-muted-foreground mb-6">
            Lift-out secondary glazing provides seasonal flexibility that fixed and hinged systems simply can't match. Install panels in October for cosy winter warmth, then remove them in April for natural summer ventilation.
          </p>
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-6">
            <p className="text-foreground font-medium">
              This mid-range solution saves £1,200-£2,400 compared to hinged systems while offering complete reversibility — ideal for rental properties, listed building trials, and ground floor security flexibility.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="bg-muted rounded-lg px-4 py-2 text-center">
              <span className="block text-2xl font-bold text-primary">£300-£500</span>
              <span className="text-sm text-muted-foreground">Per Window</span>
            </div>
            <div className="bg-muted rounded-lg px-4 py-2 text-center">
              <span className="block text-2xl font-bold text-primary">50-60%</span>
              <span className="text-sm text-muted-foreground">Heat Loss Reduction</span>
            </div>
            <div className="bg-muted rounded-lg px-4 py-2 text-center">
              <span className="block text-2xl font-bold text-primary">5-10 min</span>
              <span className="text-sm text-muted-foreground">Removal Time</span>
            </div>
          </div>
        </div>
        <div>
          <OptimizedImage
            src="https://cdn.marblism.com/teuTWb0RCMD.webp"
            alt="Lift-out secondary glazing panel being removed from window reveal"
            className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            width={800}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default LiftOutHero;
