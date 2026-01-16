// src/app/items/[id]/page.jsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

async function getProduct(id) {
  const res = await fetch("http://localhost:3000/data/products.json", { cache: "no-store" });
  const products = await res.json();

  return products.find((p) => String(p.id) === String(id));
}

const ProductDetails = async ({ params }) => {
  const { id } = await params;

  const product = await getProduct(id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
            <p className="text-2xl text-gray-700">Product Not Found</p>
            <a href="/items" className="mt-6 inline-block text-blue-600 hover:text-blue-800 font-medium text-lg">
              ← Back to Products
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left: Full Height Image Section */}
            <div className="relative bg-gradient-to-br from-gray-50 to-blue-50/30">
              <div className="aspect-square md:aspect-auto h-[500px] md:h-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            {/* Right: Details Section */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="max-w-2xl">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                  {product.category || "Tech Item"}
                </span>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {product.name}
                </h1>

                <p className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-8">
                  ৳{product.price.toLocaleString()}
                </p>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12">
                  {product.description}
                </p>

                {/* Simple Specs (optional, তোর json-এ থাকলে যোগ করতে পারিস) */}
                <div className="grid grid-cols-2 gap-6 mb-12 text-gray-700">
                  <div>
                    <span className="font-semibold block text-gray-900">Category</span>
                    {product.category || "N/A"}
                  </div>
                  <div>
                    <span className="font-semibold block text-gray-900">Availability</span>
                    <span className="text-green-600 font-medium">In Stock</span>
                  </div>
                </div>

                {/* Back Button */}
                <a
                  href="/items"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-lg transition"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to All Products
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetails;