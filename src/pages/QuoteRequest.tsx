import { MainNav } from "@/components/MainNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const QuoteRequest = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [windowType, setWindowType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with window type:", windowType);
    toast({
      title: "Quote Request Received",
      description: "We'll get back to you within 24 hours.",
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Request a Free Quote</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Window Type</label>
              <Select onValueChange={setWindowType} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select window type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sash">Sash Windows</SelectItem>
                  <SelectItem value="casement">Casement Windows</SelectItem>
                  <SelectItem value="bay">Bay Windows</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Number of Windows</label>
              <Input type="number" min="1" required />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Window Dimensions (if known)</label>
              <Input placeholder="e.g., 1200mm x 1500mm" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">First Name</label>
                <Input required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name</label>
                <Input required />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input type="email" required />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <Input type="tel" required />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Property Address</label>
              <Input required />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Additional Requirements</label>
              <Textarea placeholder="Tell us more about your requirements..." />
            </div>

            <Button type="submit" className="w-full">Submit Quote Request</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteRequest;