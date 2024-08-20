import Header from './components/Header';
import Footer from './components/Footer';
import Image from 'next/image';
import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-offWhite">
      <Header />
      
      <section className="relative flex flex-col items-center justify-center text-center bg-cover bg-center h-screen">
        <Image 
          src="/assets/images/bbqbig.jpg" 
          alt="Deli Hero" 
          layout="fill" 
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>
        <div className="relative z-10 text-white p-6">
          <h1 className="text-5xl font-extrabold mb-4">Welcome to Larry's Deli Que!</h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Serving the best BBQ in town. Come for the food, stay for the atmosphere!</p>
          <a href="/menu" className="bg-crimson text-white py-3 px-6 rounded-lg shadow-lg hover:bg-darkCrimson transition-colors">See Our Menu</a>
        </div>
      </section>

      {/* New Video Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-16 px-8 bg-darkGray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-6 text-white">Watch Our Story</h2>
          <div className="flex flex-col gap-8 md:flex-row md:gap-8">
            <video controls className="w-full h-auto md:w-1/2">
              <source src="/assets/videos/larryvid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <video controls className="w-full h-auto md:w-1/2">
              <source src="/assets/videos/larrybbq.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-lightGray">
        <h2 className="text-4xl font-extrabold text-center mb-6 text-darkGray">Our Delicious Dishes</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative border rounded-lg overflow-hidden border-darkGray shadow-lg hover:shadow-xl transition-shadow">
            <Image 
              src="/assets/images/wings.jpg" 
              alt="Ribs" 
              width={500} 
              height={300} 
              className="object-cover w-full h-full" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h3 className="text-2xl font-semibold">Wings</h3>
              <p className="text-lg mt-2">Succulent and smoky wings, slow-cooked to perfection.</p>
            </div>
          </div>
          <div className="relative border rounded-lg overflow-hidden border-darkGray shadow-lg hover:shadow-xl transition-shadow">
            <Image 
              src="/assets/images/sandwhich.jpg" 
              alt="Brisket" 
              width={500} 
              height={300} 
              className="object-cover w-full h-full" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h3 className="text-2xl font-semibold">Sandwhich</h3>
              <p className="text-lg mt-2">Customize your sandwhich however you like!</p>
            </div>
          </div>
          <div className="relative border rounded-lg overflow-hidden border-darkGray shadow-lg hover:shadow-xl transition-shadow">
            <Image 
              src="/assets/images/bbq.jpg" 
              alt="Pulled Pork" 
              width={500} 
              height={300} 
              className="object-cover w-full h-full" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h3 className="text-2xl font-semibold">Pulled Pork</h3>
              <p className="text-lg mt-2">Shredded pork with our house-made BBQ sauce.</p>
            </div>
          </div>
          <div className="relative border rounded-lg overflow-hidden border-darkGray shadow-lg hover:shadow-xl transition-shadow">
            <Image 
              src="/assets/images/rueben.jpg" 
              alt="Salad" 
              width={500} 
              height={300} 
              className="object-cover w-full h-full" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h3 className="text-2xl font-semibold">Rueben</h3>
              <p className="text-lg mt-2">Our famous and mouth watering Rueben with a side of fries.</p>
            </div>
          </div>
          <div className="relative border rounded-lg overflow-hidden border-darkGray shadow-lg hover:shadow-xl transition-shadow">
            <Image 
              src="/assets/images/localbeer.jpg" 
              alt="Baked Beans" 
              width={500} 
              height={300} 
              className="object-cover w-full h-full" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h3 className="text-2xl font-semibold">Local beer</h3>
              <p className="text-lg mt-2">Beer from your favorite local breweries.</p>
            </div>
          </div>
          <div className="relative border rounded-lg overflow-hidden border-darkGray shadow-lg hover:shadow-xl transition-shadow">
            <Image 
              src="/assets/images/brgr.jpg" 
              alt="Cornbread" 
              width={500} 
              height={300} 
              className="object-cover w-full h-full" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h3 className="text-2xl font-semibold">Double Barrel</h3>
              <p className="text-lg mt-2">Juicy beef patty topped with melted cheese, crisp lettuce, ripe tomatoes, and a tangy special sauce.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
