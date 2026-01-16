import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Brands from "@/components/sections/Brands";
import CallToAction from "@/components/sections/CallToAction";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import HeroSection from "@/components/sections/HeroSection";
import LatestNews from "@/components/sections/LatestNews";
import Testimonials from "@/components/sections/Testimonials";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
   <div className="min-h-screen flex flex-col">
      <Navbar />

    <HeroSection></HeroSection>
    <FeaturedProducts></FeaturedProducts>
    <WhyChooseUs />
        <Testimonials />
        <LatestNews />
        <Brands />
        <CallToAction />

      <Footer />
    </div>
  );
}
