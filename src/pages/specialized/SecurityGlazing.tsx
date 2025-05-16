import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Shield, Lock, Wrench, CheckCircle } from "lucide-react";
import SecurityBreakInCalculator from "@/components/SecurityBreakInCalculator";
import { Link } from "react-router-dom";

const SecurityGlazing = () => {
  return <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Security Glazing Solutions</h1>
        
        <div className="prose max-w-none mb-8 text-gray-600">
          <p className="text-lg">
            Our security glazing solutions provide superior protection for your property through advanced secondary glazing technology. 
            By adding an additional layer of specially designed security glass to your existing windows, we create a robust barrier 
            against forced entry while maintaining the aesthetic appeal of your property. Our solutions combine toughened or laminated 
            glass options with heavy-duty frames and sophisticated locking mechanisms to deliver comprehensive security without 
            compromising on style or functionality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="col-span-1 md:col-span-3 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <AspectRatio ratio={21 / 9}>
                <img alt="Security glazing system installation showcase" className="w-full h-full object-cover" src="/lovable-uploads/ef528e3e-c607-4674-a887-b1635565f167.jpg" />
              </AspectRatio>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Advanced Security Features</h2>
                <p className="text-gray-600">
                  Our security glazing systems incorporate multiple layers of protection, including reinforced frames,
                  multi-point locking systems, and laminated glass options. These features work together to create
                  a formidable barrier against intrusion while maintaining the aesthetic appeal of your property.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mb-12">
          <SecurityBreakInCalculator />
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Physical Security Features</h2>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Shield className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Physical Security Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>Toughened or laminated glass options</li>
                <li>Anti-lever mechanisms to prevent forced entry</li>
                <li>Heavy-duty aluminum frames</li>
                <li>Concealed fixings that can't be tampered with</li>
                <li>Multi-point locking systems</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Locking Mechanisms</h2>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Lock className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Locking Mechanisms</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>High-security mortice locks</li>
                <li>Child-safe restrictors available</li>
                <li>Keyed alike options for convenience</li>
                <li>Flush lock options for clean aesthetics</li>
                <li>Emergency quick-release mechanisms</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Technical Specifications</h2>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Wrench className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Security Standards</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Our security glazing solutions meet or exceed industry standards for protection against forced entry.
                </p>
                
                <h3 className="text-xl font-semibold">Glass Options</h3>
                <ul className="list-disc list-inside text-gray-500 space-y-2">
                  <li>6.4mm laminated glass - basic security</li>
                  <li>8.8mm laminated glass - enhanced security</li>
                  <li>10.8mm laminated glass - high security</li>
                  <li>12.8mm laminated glass - maximum security</li>
                </ul>

                <h3 className="text-xl font-semibold">Frame Features</h3>
                <ul className="list-disc list-inside text-gray-500 space-y-2">
                  <li>Aluminum frames with reinforced corners</li>
                  <li>Hidden fixing points</li>
                  <li>Anti-tamper screws</li>
                  <li>Strengthened meeting rails</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Additional Benefits</h2>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CheckCircle className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Beyond Security</CardTitle>
            </CardHeader>
            <CardContent className="">
              <div className="space-y-4">
                <p className="text-gray-600">
                  While primarily enhancing security, our secondary glazing solutions offer multiple additional benefits:
                </p>
                
                <ul className="list-disc list-inside text-gray-500 space-y-2">
                  <li>
                    <Link to="/secondary-glazing-noise-reduction" className="hover:text-primary transition-colors">
                      Noise reduction up to 80%
                    </Link>
                  </li>
                  <li>
                    <Link to="/specialized/thermal-insulation" className="hover:text-primary transition-colors">
                      Improved thermal insulation
                    </Link>
                  </li>
                  <li>
                    <Link to="/specialized/condensation-control" className="hover:text-primary transition-colors">
                      Reduced condensation
                    </Link>
                  </li>
                  <li>
                    <Link to="/specialized/uv-protection" className="hover:text-primary transition-colors">
                      UV protection for furnishings
                    </Link>
                  </li>
                  <li>
                    <Link to="/specialized/secondary-glazing-original-windows" className="hover:text-primary transition-colors">
                      Preservation of original window character
                    </Link>
                  </li>
                  <li>Lower insurance premiums potential</li>
                  <li>
                    <Link to="/specialized/thermal-insulation#savings" className="hover:text-primary transition-colors">
                      Energy bill savings
                    </Link>
                  </li>
                  <li>
                    <Link to="/specialized/insurance-premiums" className="hover:text-primary transition-colors">
                      Lower insurance premiums potential
                    </Link>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>;
};
export default SecurityGlazing;
