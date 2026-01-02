
import React from "react";
import { Instagram, Linkedin, Facebook, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const mainServices = [
  { title: "Listed Buildings Secondary Glazing", href: "/listed-buildings-secondary-glazing" },
  { title: "Conservation Areas Secondary Glazing", href: "/conservation-areas-secondary-glazing" },
  { title: "Victorian Windows Secondary Glazing", href: "/victorian-windows-secondary-glazing" },
  { title: "Sash Window Secondary Glazing", href: "/sash-window-secondary-glazing" },
  { title: "Georgian Windows Secondary Glazing", href: "/georgian-windows-secondary-glazing" },
  { title: "Edwardian Property Secondary Glazing", href: "/edwardian-property-secondary-glazing" },
  { title: "Thermal Insulation Secondary Glazing", href: "/thermal-insulation-secondary-glazing" },
  { title: "Noise Reduction Secondary Glazing", href: "/noise-reduction-secondary-glazing" },
  { title: "Commercial Secondary Glazing", href: "/commercial" },
  { title: "Residential Secondary Glazing", href: "/residential" },
];

const windowTypes = [
  { title: "Sash Windows", href: "/residential/sash-windows" },
  { title: "Casement Windows", href: "/residential/casement-windows" },
  { title: "Bay Windows", href: "/residential/bay-windows" },
  { title: "Horizontal Sliding", href: "/residential/horizontal-sliding" },
  { title: "Crittall Windows", href: "/residential/crittall-windows" },
  { title: "Fixed Secondary Glazing", href: "/residential/fixed-secondary-glazing" },
];

const serviceAreas = [
  { title: "Central London", href: "/areas/central-london" },
  { title: "North London", href: "/areas/north-london" },
  { title: "South London", href: "/areas/south-london" },
  { title: "East London", href: "/areas/east-london" },
  { title: "West London", href: "/areas/west-london" },
  { title: "Greater London", href: "/areas/greater-london" },
  { title: "Home Counties", href: "/areas/home-counties" },
];

const locations = [
  { title: "Kensington", href: "/locations/listed-kensington" },
  { title: "Islington", href: "/locations/victorian-islington" },
  { title: "Hampstead", href: "/locations/edwardian-hampstead" },
  { title: "Richmond", href: "/locations/conservation-richmond" },
  { title: "Chelsea", href: "/locations/chelsea-draught-proofing" },
  { title: "Belgravia", href: "/locations/georgian-belgravia" },
];

const resources = [
  { title: "Quote Request", href: "/quote-request" },
  { title: "Gallery", href: "/gallery" },
  { title: "Blog", href: "/blog" },
  { title: "FAQs", href: "/faqs" },
  { title: "Secondary vs Double Glazing", href: "/guides/secondary-vs-double-glazing" },
  { title: "DIY vs Professional", href: "/guides/diy-vs-professional" },
  { title: "U-Values & dB Ratings", href: "/guides/u-values-db-ratings" },
];

const companyInfo = [
  { title: "Contact Us", href: "/contact" },
  { title: "Locations", href: "/locations" },
];

const legalLinks = [
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "Terms & Conditions", href: "/terms-and-conditions" },
  { title: "Cookie Policy", href: "/cookie-policy" },
];

export function Footer() {
  return (
    <footer className="bg-secondary mt-8 py-12" role="contentinfo" aria-label="Site footer">
      <div className="container mx-auto px-4">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4" id="contact-heading">Contact Us</h3>
            <address className="not-italic space-y-3" aria-labelledby="contact-heading">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 text-primary" aria-hidden="true" />
                <a href="tel:02070601572" className="hover:text-primary" aria-label="Phone: 0207 060 1572">0207 060 1572</a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-primary" aria-hidden="true" />
                <div>
                  <p>Arch 141, MacFarlane Road,</p>
                  <p>London, W12 7LA</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-1 text-primary" aria-hidden="true" />
                <div>
                  <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
                  <p className="text-muted-foreground text-sm">(by appointment only)</p>
                </div>
              </div>
            </address>
            
            {/* Social Links */}
            <nav className="mt-6" aria-label="Social media links">
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://www.instagram.com/secondaryglazinglondon/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-background/10 text-muted-foreground hover:text-foreground hover:bg-background/20 transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/secondary-glazing-specialist-7500653a2/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-background/10 text-muted-foreground hover:text-foreground hover:bg-background/20 transition-colors"
                  aria-label="Connect with us on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="https://x.com/Sec0ndaryGlazin" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-background/10 text-muted-foreground hover:text-foreground hover:bg-background/20 transition-colors"
                  aria-label="Follow us on X"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a 
                  href="https://web.facebook.com/profile.php?id=61585744672659" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-background/10 text-muted-foreground hover:text-foreground hover:bg-background/20 transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </nav>
          </div>

          {/* Main Services */}
          <nav aria-label="Services navigation">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {mainServices.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Window Types */}
          <nav aria-label="Window types navigation">
            <h3 className="text-lg font-semibold mb-4">Window Types</h3>
            <ul className="space-y-2">
              {windowTypes.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Service Areas */}
          <nav aria-label="Service areas navigation">
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {serviceAreas.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Locations */}
          <nav aria-label="Locations navigation">
            <h3 className="text-lg font-semibold mb-4">Popular Locations</h3>
            <ul className="space-y-2">
              {locations.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Resources & Company */}
          <div>
            <nav aria-label="Resources navigation">
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 mb-6">
                {resources.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            <nav aria-label="Company navigation">
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {companyInfo.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Secondary Glazing Specialist London. All rights reserved.
            </p>
            <nav aria-label="Legal links">
              <ul className="flex flex-wrap justify-center gap-4">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
