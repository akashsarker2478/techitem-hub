// src/app/items/page.jsx

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import products from "../../../public/Data/Products.json";

const AllProducts = () => {
 

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero/Header Section */}
      <header className="bg-gradient-to-r from-gray-900 via-indigo-950 to-purple-950 text-white py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
            Explore All Tech Products
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Discover premium smartphones, laptops, cameras, drones, accessories
            and more
          </p>
          <div className="inline-block bg-white/10 backdrop-blur-lg px-8 py-4 rounded-full text-xl font-bold border border-white/20 shadow-xl">
            Total Products:{" "}
            <span className="text-cyan-300">{products.length}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {products.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              No Products Available
            </h2>
            <p className="text-gray-600 text-lg">
              Check back soon or explore other categories!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-gray-100 flex flex-col h-full"
              >
                <div className="relative h-56 md:h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50/30">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 line-clamp-1 group-hover:text-blue-700 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3 flex-grow text-sm md:text-base">
                    {product.description}
                  </p>

                  <div className="mt-auto">
                    <p className="text-2xl md:text-3xl font-extrabold text-blue-700 mb-5">
                      ৳{product.price.toLocaleString()}
                    </p>

                    <a
                      href={`/items/${product.id}`}
                      className="block w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold text-center py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                    >
                      View Details
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AllProducts;