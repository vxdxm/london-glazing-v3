
import { ArrowRight } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const AdditionalServices = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-6">Additional Repair Services</h2>
      <p className="text-gray-700 mb-8">
        Beyond spiral balance repairs, we offer a comprehensive range of repair services for all types of secondary glazing systems:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Frame Repairs</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <ArrowRight className="h-5 w-5 text-sky-500 flex-shrink-0 mt-0.5" />
                <span>Realignment of frames that have shifted over time</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-5 w-5 text-sky-500 flex-shrink-0 mt-0.5" />
                <span>Fixing or replacing damaged frame sections</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-5 w-5 text-sky-500 flex-shrink-0 mt-0.5" />
                <span>Sealing gaps to restore thermal and acoustic performance</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Hardware Replacement</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <ArrowRight className="h-5 w-5 text-sky-500 flex-shrink-0 mt-0.5" />
                <span>Lock and hinge replacements with security-enhanced options</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-5 w-5 text-sky-500 flex-shrink-0 mt-0.5" />
                <span>Handle and catch repairs or upgrades</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-5 w-5 text-sky-500 flex-shrink-0 mt-0.5" />
                <span>Child-safety mechanisms for family homes</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Glass Replacement</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <ArrowRight className="h-5 w-5 text-sky-500 flex-shrink-0 mt-0.5" />
                <span>Replacement of cracked or damaged glazing panels</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-5 w-5 text-sky-500 flex-shrink-0 mt-0.5" />
                <span>Upgrading to enhanced acoustic or thermal glass</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-5 w-5 text-sky-500 flex-shrink-0 mt-0.5" />
                <span>Fixing condensation issues between panes</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Maintenance Services</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <ArrowRight className="h-5 w-5 text-sky-500 flex-shrink-0 mt-0.5" />
                <span>Comprehensive servicing to extend lifespan</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-5 w-5 text-sky-500 flex-shrink-0 mt-0.5" />
                <span>Lubrication of sliding channels and mechanisms</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-5 w-5 text-sky-500 flex-shrink-0 mt-0.5" />
                <span>Brush seal replacement for improved draught-proofing</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AdditionalServices;
