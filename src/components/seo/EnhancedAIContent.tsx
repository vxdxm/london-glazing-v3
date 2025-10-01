import React from 'react';

interface EnhancedAIContentProps {
  children: React.ReactNode;
  sectionType: 'overview' | 'benefits' | 'process' | 'pricing' | 'faq';
  heading: string;
  priority?: 'high' | 'medium' | 'low';
}

/**
 * Wrapper component for content sections with AI-optimized semantic markup
 * This helps Google AI understand content structure and context
 */
export const EnhancedAIContent: React.FC<EnhancedAIContentProps> = ({
  children,
  sectionType,
  heading,
  priority = 'medium'
}) => {
  const articleProps = {
    itemScope: true,
    itemType: 'https://schema.org/Article'
  };

  const sectionProps = {
    'data-speakable': priority === 'high',
    'data-ai-priority': priority,
    className: `${sectionType}-section`
  };

  return (
    <article {...articleProps}>
      <section {...sectionProps}>
        {sectionType === 'overview' ? (
          <h1 itemProp="headline" className="text-4xl font-bold mb-6">
            {heading}
          </h1>
        ) : (
          <h2 itemProp="alternativeHeadline" className="text-3xl font-bold mb-4">
            {heading}
          </h2>
        )}
        <div itemProp="articleBody" className="prose max-w-none">
          {children}
        </div>
      </section>
    </article>
  );
};

/**
 * Key fact component optimized for featured snippets
 */
export const KeyFact: React.FC<{
  fact: string;
  icon?: React.ReactNode;
}> = ({ fact, icon }) => (
  <div 
    className="key-fact p-4 bg-secondary/10 rounded-lg my-4"
    itemScope
    itemType="https://schema.org/DefinedTerm"
    data-speakable="true"
  >
    {icon && <span className="inline-block mr-2">{icon}</span>}
    <span itemProp="description" className="font-medium text-lg">
      {fact}
    </span>
  </div>
);

/**
 * FAQ item with enhanced markup for AI understanding
 */
export const AIOptimizedFAQItem: React.FC<{
  question: string;
  answer: string;
  id?: string;
}> = ({ question, answer, id }) => (
  <div 
    className="faq-item my-6"
    itemScope
    itemType="https://schema.org/Question"
    id={id}
    data-speakable="true"
  >
    <h3 
      className="faq-question text-xl font-semibold mb-3"
      itemProp="name"
    >
      {question}
    </h3>
    <div 
      className="faq-answer prose"
      itemScope
      itemType="https://schema.org/Answer"
      itemProp="acceptedAnswer"
    >
      <div itemProp="text" dangerouslySetInnerHTML={{ __html: answer }} />
    </div>
  </div>
);

/**
 * Step component for HowTo guides optimized for AI
 */
export const AIOptimizedStep: React.FC<{
  stepNumber: number;
  title: string;
  description: string;
  tip?: string;
  image?: string;
}> = ({ stepNumber, title, description, tip, image }) => (
  <div 
    className="howto-step my-8"
    itemScope
    itemType="https://schema.org/HowToStep"
    id={`step-${stepNumber}`}
  >
    <meta itemProp="position" content={stepNumber.toString()} />
    <h3 className="text-2xl font-bold mb-3" itemProp="name">
      Step {stepNumber}: {title}
    </h3>
    <p className="text-lg mb-4" itemProp="text">
      {description}
    </p>
    {image && (
      <img 
        src={image} 
        alt={title}
        className="rounded-lg my-4 max-w-2xl"
        itemProp="image"
      />
    )}
    {tip && (
      <div 
        className="bg-primary/10 p-4 rounded-lg mt-4"
        itemScope
        itemType="https://schema.org/HowToTip"
      >
        <strong>💡 Pro Tip: </strong>
        <span itemProp="text">{tip}</span>
      </div>
    )}
  </div>
);

/**
 * Entity mention component for improved entity recognition
 */
export const EntityMention: React.FC<{
  entity: string;
  type?: 'Product' | 'Service' | 'Place' | 'Organization';
  children: React.ReactNode;
}> = ({ entity, type = 'Product', children }) => (
  <span 
    itemScope
    itemType={`https://schema.org/${type}`}
    itemProp="mentions"
  >
    <meta itemProp="name" content={entity} />
    {children}
  </span>
);
