import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SecurityGlazing = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Security Glazing</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Enhanced Protection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Additional security features for your property without compromising on style.
              </p>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>Reinforced glazing</li>
                <li>Multi-point locking</li>
                <li>Tamper-resistant frames</li>
                <li>Safety glass options</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Security Features</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Comprehensive security solutions for peace of mind.
              </p>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>Anti-lever mechanisms</li>
                <li>Toughened glass</li>
                <li>Security fixings</li>
                <li>Child safety options</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SecurityGlazing;