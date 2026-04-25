import React from "react";
import SEOHelmet from "@/components/SEOHelmet";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CasementModernSolutions = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <SEOHelmet
        title="Modern Casement Window Secondary Glazing | uPVC & Aluminium"
        description="Slim-line secondary glazing for modern casement windows. Engineered for uPVC and aluminium primaries — 40-54dB Rw, 1.4 W/m²K, magnetic seals & lift-out access."
        canonicalPath="/residential/casement-windows/modern-solutions"
      />
      
      <MainNav />
      
      <div className="container mx-auto px-4 py-12">
        <BreadcrumbNav />
        
        <article className="prose max-w-none">
          <h1 className="text-4xl font-bold mb-6">Modern Casement Window Secondary Glazing</h1>
          
          <p className="text-lg mb-6 text-muted-foreground">
            Modern casement windows — uPVC, powder-coated aluminium, and composite systems installed from the mid-1980s
            onwards — already provide a baseline of thermal and acoustic performance. The role of secondary glazing here
            is to push performance into the territory required by urban noise environments (above 70dBA façade), Passivhaus
            retrofits, and EPC band B/A targets. Our modern range uses thin-line aluminium frames matched to the host
            window, hidden magnetic seals, and laminated acoustic glass to deliver substantial dB and U-value gains.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8">When to Specify Secondary Glazing on Modern Windows</h2>
          <p className="mb-4">
            A modern double-glazed unit (28mm IGU with 4-16-4 build-up) typically achieves Rw 30–32dB and a U-value of
            around 1.4 W/m²K. This is adequate for residential streets but falls short in three common scenarios:
            properties on the A-road network or under Heathrow flight paths (façade levels &gt;65 dBA), homes targeting
            EPC A or Passivhaus EnerPHit (whole-window U-value &lt;0.85 W/m²K), and bedrooms where WHO night-noise
            guidelines (Lnight &lt;40 dBA) cannot be met. Adding a 100–200mm secondary plane in front of an existing
            double-glazed window typically adds 12–22dB Rw and reduces U-value to 1.1–1.4 W/m²K combined.
          </p>

          <Card className="my-8">
            <CardHeader>
              <CardTitle>Performance Data — Modern Casement System</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li><strong>Acoustic reduction (Rw, combined):</strong> 40–54dB depending on glass and gap (BS EN ISO 717-1)</li>
                <li><strong>Combined U-value:</strong> 1.1–1.4 W/m²K when retrofitted to existing IGU</li>
                <li><strong>Frame depth:</strong> 18mm slim-line aluminium, polyester powder-coated to RAL/BS spec</li>
                <li><strong>Glass options:</strong> 6.4mm laminated, 8.8mm Stadip Silence, 10.8mm acoustic, 12.8mm premium acoustic</li>
                <li><strong>Air gap:</strong> 100–200mm, with absorptive reveal lining for &gt;200Hz performance</li>
                <li><strong>Seals:</strong> EPDM compression with concealed magnetic catch system</li>
                <li><strong>Operation:</strong> Side-hinged, top-hung, horizontal sliding, or fully removable lift-out</li>
              </ul>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-semibold mb-4 mt-8">Aesthetic Integration</h2>
          <p className="mb-4">
            Modern casements often feature minimal sightlines and large glazed areas, so the secondary plane must visually
            disappear. Our 18mm slim-line frame is specified at the same RAL reference as the primary window — anthracite
            grey (RAL 7016), jet black (9005), and traffic white (9016) being the most common. Glazing bars are available
            but rarely specified on modern installs. For wall-to-ceiling sliding doors and corner glazing, we offer
            horizontal sliding configurations on stainless-steel bottom-rolling tracks rated for 80kg sash weights.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8">Suitable Applications</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>New-build flats and apartments in urban acoustic environments</li>
            <li>EnerPHit and Passivhaus retrofit upgrades targeting U &lt;0.85 W/m²K</li>
            <li>EPC band C properties upgrading to band A or B</li>
            <li>Homes near Heathrow, City Airport, and arterial road corridors</li>
            <li>Music studios, home offices, and acoustically sensitive rooms</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 mt-8">Building Regulations</h2>
          <p className="mb-6">
            Secondary glazing fitted to existing modern windows is exempt from Approved Document L's replacement-window
            U-value cap (1.4 W/m²K) because it constitutes an addition rather than a replacement. There is no FENSA or
            Building Control notification requirement provided the primary window is left in situ. Where the install
            forms part of a wider Passivhaus or EnerPHit project, we supply full thermal modelling data (PHPP-compatible
            U-values and ψ-values) for the building physicist.
          </p>

          <div className="bg-secondary/30 p-6 rounded-lg my-8">
            <h3 className="text-xl font-semibold mb-3">Specification Service</h3>
            <p className="mb-4">
              For specifiers and architects: we issue NBS-formatted specification clauses, U-value calculations to
              BS EN ISO 10077-1, and Rw test data for the exact glass-and-gap combination quoted. Mock-up panels are
              available for client sign-off on large-scheme retrofits.
            </p>
            <Button onClick={() => navigate("/quote-request")}>Request NBS Spec & Performance Data</Button>
          </div>
        </article>
      </div>
      
      <Footer />
    </div>
  );
};

export default CasementModernSolutions;
