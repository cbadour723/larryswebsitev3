import React from 'react';
import Header from './components/Header'; // Adjust the import path if necessary
import Footer from './components/Footer'; // Adjust the import path if necessary
import Image from 'next/image';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-skyBlue text-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="h-[50vh] bg-[url('/images/pirate-bg.webp')] bg-cover bg-center flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">Welcome to Pirates Turf Putt Putt</h1>
        <p className="text-lg md:text-xl mb-6">The most adventurous mini-golf experience</p>
        <button className="px-8 py-4 bg-goldenYellow text-pirateRed rounded-lg hover:bg-sandyBeige transition duration-300 font-semibold">
          Book Now
        </button>
      </section>

      {/* Features Section with WebP Images */}
      <section id="features" className="py-16 bg-skyBlue text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Explore Our Course</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4">
          <div className="bg-chestnutBrown p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image 
              src="/assets/images/coursepic.jpg" 
              alt="Pirates Turf Putt Putt Course 1" 
              width={600} 
              height={450} 
              className="rounded-lg mb-4 object-cover"
            />
            <h3 className="text-xl md:text-2xl font-bold text-goldenYellow mb-2">Challenging Obstacles</h3>
            <p className="text-lg md:text-xl text-sandyBeige">Test your skills with our creative and fun obstacles.</p>
          </div>
          <div className="bg-chestnutBrown p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image 
              src="/assets/images/hole9.jpg" 
              alt="Pirates Turf Putt Putt Course 2" 
              width={600} 
              height={450} 
              className="rounded-lg mb-4 object-cover"
            />
            <h3 className="text-xl md:text-2xl font-bold text-goldenYellow mb-2">Themed Environments</h3>
            <p className="text-lg md:text-xl text-sandyBeige">Immerse yourself in a pirate-themed adventure as you play.</p>
          </div>
          <div className="bg-chestnutBrown p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image 
              src="/assets/images/piratesturfpic.jpg" 
              alt="Pirates Turf Putt Putt Course 3" 
              width={600} 
              height={450} 
              className="rounded-lg mb-4 object-cover"
            />
            <h3 className="text-xl md:text-2xl font-bold text-goldenYellow mb-2">Perfect for All Ages</h3>
            <p className="text-lg md:text-xl text-sandyBeige">Bring the whole family for a day of fun on our course.</p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="py-16 bg-skyBlue text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">See the Fun in Action</h2>
        <div className="relative w-full max-w-4xl mx-auto">
          <video
            className="w-full rounded-lg shadow-lg"
            controls
            autoPlay
            muted
            loop
          >
            <source src="/assets/videos/piratesfun.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
