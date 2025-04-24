
import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import InsurancePremiumCalculator from "@/components/insurance/InsurancePremiumCalculator";
import { Shield, Lock } from "lucide-react";
import { Helmet } from "react-helmet";

const InsurancePremiums = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Insurance Premium Savings with Security Glazing | Secondary Glazing Specialist</title>
        <meta name="description" content="Learn how secondary security glazing can reduce your insurance premiums. Calculate potential savings and understand the benefits of enhanced window security." />
      </Helmet>
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Insurance Premium Benefits</h1>
        
        <div className="prose max-w-none mb-8 text-gray-600">
          <p className="text-lg">
            Installing security glazing not only enhances the protection of your property but can also 
            lead to significant savings on your insurance premiums. Many insurance providers offer reduced 
            rates for properties with enhanced security measures, including secondary security glazing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Shield className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Insurance Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>Reduced insurance premiums</li>
                <li>Enhanced security rating for your property</li>
                <li>Additional protection against break-ins</li>
                <li>Potential claims reduction</li>
                <li>Improved property value</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Lock className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Security Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>Multi-point locking systems</li>
                <li>Reinforced frames</li>
                <li>Laminated glass options</li>
                <li>Anti-lever mechanisms</li>
                <li>Insurance-approved specifications</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Calculate Your Savings</h2>
          <InsurancePremiumCalculator />
        </div>

        <div className="prose max-w-none text-gray-600 mb-12">
          <h2 className="text-3xl font-semibold mb-4">How Security Glazing Affects Insurance</h2>
          <p>
            Insurance companies assess risk based on various security measures in place at your property. 
            Secondary security glazing is recognized as an effective deterrent against break-ins and can 
            result in lower insurance premiums. The actual reduction in premiums can vary depending on:
          </p>
          <ul className="list-disc list-inside text-gray-500 mt-4 space-y-2">
            <li>Your insurance provider's specific policies</li>
            <li>The type of security glazing installed</li>
            <li>Your property's location and risk assessment</li>
            <li>The overall security system in place</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InsurancePremiums;
