import React from 'react';
import Header from '../components/Header'; // Adjust the import path if necessary
import Footer from '../components/Footer'; // Adjust the import path if necessary
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-skyBlue text-white">
      {/* Header */}
      <Header />

      {/* About Us Section */}
      <main className="py-16 px-4 md:px-8">
        {/* Introduction Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <div className="bg-sandyBeige text-gray-800 p-8 rounded-lg shadow-lg mx-auto max-w-4xl">
            <p className="text-lg md:text-xl">
              Welcome to Pirates Turf Putt Putt! We take pride in delivering a fun-filled experience for the whole family. Nestled in the heart of Topsail Beach, NC, our unique blend of entertainment options ensures a memorable visit for everyone who walks through our doors.
            </p>
          </div>
        </section>

        {/* Ice Cream Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Indulge in Our Delicious Ice Cream</h2>
          <div className="bg-sandyBeige text-gray-800 p-8 rounded-lg shadow-lg mx-auto max-w-3xl">
            <p className="text-lg md:text-xl text-center mb-8">
              Our ice cream is more than just a treat&mdash;it&rsquo;s a taste adventure! Crafted from the finest ingredients, our ice cream features rich flavors and creamy textures that delight all ages. Whether you&rsquo;re craving a classic vanilla cone or an adventurous flavor combination, our ice cream parlor is sure to satisfy your sweet tooth. Explore our wide variety of flavors and toppings to create your perfect scoop.
            </p>
            <div className="text-center">
              <Image 
                src="/assets/images/ice-cream.jpg" 
                alt="Delicious Ice Cream" 
                width={800} 
                height={533} 
                className="rounded-lg mb-4 mx-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Arcade Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Enjoy Exciting Arcade Games</h2>
          <div className="bg-sandyBeige text-gray-800 p-8 rounded-lg shadow-lg mx-auto max-w-3xl">
            <p className="text-lg md:text-xl text-center mb-8">
              Step into our arcade and immerse yourself in a world of fun and games! With a diverse selection of classic and modern arcade games, there&rsquo;s something for everyone to enjoy. Compete for high scores, challenge your friends, or simply enjoy the nostalgic thrill of our game collection. Our arcade provides the perfect blend of excitement and entertainment, making it a great destination for a fun day out.
            </p>
            <div className="text-center">
              <Image 
                src="/assets/images/arcade.jpg" 
                alt="Arcade Games" 
                width={800} 
                height={533} 
                className="rounded-lg mb-4 mx-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Putt-Putt Course Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Conquer the Putt-Putt Course</h2>
          <div className="bg-sandyBeige text-gray-800 p-8 rounded-lg shadow-lg mx-auto max-w-3xl">
            <p className="text-lg md:text-xl text-center mb-8">
              Our putt-putt course offers a mini-golf experience like no other. Designed with creativity and challenge in mind, our course features intricate obstacles and engaging themes that captivate both young and old. Whether you&rsquo;re a seasoned golfer or new to the game, our putt-putt course promises hours of enjoyment. Gather your family and friends and see who can navigate the course with the lowest score!
            </p>
            <div className="text-center">
              <Image 
                src="/assets/images/piratescourse2.jpg" 
                alt="Putt-Putt Course" 
                width={800} 
                height={533} 
                className="rounded-lg mb-4 mx-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Meet Kathy Blackburn Section */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Kathy Blackburn &ndash; Our New Owner</h2>
          <div className="bg-sandyBeige text-gray-800 p-8 rounded-lg shadow-lg mx-auto max-w-3xl">
            <p className="text-lg md:text-xl mb-8">
              We are thrilled to introduce Kathy Blackburn as the new owner of Pirates Turf Putt Putt. With a passion for community and a love for creating memorable experiences, Kathy brings a fresh perspective and enthusiasm to our venue. Her dedication to quality and customer satisfaction is evident in every aspect of our operation. Under Kathy&rsquo;s leadership, we are committed to enhancing our offerings and ensuring that every visit is exceptional.
            </p>
            <div className="text-center">
              <Image 
                src="/assets/images/piratesfamily.jpg" 
                alt="Kathy Blackburn" 
                width={800} 
                height={533} 
                className="rounded-lg mb-4 mx-auto object-cover"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
