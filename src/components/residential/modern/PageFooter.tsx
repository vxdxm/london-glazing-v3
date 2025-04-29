
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";

interface PageFooterProps {
  scrollToTop: () => void;
}

const PageFooter = ({ scrollToTop }: PageFooterProps) => {
  return (
    <>
      <div className="flex justify-between items-center mt-12 border-t pt-6">
        <div></div>
        <div>
          <Button variant="outline" size="sm" onClick={scrollToTop} className="flex items-center gap-2">
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </Button>
        </div>
      </div>

      <div className="mt-12 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Need Expert Advice?</h3>
        <p className="mb-4">Our specialists can help you choose the right secondary glazing solution for your historic building.</p>
        <div className="flex flex-wrap gap-4">
          <Link to="/quote-request">
            <Button>Get a Quote</Button>
          </Link>
          <Link to="/commercial">
            <Button variant="outline">Explore Commercial Solutions</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PageFooter;
