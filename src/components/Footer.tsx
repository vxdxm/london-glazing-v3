
import React from "react";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-secondary mt-8 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <p className="mb-4">Connect with us on social media</p>
            <a 
              href="https://instagram.com/secondaryglazinglondon" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>@secondaryglazinglondon</span>
            </a>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <Link to="/privacy-policy" className="block text-gray-600 hover:text-gray-900 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="block text-gray-600 hover:text-gray-900 transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/cookie-policy" className="block text-gray-600 hover:text-gray-900 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p>&copy; {new Date().getFullYear()} Secondary Glazing London. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
