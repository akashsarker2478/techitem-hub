// src/components/sections/Testimonials.jsx
export default function Testimonials() {
  const reviews = [
    {
      name: "Rahim Khan",
      role: "Tech Enthusiast",
      text: "Best shopping experience ever! Fast delivery and genuine products.",
      rating: 5,
    },
    {
      name: "Sabrina Akter",
      role: "Freelancer",
      text: "MacBook Pro M3 received in perfect condition. Highly recommended!",
      rating: 5,
    },
    {
      name: "Asif Mahmud",
      role: "Photographer",
      text: "Sony Alpha A7 IV is a beast! Camera quality is mind-blowing.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <div className="flex mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6 italic">"{review.text}"</p>
              <div>
                <h4 className="font-bold text-gray-900">{review.name}</h4>
                <p className="text-gray-500 text-sm">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}