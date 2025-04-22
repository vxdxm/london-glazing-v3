
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SpiralBalanceSection = () => {
  return (
    <section className="py-12 bg-white" id="spiral-balances">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Understanding Spiral Balances</h2>
            <p className="text-gray-700 mb-6">
              Spiral balances are critical components in vertical sliding secondary glazing windows. They ensure smooth, effortless operation and maintain the window's position at any height.
            </p>
            <Button asChild>
              <Link 
                to="/learn-about-spiral-balances" 
                className="inline-flex items-center"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/learn-about-spiral-balances';
                }}
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div>
            <img 
              src="/lovable-uploads/3fab2280-476f-4095-a2cf-83d2f4485ca3.png" 
              alt="Spiral Balance Mechanism" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpiralBalanceSection;
