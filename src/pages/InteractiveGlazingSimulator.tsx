
import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { MainNav } from "@/components/MainNav";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/use-toast";
import {
  Upload,
  Camera,
  Volume2,
  Thermometer,
  Shield,
  SunDim,
  Info,
  Save,
  RefreshCcw,
} from "lucide-react";
import { Link } from "react-router-dom";

const InteractiveGlazingSimulator = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSimulationReady, setIsSimulationReady] = useState(false);
  const [activeTab, setActiveTab] = useState("thermal");
  
  // Sliders state
  const [noiseReduction, setNoiseReduction] = useState([30]);
  const [thermalInsulation, setThermalInsulation] = useState([40]);
  const [uvProtection, setUvProtection] = useState([60]);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    if (!file.type.match('image.*')) {
      toast({
        variant: "destructive",
        title: "Invalid file type",
        description: "Please upload an image file (JPG, PNG, etc.)"
      });
      return;
    }
    
    const reader = new FileReader();
    reader.onload = (loadEvent) => {
      setUploadedImage(loadEvent.target?.result as string);
      setIsProcessing(true);
      
      // Simulate processing time
      setTimeout(() => {
        applyInitialSimulation(loadEvent.target?.result as string);
        setIsProcessing(false);
        setIsSimulationReady(true);
      }, 1500);
    };
    reader.readAsDataURL(file);
  };
  
  // Handle drag and drop
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (!file) return;
    
    if (!file.type.match('image.*')) {
      toast({
        variant: "destructive",
        title: "Invalid file type",
        description: "Please upload an image file (JPG, PNG, etc.)"
      });
      return;
    }
    
    const reader = new FileReader();
    reader.onload = (loadEvent) => {
      setUploadedImage(loadEvent.target?.result as string);
      setIsProcessing(true);
      
      // Simulate processing time
      setTimeout(() => {
        applyInitialSimulation(loadEvent.target?.result as string);
        setIsProcessing(false);
        setIsSimulationReady(true);
      }, 1500);
    };
    reader.readAsDataURL(file);
  };
  
  const applyInitialSimulation = (imageUrl: string) => {
    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      // Set canvas dimensions to match image
      canvas.width = img.width;
      canvas.height = img.height;
      
      // Draw the original image
      ctx.drawImage(img, 0, 0);
      
      // Apply initial overlay effect
      applyGlazingEffect(ctx, canvas.width, canvas.height, 'thermal');
      
      // Save the processed image
      setProcessedImage(canvas.toDataURL('image/png'));
    };
    img.src = imageUrl;
  };
  
  const applyGlazingEffect = (
    ctx: CanvasRenderingContext2D, 
    width: number, 
    height: number, 
    effectType: string
  ) => {
    // Get image data
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;
    
    // Apply different effects based on the tab
    switch (effectType) {
      case 'thermal':
        // Thermal insulation visualization - add a subtle orange-blue gradient overlay
        const thermalValue = thermalInsulation[0] / 100;
        for (let i = 0; i < data.length; i += 4) {
          // Add a warm tint to represent thermal retention
          data[i] = Math.min(255, data[i] + (30 * thermalValue)); // Increase red
          data[i + 2] = Math.max(0, data[i + 2] - (20 * thermalValue)); // Decrease blue
        }
        break;
        
      case 'noise':
        // Noise reduction visualization - add sharpness/clarity
        const noiseValue = noiseReduction[0] / 100;
        for (let i = 0; i < data.length; i += 4) {
          // Make the image slightly clearer to represent noise reduction
          data[i] = data[i] * (1 - 0.1 * noiseValue) + 255 * 0.1 * noiseValue;
          data[i + 1] = data[i + 1] * (1 - 0.1 * noiseValue) + 255 * 0.1 * noiseValue;
          data[i + 2] = data[i + 2] * (1 - 0.1 * noiseValue) + 255 * 0.1 * noiseValue;
        }
        break;
        
      case 'uv':
        // UV protection visualization - reduce blue tint
        const uvValue = uvProtection[0] / 100;
        for (let i = 0; i < data.length; i += 4) {
          // Add a subtle yellow tint to represent UV filtering
          data[i] = Math.min(255, data[i] + (15 * uvValue)); // Increase red slightly
          data[i + 1] = Math.min(255, data[i + 1] + (15 * uvValue)); // Increase green slightly
          data[i + 2] = Math.max(0, data[i + 2] - (30 * uvValue)); // Decrease blue
        }
        break;
    }
    
    // Add a subtle reflection overlay to simulate glass
    for (let i = 0; i < data.length; i += 4) {
      data[i] = Math.min(255, data[i] + 10);
      data[i + 1] = Math.min(255, data[i + 1] + 10);
      data[i + 2] = Math.min(255, data[i + 2] + 15);
    }
    
    // Put the modified image data back
    ctx.putImageData(imageData, 0, 0);
    
    // Add a subtle glazing reflection effect
    ctx.save();
    ctx.globalAlpha = 0.15;
    ctx.globalCompositeOperation = 'lighter';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.fillRect(0, 0, width, height);
    ctx.restore();
  };
  
  // Update the simulation when sliders change
  useEffect(() => {
    if (!uploadedImage || !isSimulationReady || !canvasRef.current) return;
    
    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      // Draw the original image
      ctx.drawImage(img, 0, 0);
      
      // Apply the current effect
      applyGlazingEffect(ctx, canvas.width, canvas.height, activeTab);
      
      // Update the processed image
      setProcessedImage(canvas.toDataURL('image/png'));
    };
    img.src = uploadedImage;
  }, [noiseReduction, thermalInsulation, uvProtection, activeTab, isSimulationReady]);
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };
  
  const resetImage = () => {
    setUploadedImage(null);
    setProcessedImage(null);
    setIsSimulationReady(false);
    setNoiseReduction([30]);
    setThermalInsulation([40]);
    setUvProtection([60]);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  const handleSaveImage = () => {
    if (!processedImage) return;
    
    const link = document.createElement('a');
    link.href = processedImage;
    link.download = 'secondary-glazing-simulation.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Image Saved",
      description: "Your simulated window image has been saved."
    });
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Interactive Secondary Glazing Simulator | Virtual Window Preview</title>
        <meta name="description" content="Upload your window photo and visualize secondary glazing effects including noise reduction, thermal insulation, and UV protection with our interactive simulator." />
        <meta name="keywords" content="secondary glazing simulator, window glazing preview, noise reduction visualization, thermal insulation simulation, virtual window preview, glazing benefits visualizer" />
        <meta property="og:title" content="Interactive Secondary Glazing Simulator | Virtual Window Preview" />
        <meta property="og:description" content="Upload your window photo and see how secondary glazing would improve your home with our interactive visualization tool." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://secondaryglazingspecialist.com/interactive-glazing-simulator" />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/interactive-glazing-simulator" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Interactive Secondary Glazing Simulator",
            "description": "Upload your window photo and visualize secondary glazing effects including noise reduction, thermal insulation, and UV protection.",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "GBP"
            }
          }`}
        </script>
      </Helmet>
      
      <MainNav />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Interactive Secondary Glazing Simulator</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Upload a photo of your window and see how it would look with secondary glazing. 
            Adjust parameters to visualize noise reduction, thermal insulation, and UV protection benefits.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Upload section */}
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              {!uploadedImage ? (
                <div 
                  className={`border-2 border-dashed rounded-lg p-12 text-center ${
                    isDragging ? "border-primary bg-primary/5" : "border-gray-300"
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Upload className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Upload Your Window Photo</h3>
                    <p className="text-gray-500 max-w-md">
                      Drag and drop your image here, or click to browse files. 
                      For best results, use a clear photo of your window.
                    </p>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <Button 
                      onClick={() => fileInputRef.current?.click()}
                      className="mt-4"
                    >
                      <Camera className="mr-2 h-4 w-4" />
                      Browse Files
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Original Window</h3>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={resetImage}
                    >
                      <RefreshCcw className="mr-2 h-4 w-4" />
                      Upload New Image
                    </Button>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <img 
                      src={uploadedImage} 
                      alt="Original window" 
                      className="w-full object-contain max-h-[400px]"
                    />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
          
          {/* Simulation result */}
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                {isProcessing ? "Processing..." : "Secondary Glazing Simulation"}
              </h3>
              
              {isProcessing && (
                <div className="flex flex-col items-center justify-center h-[400px] border rounded-lg">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                  <p className="mt-4 text-gray-500">Generating simulation...</p>
                </div>
              )}
              
              {!isProcessing && !processedImage && (
                <div className="flex flex-col items-center justify-center h-[400px] border rounded-lg">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <Camera className="h-8 w-8 text-gray-400" />
                  </div>
                  <p className="mt-4 text-gray-500">Upload an image to see the simulation</p>
                </div>
              )}
              
              {!isProcessing && processedImage && (
                <div className="space-y-4">
                  <div className="border rounded-lg overflow-hidden">
                    <img 
                      src={processedImage} 
                      alt="Simulated window with secondary glazing" 
                      className="w-full object-contain max-h-[400px]"
                    />
                    <canvas ref={canvasRef} className="hidden"></canvas>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button onClick={handleSaveImage}>
                      <Save className="mr-2 h-4 w-4" />
                      Save Simulation
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        
        {uploadedImage && isSimulationReady && (
          <Card className="mb-12">
            <CardContent className="p-6">
              <Tabs defaultValue="thermal" onValueChange={handleTabChange}>
                <TabsList className="grid grid-cols-3 mb-6">
                  <TabsTrigger value="thermal">
                    <Thermometer className="mr-2 h-4 w-4" />
                    Thermal Insulation
                  </TabsTrigger>
                  <TabsTrigger value="noise">
                    <Volume2 className="mr-2 h-4 w-4" />
                    Noise Reduction
                  </TabsTrigger>
                  <TabsTrigger value="uv">
                    <SunDim className="mr-2 h-4 w-4" />
                    UV Protection
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="thermal" className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">Thermal Insulation</h3>
                      <p className="text-gray-500">
                        Adjust to see how secondary glazing improves your window's heat retention
                      </p>
                    </div>
                    <div className="flex items-center justify-center bg-gray-100 h-12 w-12 rounded-full">
                      <span className="font-bold">{thermalInsulation[0]}%</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <Label>Insulation Level</Label>
                    <Slider
                      value={thermalInsulation}
                      onValueChange={setThermalInsulation}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg flex gap-4">
                    <Info className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm">
                      Secondary glazing can reduce heat loss by up to 65% compared to single glazing,
                      saving on energy bills and creating a more comfortable living environment.
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="noise" className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">Noise Reduction</h3>
                      <p className="text-gray-500">
                        Adjust to see how secondary glazing reduces outside noise
                      </p>
                    </div>
                    <div className="flex items-center justify-center bg-gray-100 h-12 w-12 rounded-full">
                      <span className="font-bold">{noiseReduction[0]}%</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <Label>Noise Reduction Level</Label>
                    <Slider
                      value={noiseReduction}
                      onValueChange={setNoiseReduction}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg flex gap-4">
                    <Info className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm">
                      With the right glass type and air gap, secondary glazing can reduce noise by 
                      up to 80% (50dB), making it ideal for properties near busy roads, railways or in urban areas.
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="uv" className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">UV Protection</h3>
                      <p className="text-gray-500">
                        Adjust to see how secondary glazing blocks harmful UV rays
                      </p>
                    </div>
                    <div className="flex items-center justify-center bg-gray-100 h-12 w-12 rounded-full">
                      <span className="font-bold">{uvProtection[0]}%</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <Label>UV Protection Level</Label>
                    <Slider
                      value={uvProtection}
                      onValueChange={setUvProtection}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg flex gap-4">
                    <Info className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm">
                      Secondary glazing with special glass options can block up to 99% of harmful 
                      UV rays, protecting your furniture, flooring, and artwork from fading.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        )}
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Choose Secondary Glazing?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Thermometer className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Thermal Efficiency</h3>
                <p className="text-gray-600 text-center">
                  Reduce heat loss by up to 65% compared to single glazing, lower energy bills and improve comfort.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Volume2 className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Noise Reduction</h3>
                <p className="text-gray-600 text-center">
                  Reduce outside noise by up to 80% with the right glass and air gap, creating a peaceful indoor environment.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Shield className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Property Protection</h3>
                <p className="text-gray-600 text-center">
                  Block harmful UV rays, enhance security, and preserve your original windows and interior furnishings.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Windows?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Get in touch with our team for a personalized consultation and free quote for your secondary glazing project.
          </p>
          <Link to="/quote-request" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
            Request a Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InteractiveGlazingSimulator;
