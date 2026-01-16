// src/components/sections/LatestNews.jsx
export default function LatestNews() {
  const news = [
    {
      title: "Apple M4 Chip Launched",
      date: "Jan 15, 2026",
      desc: "New M4 chip brings 30% better performance...",
    },
    {
      title: "Samsung Galaxy S25 Rumors",
      date: "Jan 10, 2026",
      desc: "Under-display camera and bigger battery...",
    },
    {
      title: "DJI Neo Drone Review",
      date: "Jan 5, 2026",
      desc: "Ultra-light drone under 250g weight...",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Latest Tech News
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {news.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <div className="p-8">
                <span className="text-sm text-gray-500">{item.date}</span>
                <h3 className="text-2xl font-bold mt-3 mb-4 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}