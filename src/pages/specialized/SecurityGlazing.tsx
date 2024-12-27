import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Shield, Lock, Wrench, CheckCircle } from "lucide-react";
import SecurityBreakInCalculator from "@/components/SecurityBreakInCalculator";

const SecurityGlazing = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Security Glazing Solutions</h1>
        
        <div className="mb-12">
          <SecurityBreakInCalculator />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-600">
                  While primarily enhancing security, our secondary glazing solutions offer multiple additional benefits:
                </p>
                
                <ul className="list-disc list-inside text-gray-500 space-y-2">
                  <li>Noise reduction up to 80%</li>
                  <li>Improved thermal insulation</li>
                  <li>Reduced condensation</li>
                  <li>UV protection for furnishings</li>
                  <li>Preservation of original window character</li>
                  <li>Lower insurance premiums potential</li>
                  <li>Energy bill savings</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SecurityGlazing;
