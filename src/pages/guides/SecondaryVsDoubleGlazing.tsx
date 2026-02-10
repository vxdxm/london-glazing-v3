import React from 'react';
import { MainNav } from '@/components/MainNav';
import { Footer } from '@/components/Footer';
import { BreadcrumbNav } from '@/components/ui/breadcrumb-nav';
import { Helmet } from 'react-helmet-async';
import { ComparisonHero } from '@/components/guides/secondary-vs-double/ComparisonHero';
import { WhatIsSecondaryGlazing } from '@/components/guides/secondary-vs-double/WhatIsSecondaryGlazing';
import { WhatIsDoubleGlazing } from '@/components/guides/secondary-vs-double/WhatIsDoubleGlazing';
import { PlanningPermissionComparison } from '@/components/guides/secondary-vs-double/PlanningPermissionComparison';
import { PerformanceComparison } from '@/components/guides/secondary-vs-double/PerformanceComparison';
import { PreservationBenefits } from '@/components/guides/secondary-vs-double/PreservationBenefits';
import { CostComparison } from '@/components/guides/secondary-vs-double/CostComparison';
import { AestheticConsiderations } from '@/components/guides/secondary-vs-double/AestheticConsiderations';
import { WhenDoubleGlazingAcceptable } from '@/components/guides/secondary-vs-double/WhenDoubleGlazingAcceptable';
import { RealWorldCaseStudies } from '@/components/guides/secondary-vs-double/RealWorldCaseStudies';
import { DecisionFramework } from '@/components/guides/secondary-vs-double/DecisionFramework';
import { ComparisonCTA } from '@/components/guides/secondary-vs-double/ComparisonCTA';

export default function SecondaryVsDoubleGlazing() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do I need planning permission for secondary glazing on a listed building?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Secondary glazing typically doesn't require planning permission, even on listed buildings, because it's installed internally and doesn't alter the external appearance. Conservation officers frequently recommend it as the ideal solution for heritage properties."
        }
      },
      {
        "@type": "Question",
        "name": "Which is better for noise reduction: secondary glazing or double glazing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Secondary glazing actually outperforms double glazing for noise reduction, cutting external noise by up to 80% compared to double glazing's 50% reduction. This superior acoustic performance comes from the larger air gap typically created with secondary glazing systems."
        }
      },
      {
        "@type": "Question",
        "name": "How much cheaper is secondary glazing than double glazing for listed buildings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Secondary glazing typically costs about half the price of quality double glazing. For listed buildings, cost savings can reach 80% compared to conservation-grade double glazing when you factor in planning application fees, heritage consultants, and specialist glazing requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Can secondary glazing be removed without damaging original windows?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, secondary glazing is completely reversible. It can be removed at any time without leaving a trace, returning your windows to their original state. This reversibility is crucial for listed buildings where alterations must be reversible."
        }
      },
      {
        "@type": "Question",
        "name": "What thermal performance does secondary glazing achieve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Secondary glazing restricts heat loss by 65-70%, compared to double glazing's approximately 90%. However, secondary glazing still delivers substantial improvements, reducing heating costs by up to 15% annually. The performance gap narrows with high-quality systems using low-emissivity glass."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://secondarydoubleglazing.co.uk/" },
      { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://secondarydoubleglazing.co.uk/guides" },
      { "@type": "ListItem", "position": 3, "name": "Secondary Glazing vs Double Glazing", "item": "https://secondarydoubleglazing.co.uk/guides/secondary-vs-double-glazing" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Secondary Glazing vs Double Glazing for Listed Buildings | Complete Guide</title>
        <meta name="description" content="Compare secondary glazing vs double glazing for listed buildings. Learn why secondary glazing offers superior noise reduction, no planning permission, and 80% cost savings." />
        <meta name="keywords" content="secondary glazing vs double glazing, listed building windows, conservation area glazing, heritage windows, noise reduction glazing" />
        <link rel="canonical" href="https://secondarydoubleglazing.co.uk/guides/secondary-vs-double-glazing" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-accent/5">
        <MainNav />
        <BreadcrumbNav />
        
        <ComparisonHero />
        <WhatIsSecondaryGlazing />
        <WhatIsDoubleGlazing />
        <PlanningPermissionComparison />
        <PerformanceComparison />
        <PreservationBenefits />
        <CostComparison />
        <AestheticConsiderations />
        <WhenDoubleGlazingAcceptable />
        <RealWorldCaseStudies />
        <DecisionFramework />
        <ComparisonCTA />

        <Footer />
      </div>
    </>
  );
}
