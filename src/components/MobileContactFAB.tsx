import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, MessageCircle, MessageSquarePlus, Plus, X } from "lucide-react";

/**
 * Mobile-only floating action button.
 * Collapses Quick Contact / Get Quote / WhatsApp into a single 56x56 FAB
 * so the three desktop buttons never cover content on small screens.
 */
const MobileContactFAB = () => {
  const [open, setOpen] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(16);
  const location = useLocation();

  // Sit above any page-level sticky mobile CTA bar so it never covers it.
  useEffect(() => {
    const measure = () => {
      const bar = document.querySelector<HTMLElement>("[data-mobile-cta-bar]");
      setBottomOffset(bar ? bar.offsetHeight + 16 : 16);
    };
    measure();
    const id = window.setTimeout(measure, 300);
    window.addEventListener("resize", measure);
    return () => {
      window.clearTimeout(id);
      window.removeEventListener("resize", measure);
    };
  }, [location.pathname]);

  const actionClasses =
    "flex items-center gap-3 rounded-full pl-4 pr-5 py-3 text-sm font-medium shadow-lg text-primary-foreground";

  return (
    <div
      style={{ bottom: bottomOffset }}
      className="md:hidden fixed right-4 z-50 flex flex-col items-end gap-3"
    >
      {open && (
        <>
          <a
            href="https://wa.me/447999333533"
            target="_blank"
            rel="noopener noreferrer"
            className={`${actionClasses} bg-green-600`}
            onClick={() => setOpen(false)}
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            WhatsApp
          </a>
          <Link
            to="/quote-request"
            className={`${actionClasses} bg-primary`}
            onClick={() => setOpen(false)}
          >
            <MessageSquarePlus className="w-5 h-5" aria-hidden="true" />
            Get Quote
          </Link>
          <Link
            to="/contact"
            className={`${actionClasses} bg-blue-600`}
            onClick={() => setOpen(false)}
          >
            <Mail className="w-5 h-5" aria-hidden="true" />
            Quick Contact
          </Link>
        </>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close contact options" : "Open contact options"}
        className="h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-xl flex items-center justify-center transition-transform active:scale-95"
      >
        {open ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default MobileContactFAB;
