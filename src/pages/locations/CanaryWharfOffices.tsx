import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import LocationBreadcrumb from "@/components/locations/LocationBreadcrumb";
import { CanaryWharfOfficesSEO } from "@/components/locations/CanaryWharfOfficesSEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CanaryWharfOffices = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <CanaryWharfOfficesSEO />
      <MainNav />
      
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <LocationBreadcrumb locationName="Canary Wharf" />
        
        <h1 className="text-4xl font-bold mb-8">Commercial Secondary Glazing for Canary Wharf Offices</h1>
        
        <p className="text-lg mb-6 text-muted-foreground">
          Canary Wharf — E14 — sits at the convergence of the DLR network, the Jubilee Line, the Elizabeth Line, river
          traffic on the Thames, and the A1206/A13 arterial corridors. Façade-level noise on the West India Quay,
          Heron Quays, and South Quay frontages is routinely measured at 65–72 dBA Leq, with peaks exceeding 80 dBA
          during peak DLR cycles. For Cat A and Cat B office fit-outs targeting BCO Specification 2023 ambient noise
          levels (NR 35 in open-plan, NR 30 in meeting rooms), the existing curtain-wall glazing — typically a 28mm
          IGU achieving Rw 35dB — is inadequate. Commercial secondary glazing is the BCO-compliant retrofit route.
        </p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>E14 Acoustic Profile — Measured Façade Levels</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li><strong>West India Avenue (DLR adjacent):</strong> 68–72 dBA Leq daytime, 78 dBA peak</li>
              <li><strong>Bank Street (Jubilee Line vibration zone):</strong> 64–69 dBA Leq, plus structure-borne 55 Hz tonal</li>
              <li><strong>Westferry Road (A1206):</strong> 70–74 dBA Leq, low-frequency lorry pass-by dominant</li>
              <li><strong>South Dock waterside:</strong> 62–66 dBA Leq plus intermittent helicopter and river-bus events</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-4">
              Source: TfL Strategic Noise Mapping 2022 and our own pre-survey acoustic measurements.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-semibold mb-4">BCO and WELL Building Standard Targets</h2>
        <p className="mb-6">
          The BCO Guide to Specification 2023 sets a maximum internal ambient noise level of NR 35 in open-plan office
          space and NR 30 in cellular offices and meeting rooms. The WELL Building Standard v2 Sound concept (S01 —
          Sound Mapping, S02 — Maximum Noise Levels) requires NC 40 in open work areas and NC 30 in conference rooms.
          Achieving these against a 70 dBA façade requires a glazing system delivering at least Rw 50 dB — well beyond
          the 35–40 dB Rw of standard commercial IGUs. Our commercial secondary system, fitted 150–200mm internally of
          the existing curtain wall, lifts whole-window Rw to 52–58 dB while preserving the building's external aesthetic.
        </p>

        <h2 className="text-2xl font-semibold mb-4">System Specification — Canary Wharf Offices</h2>
        <Card className="mb-8">
          <CardContent className="pt-6">
            <ul className="space-y-3">
              <li><strong>Frame:</strong> 22mm slim-line aluminium, polyester powder-coated to architect's RAL spec, concealed-fix sub-frame</li>
              <li><strong>Glass:</strong> 10.8mm or 12.8mm acoustic laminated (Stadip Silence) with multiple PVB interlayers</li>
              <li><strong>Air gap:</strong> 150–200mm depending on cassette depth and reveal availability</li>
              <li><strong>Cavity treatment:</strong> Mineral-fibre acoustic absorbent to reveals (NRC ≥0.85)</li>
              <li><strong>Operation:</strong> Fixed lights to perimeter zones, horizontal sliders for cleaning access, lift-out for fan-coil maintenance</li>
              <li><strong>Performance:</strong> Rw 52–58 dB combined, U-value 1.2 W/m²K, light transmittance ≥78%</li>
              <li><strong>Compliance:</strong> CWCT TN66 commercial test data, BS EN ISO 717-1, BCO 2023 Cat A compatible</li>
            </ul>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-semibold mb-4">Installation Without Business Disruption</h2>
        <p className="mb-6">
          Canary Wharf Estate Management requires all internal works in the Canary Wharf Group portfolio (One Canada
          Square, the HSBC Tower, the Citi Tower, and the surrounding cluster) to be coordinated through the building's
          Out-of-Hours permit system. We routinely install during 18:00–06:00 weekday windows or 07:00–18:00 Saturdays,
          with sign-on/sign-off at the building's loading bay and full RAMS submitted in advance. Each floor is typically
          completed in two consecutive nights, with no impact on tenant operations.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Recent E14 Projects</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Cabot Square — Cat A refurbishment, 240 linear metres of acoustic secondary glazing, Rw 54 dB achieved</li>
          <li>Heron Quays — trading floor upgrade, NR 32 hit against 71 dBA façade, completed over 14 night shifts</li>
          <li>South Quay — meeting-room cluster, NC 28 verified post-install for video-conferencing acoustic privacy</li>
          <li>Westferry Circus — 18th-floor Boardroom, sliding system specified for unobstructed Thames views</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Maintenance and Cleaning Access</h2>
        <p className="mb-6">
          Lift-out and horizontal-sliding configurations allow facilities teams to access the cavity face of the
          primary curtain wall for cleaning without removing the secondary system. Magnetic trim seals release with
          a single hand and re-seat against the EPDM gasket without re-commissioning. We provide a 10-year warranty
          on frames and seals, plus an annual inspection contract for managed buildings.
        </p>

        <div className="bg-primary text-primary-foreground p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Acoustic Survey & BCO-Compliant Spec for Your E14 Office</h2>
          <p className="mb-6">
            We provide on-site dB measurement, BCO/WELL gap analysis, and CAD drawings for tender. Most surveys booked
            within 5 working days; full specification and budget cost issued within 10.
          </p>
          <Button variant="secondary" onClick={() => navigate("/quote-request")}>
            Request a Commercial Acoustic Survey
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CanaryWharfOffices;
