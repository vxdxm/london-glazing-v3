
import React from 'react';
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Leaf, Earth, Thermometer } from "lucide-react";

const HomeSustainability = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Sustainability Impact</h2>
        <div className="max-w-4xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5">
                <div className="h-full">
                  <img
                    src="/lovable-uploads/56e6bf65-3f25-4fcd-b697-e286aa479776.jpg"
                    alt="Secondary glazing environmental impact visualization"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-3/5 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                  <h3 className="text-2xl font-semibold">Environmental Benefits</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Discover how secondary glazing contributes to a greener planet. Track your 
                  environmental impact with our calculator - see reduced carbon emissions, 
                  energy savings, and equivalent trees planted.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Earth className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-700">Reduce CO₂ emissions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Thermometer className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-700">Lower energy consumption</span>
                  </div>
                </div>
                <Link 
                  to="/sustainability-impact-tracker-secondary-glazing" 
                  className="inline-flex items-center text-primary hover:underline"
                >
                  Explore Sustainability Impact Tracker 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HomeSustainability;
