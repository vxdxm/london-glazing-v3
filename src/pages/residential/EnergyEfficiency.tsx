import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";
import { useNavigate } from "react-router-dom";

const EnergyEfficiency = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <EnhancedSEO
        title="Energy Efficient Casement Window Secondary Glazing | U-value 1.6"
        description="Cut window heat loss by up to 65%. Engineered secondary glazing for casement windows — U-values to 1.6 W/m²K, Low-E coatings, argon fill, BR Part L and EPC compliance."
        canonicalPath="/residential/energy-efficiency"
        type="service"
        serviceName="Energy Efficient Secondary Glazing for Casement Windows"
        keywords={["energy efficient secondary glazing", "casement window U-value", "Low-E secondary glazing London", "Part L compliant secondary glazing", "EPC band B retrofit"]}
        includeLocalBusiness
      />
      <MainNav />
      <main className="container mx-auto px-4 py-16 max-w-5xl">
        <h1 className="text-4xl font-bold mb-6">Energy Efficiency: Secondary Glazing for Casement Windows</h1>

        <p className="text-lg text-muted-foreground mb-8">
          A single-glazed casement window typically loses heat at 5.0–5.8 W/m²K — between three and four times the rate
          of a modern building façade. Secondary glazing addresses this loss without replacing the original window, making
          it the specified solution for listed buildings, conservation-area properties, and any retrofit where Part L of
          the Building Regulations applies but full window replacement is not permitted or desired. Below is the technical
          specification of our energy-efficient casement system, the test data behind it, and the EPC and Building
          Regulations context.
        </p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Whole-Window U-Value Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li><strong>Single-glazed primary alone:</strong> Uw 5.0–5.8 W/m²K (4mm float glass in timber frame)</li>
              <li><strong>+ 4mm float secondary, 100mm gap:</strong> Uw 1.9 W/m²K (62% reduction)</li>
              <li><strong>+ 6mm Low-E secondary, 150mm gap, argon-filled cavity option:</strong> Uw 1.6 W/m²K (69% reduction)</li>
              <li><strong>+ 14mm Low-E IGU secondary unit:</strong> Uw 1.4 W/m²K (74% reduction — EnerPHit-compatible)</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-4">
              All U-values calculated to BS EN ISO 10077-1 using verified frame ψ-values and centre-pane U-values from
              the glass manufacturer's data sheets.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-semibold mb-4">Low-E Coatings: How They Work</h2>
        <p className="mb-4">
          Low-emissivity (Low-E) coatings are microscopically thin metallic oxide layers — typically silver-based — applied
          to one face of the secondary glass during manufacture. They reflect long-wave infrared radiation back into the
          room while remaining transparent to visible light. In a secondary glazing build-up, the Low-E coating is
          specified on the inboard face of the secondary glass (surface 3, counting from outside) so that radiant heat
          from the room is reflected back rather than radiating across the cavity to the cold primary glass.
        </p>
        <p className="mb-6">
          A standard 4mm float glass has an emissivity (ε) of around 0.84. A soft-coat Low-E glass reduces this to
          ε ≤ 0.04 — a 95% reduction in radiative heat transfer. This is the single largest gain available in a
          secondary glazing specification and is responsible for moving the system from Uw 1.9 to Uw 1.6 W/m²K.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Air Gap Optimisation</h2>
        <p className="mb-6">
          Cavity depth is the second lever. Conductive and convective heat losses both reduce as the gap increases —
          but only up to a point. Below 60mm, conductive losses dominate; above 100mm, the cavity becomes large enough
          for convection currents to develop and U-value gains plateau. The thermal optimum sits at around 100–150mm.
          Crucially, however, acoustic performance benefits from much wider gaps (200mm+), so for combined thermal-and-acoustic
          briefs we typically specify 150mm as the best compromise.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Draught and Air Permeability</h2>
        <p className="mb-6">
          Original casement windows commonly fail air-permeability testing at 8–12 m³/h·m² (Class 1 to BS EN 12207),
          versus a modern Part L target of 3 m³/h·m² (Class 4). Secondary glazing creates a sealed second plane that
          reduces measured leakage to under 1 m³/h·m² when fitted with EPDM compression seals on a powder-coated aluminium
          frame. This eliminates perceptible draughts at the window head and cill — typically the largest single source
          of comfort complaints in pre-1919 housing stock.
        </p>

        <h2 className="text-2xl font-semibold mb-4">EPC and Building Regulations Context</h2>
        <p className="mb-4">
          Secondary glazing is recognised under SAP 2012/RdSAP as a thermal upgrade. Adding a secondary system to a
          single-glazed casement window typically improves SAP score by 4–9 points, often sufficient to lift a property
          from EPC band E to band C, or from C to B. For Minimum Energy Efficiency Standard (MEES) compliance in the
          private rented sector — band E minimum, rising to C by 2028 — secondary glazing is one of the few measures
          available for listed and conservation-area properties.
        </p>
        <p className="mb-6">
          Approved Document L1B (existing dwellings) sets a U-value cap of 1.4 W/m²K for replacement windows but
          explicitly exempts secondary glazing because the original window is retained. There is no FENSA or Building
          Control notification requirement, and no impact on the property's listed status.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Carbon and Cost Savings</h2>
        <p className="mb-6">
          A typical 3-bed Victorian terrace with 12m² of single-glazed casement windows loses around 1,800 kWh of heat
          per year through the glazing alone. Upgrading to a Low-E secondary system (Uw 1.6) reduces this to around
          560 kWh — a saving of 1,240 kWh, equivalent to 230kg CO₂e per year at the current UK grid carbon factor and
          around £85–£110 on annual gas bills at 2025 unit rates.
        </p>

        <div className="bg-secondary/30 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Thermal Survey & U-Value Modelling</h3>
          <p className="mb-4">
            We provide pre-install U-value calculations and post-install thermal imaging on request, plus full SAP-compatible
            data sheets for your energy assessor. Specifiers receive PHPP-format data for Passivhaus EnerPHit projects.
          </p>
          <Button onClick={() => navigate("/quote-request")}>Book a Thermal Survey</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EnergyEfficiency;
