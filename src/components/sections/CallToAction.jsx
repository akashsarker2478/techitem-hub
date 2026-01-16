import Link from 'next/link';
import React from 'react';

const CallToAction = () => {
    return (
        <section className="py-20 md:py-32 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Ready to Upgrade Your Tech?
        </h2>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90">
          Shop now and get the best deals on premium gadgets!
        </p>
        <Link
          href="/items"
          className="inline-block bg-white text-blue-700 font-bold text-xl px-12 py-6 rounded-full hover:bg-gray-100 transition transform hover:scale-105 shadow-2xl"
        >
          Shop Now →
        </Link>
      </div>
    </section>
    );
};

export default CallToAction;