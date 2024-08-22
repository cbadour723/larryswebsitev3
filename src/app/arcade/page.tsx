import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import React from 'react';

const Menu: React.FC = () => {
  return (
    <div className="min-h-screen bg-offWhite flex flex-col">
      <Header />
      <main className="flex-grow p-8 md:p-16">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-6 text-darkGray">Our Menu</h1>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-center mb-4 text-darkGray">Menu Front</h2>
            <div className="flex justify-center">
              <Image 
                src="/assets/images/menu front.jpg" 
                alt="Menu Front" 
                width={800} 
                height={600} 
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-center mb-4 text-darkGray">Menu Back</h2>
            <div className="flex justify-center">
              <Image 
                src="/assets/images/menu back.jpg" 
                alt="Menu Back" 
                width={800} 
                height={600} 
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-center mb-4 text-darkGray">Bar Menu</h2>
            <div className="flex justify-center">
              <Image 
                src="/assets/images/bar menu.jpg" 
                alt="Bar Menu" 
                width={800} 
                height={600} 
                className="rounded-lg"
              />
            </div>
          </div>

          {/* New Menu Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-center mb-4 text-darkGray">Handcrafted Cocktails</h2>
            <div className="flex justify-center">
              <Image 
                src="/assets/images/barspecial.jpg" 
                alt="Dessert Menu" 
                width={800} 
                height={600} 
                className="rounded-lg"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
