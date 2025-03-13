
import { Info, Leaf } from "lucide-react";

const SpiralBalanceSection = () => {
  return (
    <section id="spiral-balances" className="mb-16 scroll-mt-20">
      <h2 className="text-3xl font-semibold mb-8">Spiral Balance Repair & Replacement</h2>
      
      <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
        <div className="flex-1">
          <h3 className="text-2xl font-medium mb-4">What Are Spiral Balances?</h3>
          <p className="text-gray-700 mb-4">
            Spiral balances are the spring-loaded mechanism that enables vertical sliding sashes to 
            operate smoothly and stay in position when raised. They provide the counterbalance for 
            the weight of the glass, making operation effortless.
          </p>
          <p className="text-gray-700 mb-4">
            Over time, these balances can wear out, lose tension, or break completely, resulting in 
            windows that slam shut, won't stay open, or become extremely difficult to operate.
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4">
            <div className="flex">
              <Info className="h-6 w-6 text-amber-500 mr-2 flex-shrink-0" />
              <p className="text-amber-700">
                Signs your spiral balances need attention include: windows that won't stay open, 
                sashes that are hard to move, or sudden slamming when trying to open the window.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img 
            src="/lovable-uploads/3fab2280-476f-4095-a2cf-83d2f4485ca3.png" 
            alt="Spiral balance mechanism for vertical sliding secondary glazing"
            className="rounded-lg shadow-xl w-full object-cover"
          />
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-2xl font-medium mb-4">Our Spiral Balance Repair Process</h3>
        <ol className="space-y-4">
          <li className="flex gap-4">
            <div className="bg-sky-700 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</div>
            <div>
              <h4 className="font-medium text-lg">Detailed Assessment</h4>
              <p className="text-gray-600">
                Our technicians will examine your vertical sliding units to diagnose the exact issue with your spiral balances,
                identifying whether repair or replacement is needed.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="bg-sky-700 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</div>
            <div>
              <h4 className="font-medium text-lg">Balance Replacement</h4>
              <p className="text-gray-600">
                Using manufacturer-matched components, we'll carefully remove the damaged balances and 
                install new ones calibrated to the precise weight of your sashes.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="bg-sky-700 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</div>
            <div>
              <h4 className="font-medium text-lg">System Testing</h4>
              <p className="text-gray-600">
                We'll test the operation multiple times to ensure smooth movement, 
                proper balance, and verify that sashes remain in position when opened.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="bg-sky-700 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</div>
            <div>
              <h4 className="font-medium text-lg">Final Adjustment</h4>
              <p className="text-gray-600">
                Fine-tuning of the tension and alignment to optimize performance and extend the lifespan of your secondary glazing system.
              </p>
            </div>
          </li>
        </ol>
      </div>
      
      <div className="bg-green-50 p-6 rounded-lg">
        <div className="flex items-start gap-4">
          <Leaf className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-medium mb-2">Sustainability Benefits</h3>
            <p className="text-gray-700">
              Repairing your existing secondary glazing rather than replacing it entirely reduces waste and preserves the embodied carbon 
              in your current installation. Our repair service extends the life of your secondary glazing by 10-15 years, 
              making it a sustainable and cost-effective choice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpiralBalanceSection;
