
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Landmark, FileCheck, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const HeritageExpertise = () => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-4">Heritage Building Expertise</h2>
      <p className="text-muted-foreground mb-6">
        Many of London's most prestigious hotels occupy <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">listed buildings</Link> in{' '}
        <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline">conservation areas</Link>. Westminster hotels, 
        Kensington mansion blocks, and Bloomsbury Georgian terraces face strict planning restrictions that prevent window replacement.
      </p>
      
      <p className="text-muted-foreground mb-6">
        <Link to="/victorian-windows-secondary-glazing" className="text-primary hover:underline">Victorian hotels like those in Russell Square and South Kensington</Link> require 
        specialist solutions that preserve their period character. <Link to="/georgian-windows-secondary-glazing" className="text-primary hover:underline">Georgian townhouse hotels in Belgravia and Mayfair</Link> benefit 
        from our expertise with original sash windows – see our work in <Link to="/locations/georgian-belgravia" className="text-primary hover:underline">Georgian Belgravia</Link>.
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
              Our <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline">installations comply with conservation area requirements</Link>.
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
              Preserve historic character while delivering modern comfort. Works with{' '}
              <Link to="/sash-window-secondary-glazing" className="text-primary hover:underline">sash windows common in heritage hotels</Link>. Original windows remain untouched.
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
              We provide documentation for planning applications when required. <Link to="/blog/planning-permission-secondary-glazing-conservation-areas" className="text-primary hover:underline">Read our guide about planning permission for commercial properties</Link>.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HeritageExpertise;
