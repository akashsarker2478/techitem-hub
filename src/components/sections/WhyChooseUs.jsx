// src/components/sections/WhyChooseUs.jsx
export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Why Choose TechItem Hub?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="text-center p-8 bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition">
            <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Fast Delivery</h3>
            <p className="text-gray-600 text-lg">
              Get your favorite gadgets delivered within 1-3 business days across Bangladesh.
            </p>
          </div>

          <div className="text-center p-8 bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition">
            <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">7 Days Replacement</h3>
            <p className="text-gray-600 text-lg">
              Not satisfied? Return or replace within 7 days – no questions asked.
            </p>
          </div>

          <div className="text-center p-8 bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition">
            <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">24/7 Support</h3>
            <p className="text-gray-600 text-lg">
              Our team is always ready to help you via chat, call or email.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}