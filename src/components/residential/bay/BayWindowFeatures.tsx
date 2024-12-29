import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BayWindowFeatures = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6">Technical Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Frame System</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-4 space-y-2">
              <li>Slim aluminum profiles</li>
              <li>Custom angle adaptors</li>
              <li>Color-matched finishes</li>
              <li>Discrete framework</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Operation</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-4 space-y-2">
              <li>Smooth sliding mechanism</li>
              <li>Easy-clean access</li>
              <li>Multiple opening options</li>
              <li>Secure locking system</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Installation</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-4 space-y-2">
              <li>Professional fitting</li>
              <li>Minimal disruption</li>
              <li>Custom measurements</li>
              <li>Quality assurance</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BayWindowFeatures;