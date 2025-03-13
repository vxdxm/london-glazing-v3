
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const RepairsCTA = () => {
  return (
    <section className="bg-sky-50 p-8 rounded-lg">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Restore Your Secondary Glazing?</h2>
        <p className="text-lg text-gray-700 mb-6">
          Whether it's spiral balance issues or any other secondary glazing repairs, our specialist team is ready to help.
          Contact us today for a no-obligation assessment and quote.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link to="/quote-request">
              Request Repair Quote
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="tel:0207 060 1572">
              Call Us: 0207 060 1572
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RepairsCTA;
