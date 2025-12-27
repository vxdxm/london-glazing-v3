
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Landmark, FileCheck, Shield } from "lucide-react";

const HeritageExpertise = () => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-4">Heritage Building Expertise</h2>
      <p className="text-muted-foreground mb-6">
        Many of London's most prestigious hotels occupy listed buildings in conservation areas. Westminster hotels, 
        Kensington mansion blocks, and Bloomsbury Georgian terraces face strict planning restrictions that prevent window replacement.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader className="pb-2">
            <Landmark className="h-8 w-8 text-primary mb-2" />
            <CardTitle className="text-lg">Conservation Approved</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Secondary glazing is the approved solution for listed buildings, working with conservation officers to enhance building performance.
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader className="pb-2">
            <Shield className="h-8 w-8 text-primary mb-2" />
            <CardTitle className="text-lg">Character Preserved</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Preserve historic character while delivering modern comfort. Original windows remain untouched.
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader className="pb-2">
            <FileCheck className="h-8 w-8 text-primary mb-2" />
            <CardTitle className="text-lg">Planning Support</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              We provide documentation for planning applications when required and understand listed building requirements.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HeritageExpertise;
