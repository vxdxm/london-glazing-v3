
import React from "react";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import {
  FixedPanelIcon,
  HingedPanelIcon,
  VerticalSlidingIcon,
  HorizontalSlidingIcon,
  LiftOutIcon,
  MagneticIcon,
  CasementIcon,
} from "@/components/icons/GlazingTypeIcons";

const glazingLinks = [
  { title: "Fixed Panels", href: "/residential/fixed-secondary-glazing", icon: FixedPanelIcon },
  { title: "Hinged Panels", href: "/residential/casement-windows", icon: HingedPanelIcon },
  { title: "Vertical Sliding", href: "/residential/sash-windows", icon: VerticalSlidingIcon },
  { title: "Horizontal Sliding", href: "/residential/horizontal-sliding", icon: HorizontalSlidingIcon },
  { title: "Lift Out", href: "/residential/lift-out", icon: LiftOutIcon },
  { title: "Magnetic", href: "/residential/modern-solutions", icon: MagneticIcon },
  { title: "Casement", href: "/residential/casement-windows", icon: CasementIcon },
];

export function Footer() {
  return (
    <footer className="bg-secondary mt-8 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p>Tel: 0207 060 1572</p>
              <p>Arch 141, MacFarlane Road,</p>
              <p>London, W12 7LA</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
            <p>Monday - Friday: 9:00 AM - 5:00 PM (by appointment only)</p>
            <p>Saturday - Sunday: Closed</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Glazing Types</h3>
            <div className="grid grid-cols-2 gap-2">
              {glazingLinks.map((link) => (
                <Link
                  key={link.href + link.title}
                  to={link.href}
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <link.icon />
                  <span>{link.title}</span>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <p className="mb-4">Connect with us on social media</p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://www.instagram.com/secondaryglazinglondon/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-background/10 text-muted-foreground hover:text-foreground hover:bg-background/20 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/secondary-glazing-specialist-7500653a2/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-background/10 text-muted-foreground hover:text-foreground hover:bg-background/20 transition-colors"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/Sec0ndaryGlazin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-background/10 text-muted-foreground hover:text-foreground hover:bg-background/20 transition-colors"
                aria-label="Follow us on X"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a 
                href="https://web.facebook.com/profile.php?id=61585744672659" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-background/10 text-muted-foreground hover:text-foreground hover:bg-background/20 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <Link to="/privacy-policy" className="block text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="block text-muted-foreground hover:text-foreground transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/cookie-policy" className="block text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p>&copy; {new Date().getFullYear()} Secondary Glazing London. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
