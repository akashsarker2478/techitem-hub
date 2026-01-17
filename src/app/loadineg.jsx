// src/app/loading.tsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          {/* সুন্দর স্পিনার */}
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Loading TechItem Hub...
          </h2>
          
          <p className="text-gray-600 text-lg">
            Fetching the latest gadgets for you
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}