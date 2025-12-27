import { FixedPanelIcon } from "@/components/icons/GlazingTypeIcons";

export const FixedHero = () => {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-4 mb-6">
        <FixedPanelIcon size={56} className="text-primary" />
        <h1 className="text-4xl font-bold">Fixed Secondary Glazing | Maximum Performance, Lowest Cost</h1>
      </div>
      
      <p className="text-lg text-muted-foreground mb-6">
        Fixed secondary glazing offers London homeowners the ultimate combination of maximum thermal and acoustic performance at the lowest cost. Perfect for properties with never-opened windows, extreme noise environments, and budget-conscious homeowners seeking the best value, fixed units deliver superior results without the complexity of opening mechanisms.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-primary/10 p-4 rounded-lg text-center">
          <p className="text-2xl font-bold text-primary">£250-£550</p>
          <p className="text-sm text-muted-foreground">Per Window</p>
        </div>
        <div className="bg-primary/10 p-4 rounded-lg text-center">
          <p className="text-2xl font-bold text-primary">60-70%</p>
          <p className="text-sm text-muted-foreground">Heat Loss Reduction</p>
        </div>
        <div className="bg-primary/10 p-4 rounded-lg text-center">
          <p className="text-2xl font-bold text-primary">75-85%</p>
          <p className="text-sm text-muted-foreground">Noise Reduction</p>
        </div>
        <div className="bg-primary/10 p-4 rounded-lg text-center">
          <p className="text-2xl font-bold text-primary">25-30</p>
          <p className="text-sm text-muted-foreground">Years Lifespan</p>
        </div>
      </div>
    </section>
  );
};
