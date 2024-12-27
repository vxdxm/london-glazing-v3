import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Combination = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Combination Windows</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="w-full h-64 mb-8 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b"
                alt="Combination window system showcasing multiple opening styles"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Versatile Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Multiple opening styles in one unit</li>
                <li>Customizable configurations</li>
                <li>Ideal for unique window shapes</li>
                <li>Maximum flexibility</li>
                <li>Enhanced functionality</li>
                <li>Tailored to your needs</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>System Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Superior thermal performance</li>
                <li>Excellent sound insulation</li>
                <li>Enhanced security features</li>
                <li>Weather protection</li>
                <li>Professional installation</li>
                <li>Long-term durability</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Combination;