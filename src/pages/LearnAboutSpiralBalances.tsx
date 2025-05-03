import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import SpiralBalancesSEO from "@/components/repairs/SpiralBalancesSEO";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const LearnAboutSpiralBalances = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <SpiralBalancesSEO />
    <MainNav />
    <main className="container mx-auto px-4 py-12 flex-grow">
      <BreadcrumbNav />
      <h1 className="text-4xl font-bold mb-8">Learn About Spiral Balances</h1>
      <div className="prose max-w-none mb-10">
        <p className="text-lg">
          Spiral balances are spring-loaded mechanisms that allow vertical sliding secondary glazing windows to operate smoothly and stay open at any height. They counteract the weight of the glazing unit, making them essential for easy, safe window use.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">How Spiral Balances Work</h2>
            <p className="text-gray-700 mb-2">
              Spiral balances act as counterweights within the frame of a vertical sliding window. As you open or close the sash, the spiral rod inside the balance turns, adjusting tension and providing balanced movement that prevents the window from slamming shut or being hard to move.
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Smooth window operation</li>
              <li>Secure sash positioning</li>
              <li>Improved safety and usability</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Common Issues</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Window won’t stay open or slams shut</li>
              <li>Sashes are difficult to move</li>
              <li>Component wear or breakage over time</li>
              <li>Noisy window operation</li>
            </ul>
            <p className="text-gray-700 mt-3">
              Addressing these issues promptly prevents further damage and maintains the performance of your secondary glazing.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="bg-green-50 p-6 rounded-lg mb-10">
        <h2 className="text-2xl font-semibold mb-2">Repair & Sustainability</h2>
        <p className="text-gray-700">
          Repairing spiral balances is a sustainable, cost-effective alternative to window replacement. It keeps materials out of landfill and extends the lifespan of your glazing system by 10-15 years.
        </p>
      </div>
      <div className="flex items-center justify-center mb-8">
        <img 
          src="/lovable-uploads/3fab2280-476f-4095-a2cf-83d2f4485ca3.png" 
          alt="Spiral balance mechanism in secondary glazing"
          className="rounded-lg shadow-lg w-full max-w-md"
        />
      </div>
      <div className="text-center">
        <Link
          to="/secondary-glazing-repairs"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg text-lg hover:bg-primary/90 transition-colors"
        >
          Back to Repairs Page
        </Link>
      </div>
    </main>
    <Footer />
  </div>
);

export default LearnAboutSpiralBalances;
