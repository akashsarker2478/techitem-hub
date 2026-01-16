"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 6)))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-gray-100 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-56 md:h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 line-clamp-1 group-hover:text-blue-700 transition-colors">
                  {product.name}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3 flex-grow text-sm md:text-base">
                  {product.description}
                </p>

                <div className="mt-auto">
                  <p className="text-2xl md:text-3xl font-extrabold text-blue-600 mb-5">
                    ৳{product.price.toLocaleString()}
                  </p>

                  <Link
                    href={`/items/${product.id}`}
                    className="block w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold text-center py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center gap-2"
                  >
                    See Details
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 md:mt-16">
          <Link
            href="/items"
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold px-10 py-5 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            View All Products →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;