// src/components/sections/Brands.jsx
export default function Brands() {
  const brands = [
    "Apple", "Samsung", "Sony", "DJI", "Canon", "Logitech", "Dell", "Xiaomi"
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Trusted Brands
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8">
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <span className="text-2xl font-bold text-gray-700">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}