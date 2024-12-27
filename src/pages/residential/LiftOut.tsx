import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LiftOut = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Lift Out Windows</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="w-full h-64 mb-8 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt="Lift out window system demonstrating easy removal for cleaning"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Key Advantages</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Complete removal capability</li>
                <li>Easy cleaning and maintenance</li>
                <li>Simple installation process</li>
                <li>Full window access when needed</li>
                <li>Lightweight design</li>
                <li>Cost-effective solution</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Design Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Secure fixing mechanisms</li>
                <li>Durable frame construction</li>
                <li>Weather-tight seals</li>
                <li>Various glass options</li>
                <li>Custom sizing available</li>
                <li>Professional installation</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LiftOut;