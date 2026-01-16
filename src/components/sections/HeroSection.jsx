import React from 'react';

const HeroSection = () => {
    return (
        <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image + Dark Overlay */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-banner-image.jpg')", 
            filter: "brightness(0.5) contrast(1.1)",
          }}
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Text + Buttons  */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl">
          TechItem <span className="text-blue-400">Hub</span>
        </h1>

        <p className="text-xl md:text-3xl text-gray-200 mb-12 font-light max-w-3xl mx-auto">
          Latest Smartphones • Laptops • Cameras • Drones • Accessories – Everything You Need!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="/items"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-full text-xl transition transform hover:scale-105 shadow-xl"
          >
            Shop Now →
          </a>

          <a
            href="/login"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-4 px-12 rounded-full text-xl transition"
          >
            Login & Save
          </a>
        </div>
      </div>
    </section>
    );
};

export default HeroSection;