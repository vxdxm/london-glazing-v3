
import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

export const CondensationExplanationCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Card>
        <CardHeader>
          <CardTitle>The Science Behind It</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Secondary glazing works by creating an insulating air gap between your existing window and the new pane. This air gap helps maintain a more consistent temperature on the inner surface of your windows, preventing the formation of condensation when warm, moist air comes into contact with cold surfaces.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Temperature Regulation</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            The additional layer of glazing helps maintain a more stable temperature on the inner surface of your windows. By reducing the temperature difference between the glass surface and room air, secondary glazing significantly decreases the likelihood of condensation forming. This is particularly effective in rooms with high humidity levels, such as kitchens and bathrooms.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Long-Term Protection</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            By controlling condensation, secondary glazing helps protect your window frames and surrounding walls from water damage, rot, and mold growth. This preventive measure can significantly extend the life of your windows and maintain the structural integrity of your property while creating a healthier living environment.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
