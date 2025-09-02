import Cards from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

export default function page() {
  return (
      <>
      <Header/>
    <section className="px-6 md:px-20 py-16">
      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Our Mission */}
        <div>
          <h2 className="text-3xl font-bold mb-4"> Our Mission
            <span className="text-orange-500"> Relocations Made Stress-Free
</span>
          </h2>
          <p className="text-gray-700 mb-4">
           At Reloq8U8U, we promise to make your transition as seamless and stress-free as possible. Founded in 2025, we are built on trust, reliability, and a passion for helping people move forward in life.

          </p>
          <p className="text-gray-700 mb-4">
            Whether you’re moving across the street, across Canada, or across the globe, Reloq8U delivers top-quality services at competitive prices. Backed by a team of dedicated professionals, we combine years of industry expertise with a modern, customer-first approach. Our mission is simple: to take the stress out of moving so you can focus on the excitement of your next chapter.

          </p>
          <p className="text-gray-700 mb-4">
           We handle every detail with care—packing, transport, storage, and setup—while providing 24/7 customer support and timely service. With Reloq8U, you’re never alone in the process. Every move is not just a job—it’s a journey we share with you.

          </p>
        
        </div>

        {/* Video Section */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-6 text-center">
            A Dive Into <span className="text-orange-500">Kratos</span> Operations
          </h2>
          <div className="relative w-full max-w-md">
            <img
              src="/1.png" // replace with actual image
              alt="Reloq"
              className="rounded-lg shadow-lg"
            />
            {/* <button className="absolute inset-0 flex items-center justify-center">
              <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                <img src="/1.png" alt="" />
              </div>
            </button> */}
          </div>
        </div>
      </div>

      {/* Kratos Story */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-6 text-center">
          The <span className="text-orange-500">Reloq8U</span> Story
        </h2>
        <div className="max-w-4xl mx-auto text-gray-700 !text-center space-y-4">
          <p>
           In a world where moving often feels overwhelming, there was a need for a relocation company that went beyond trucks and boxes. That vision sparked the birth of Reloq8U8U, a brand founded on the values of strength, trust, and care
          </p>
          <p>
            From day one, our goal was to redefine the moving experience. Instead of treating relocation as just logistics, we chose to treat it as a meaningful life transition. Behind every move is a story—a family starting a new chapter, a business expanding its reach, or an individual chasing new opportunities. At Reloq8U, we honor those stories by making the journey effortless and secure.

          </p>
          <p>
        What started with a small, passionate team has grown into a trusted relocation partner. Today, Reloq8U8U offers residential moves, commercial relocations, long-distance and international services, secure storage, and specialized moving solutions—all powered by a customer-first philosophy.

          </p>
         
         </div>
      </div>
         <div className="text-black text-3xl text-center mt-16 mb-5">
            Why Reloq8U Stands Apart
         </div>
         <div className="grid  mt-5 grid-cols-1 md:grid-cols-3 ">
                  <Cards head="Customer-First Approach " sub="Every move is personalized to your needs" />
                  <Cards head="Modern Solutions " sub="From real-time updates to secure storage, we simplify relocation with innovation.
" />
                  <Cards head="Trust & Care " sub="We treat your belongings like our own, ensuring safety at every step" />
         </div>
    </section>
    <Footer/>
    </>
  );
}
