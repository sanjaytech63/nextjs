"use client";
import FeaturesSection from "@/components/BoxSizing/FeaturesSection";
import { featuresData } from "@/data";
import { keyfeaturesData } from "@/data";
import { HeroContant } from "@/data";
import { products } from "@/data";
import Image from "next/image";
export default function Home() {

  return (
    <>
      <div className="w-full min-h-screen relative py-24 overflow-hidden">
        {/* Background Video */}
        <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0" >
          <source src="https://cdn.pixabay.com/video/2020/08/03/46285-446732353_large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen text-center">
          <div className="container mx-auto px-8 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 ">
              {HeroContant.title}
            </h1>
            <p className="text-lg md:text-xl mb-8">
              {HeroContant.description}
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
              {HeroContant.btntext}
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

      <div className="mb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Introducing Our Latest Product</h2>
          <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:scale-105 transition-transform duration-300">
                <div className="relative overflow-hidden">
                  <Image width={500} height={500} className="object-cover w-full h-full" src={product.image.src} alt={product.image.alt} />
                  {/* <div className={product.overlay.class}></div> */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className={product.button.class}>{product.button.text}</button>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">{product.title}</h3>
                <p className="text-gray-500 text-sm mt-2">{product.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-gray-900 font-bold text-lg">{product.price}</span>
                  <button className={product.addToCartButton.class}>{product.addToCartButton.text}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
