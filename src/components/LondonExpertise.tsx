import { Link } from "react-router-dom";

export const LondonExpertise = () => {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <h2 className="text-3xl font-bold mb-8 text-foreground">Our London Expertise</h2>
      
      <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
        <p>
          We specialize in discreet secondary glazing for London's most prestigious postcodes. Whether you are dealing with the roar of traffic in Westminster or trying to improve the EPC rating of a Victorian villa in Kensington, our systems provide a <strong className="text-foreground">60-70% noise reduction</strong> without compromising your original windows. We are experts in working within the strict guidelines of London's <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline">Conservation Areas</Link> and <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">Grade I & II listed properties</Link>.
        </p>
        
        <p>
          Our team has decades of experience fitting secondary glazing to <Link to="/sash-window-secondary-glazing" className="text-primary hover:underline">sash windows</Link>, casement windows, and bespoke heritage frames across every London borough. We use high-specification <strong className="text-foreground">10.8mm acoustic laminate glass</strong> as standard on noise-critical installations, delivering measurable sound insulation that transforms homes on busy roads, near railways, and under flight paths. Every installation is surveyed, manufactured, and fitted by our in-house specialists — never subcontracted.
        </p>
        
        <p>
          From Edwardian terraces in Islington to Georgian townhouses in Belgravia, we understand the unique challenges that London's period properties present. Our secondary glazing systems are designed to be virtually invisible from both inside and outside, preserving the character of your home while delivering modern levels of thermal efficiency and <Link to="/noise-reduction-secondary-glazing" className="text-primary hover:underline">noise reduction</Link>. We handle all liaison with conservation officers and planning departments, making the process seamless for homeowners in sensitive heritage areas.
        </p>
      </div>
    </section>
  );
};
