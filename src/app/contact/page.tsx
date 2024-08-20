import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-offWhite flex flex-col">
      <Header />
      <main className="flex-grow p-8 md:p-16">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-darkGray mb-6">Contact Us</h1>
          <div className="bg-lightGray shadow-lg rounded-lg p-6">
            <p className="text-lg text-darkGray">
              Thank you for reaching out to us. If you have any questions or need assistance, please feel free to contact us. We will get back to you as soon as possible.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
