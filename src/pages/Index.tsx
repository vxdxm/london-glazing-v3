import React from 'react';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Welcome to our homepage" />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Welcome
          </h1>
          <p className="text-xl text-muted-foreground">
            Your application is ready
          </p>
        </div>
      </div>
    </>
  );
};

export default Index;