import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import HeroSection from "@/components/sections/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
   <div className="min-h-screen flex flex-col">
      <Navbar />

    <HeroSection></HeroSection>
    <FeaturedProducts></FeaturedProducts>

      <Footer />
    </div>
  );
}
