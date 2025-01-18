"use client";
import FeaturesSection from "@/components/BoxSizing/FeaturesSection";
import Image from "next/image";
import { featuresData } from "@/data";
import { keyfeaturesData } from "@/data";
export default function Home() {

  return (
    <>
      <div className="w-full min-h-screen relative py-24 overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="https://cdn.pixabay.com/video/2020/08/03/46285-446732353_large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen text-center">
          <div className="container mx-auto px-8 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 ">
              Welcome to Our Platform
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Empowering your journey with cutting-edge solutions.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
              Get Started
            </button>
          </div>
        </div>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-5"></div>
      </div>

      {/* Features Section Start */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <FeaturesSection
            sectionTitle={featuresData.sectionTitle}
            sectionDescription={featuresData.sectionDescription}
            features={featuresData.features}
          />
        </div>

        <div className="py-20 bg-gradient-to-b from-white to-black text-transparent mt-20 ">
          <div className="container mx-auto px-4">
            <FeaturesSection
              sectionTitle={keyfeaturesData.sectionTitle}
              sectionDescription={keyfeaturesData.sectionDescription}
              features={keyfeaturesData.features}
            />
          </div>
        </div>
      </section>
      {/* Features Section End */}
    </>
  );
}
