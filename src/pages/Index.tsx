import React from 'react';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <main className="flex flex-col items-stretch rounded-[0px_0px_0px_0px] min-h-screen">
      <Hero />
      <Footer />
    </main>
  );
};

export default Index;
