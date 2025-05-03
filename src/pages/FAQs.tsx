import { MainNav } from "@/components/MainNav";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FAQSEO from "@/components/faqs/FAQSEO";

const FAQs = () => {
  const faqs = [
    {
      question: "What is secondary glazing?",
      answer: "Secondary glazing involves installing a supplementary internal window behind your existing windows. This creates an insulating layer of air that improves thermal efficiency, reduces noise, and enhances security without altering the external appearance of your property."
    },
    {
      question: "How effective is secondary glazing at reducing noise?",
      answer: "Secondary glazing is highly effective at reducing noise, capable of reducing external noise by up to 80% when properly installed. The air gap between the primary and secondary glazing acts as an excellent sound barrier."
    },
    {
      question: "Will secondary glazing affect the appearance of my property?",
      answer: "Secondary glazing is installed on the room side of your existing windows, so it doesn't affect the external appearance of your property. This makes it particularly suitable for listed buildings and conservation areas."
    },
    {
      question: "How much can I save on heating costs?",
      answer: "Secondary glazing can significantly reduce heat loss through windows, potentially saving up to 20% on heating bills. The exact savings depend on your current window efficiency and heating usage patterns."
    },
    {
      question: "Is secondary glazing difficult to maintain?",
      answer: "No, secondary glazing is relatively easy to maintain. The panels can be easily cleaned and many systems feature removable panels for convenient access. Regular cleaning and occasional checks of seals and fixings are typically all that's required."
    },
    {
      question: "Can I open my windows with secondary glazing installed?",
      answer: "Yes, secondary glazing systems are designed to allow access to your original windows. Many styles are available, including sliding, hinged, and lift-out options that can be easily operated when you need to open your windows."
    },
    {
      question: "Is planning permission required for secondary glazing?",
      answer: "Generally, planning permission is not required for secondary glazing as it's considered an internal alteration. However, if you live in a listed building, you should check with your local authority before proceeding."
    },
    {
      question: "How long does installation take?",
      answer: "Installation time varies depending on the number and size of windows, but typically a professional team can install secondary glazing in an average home within 1-2 days with minimal disruption."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <FAQSEO />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
