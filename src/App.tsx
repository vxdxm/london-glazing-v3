import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ResidentialSolutions from "./pages/ResidentialSolutions";
import CommercialSolutions from "./pages/CommercialSolutions";
import SpecializedServices from "./pages/SpecializedServices";
import OfficeBuildings from "./pages/commercial/OfficeBuildings";
import RetailSpaces from "./pages/commercial/RetailSpaces";
import ListedBuildings from "./pages/commercial/ListedBuildings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/residential" element={<ResidentialSolutions />} />
          <Route path="/commercial" element={<CommercialSolutions />} />
          <Route path="/specialized" element={<SpecializedServices />} />
          <Route path="/commercial/office-buildings" element={<OfficeBuildings />} />
          <Route path="/commercial/retail-spaces" element={<RetailSpaces />} />
          <Route path="/commercial/listed-buildings" element={<ListedBuildings />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;