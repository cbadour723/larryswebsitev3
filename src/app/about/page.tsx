import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-offWhite flex flex-col">
      <Header />
      <main className="flex-grow p-8 md:p-16">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-darkGray mb-8">About Us</h1>
          <div className="bg-white shadow-xl rounded-lg p-8 mb-8">
            <p className="text-lg mb-4 text-darkGray leading-relaxed">
              Welcome to Larry's Deli Que! We pride ourselves on offering the best deli sandwiches in town. Our mission is to provide high-quality food and excellent service to every customer.
            </p>
            <p className="text-lg text-darkGray mb-8 leading-relaxed">
              Founded in December 2023, Larry's Deli Que has been a staple in the community. Our team is dedicated to using fresh ingredients and delivering a memorable dining experience.
            </p>
            <div className="flex flex-col md:flex-row gap-8">
              <Link href="/">
                <Image 
                  src="/assets/images/TopsailBeachLarrysDeliQue.jpg" 
                  alt="Front of Larry's Deli Que" 
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </Link>
              <Link href="/">
                <Image 
                  src="/assets/images/larry.jpg" 
                  alt="Owner of Larry's Deli Que" 
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </Link>
            </div>
            <div className="mt-8">
              <Link href="/">
                <Image 
                  src="/assets/images/larryholly.jpg" 
                  alt="Larry and Holly Hollifield" 
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </Link>
            </div>
            <div className="mt-8">
              <Link href="/">
                <Image 
                  src="/assets/images/larryfamily.jpg" 
                  alt="Larry and Holly Hollifield" 
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </Link>
            </div>
          </div>
          {/* New Card Section */}
          <div className="bg-white shadow-xl rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-darkGray mb-4">Featured in Topsail Magazine</h2>
            <p className="text-lg text-darkGray mb-4">
              We are excited to be featured in Topsail Magazine! Learn more about Larry's Deli-Que and our story by checking out the article.
            </p>
            <Link 
              href="https://www.topsailmag.com/right-on-cue/"
              className="block bg-[#D92332] text-white text-center py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300"
            >
              Read the Article
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
