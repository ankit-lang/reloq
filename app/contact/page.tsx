import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

export default function page() {
  return (
      <>
      <Header/>
    <section className="px-6 md:px-20 py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Contact <span className="text-orange-500">Us</span>
        </h2>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Company Info */}
          <div className="space-y-4 text-gray-700">
            <h3 className="text-xl font-semibold">
              Reloq8U Moving Company
            </h3>
            <p>Kitchener-Waterloo, Ontario-wide + Inter-province if required</p>

            <div>
              <p className="font-medium">Phone:</p>
              <a
                href="tel:+15483840444"
                className="text-orange-500 hover:underline"
              >
                +1 (548)-384-0444
              </a>
            </div>

            <div>
              <p className="font-medium">Email:</p>
              <a
                href="mailto:dev@reloq8U.com"
                className="text-orange-500 hover:underline"
              >
                dev@reloq8U.com
              </a>
            </div>

            <p>
              <span className="font-medium">Office:</span> No physical office –
              serving clients directly
            </p>

            <p>
              <span className="font-medium">Hours:</span> 8 AM – 8 PM, 7 days a
              week
            </p>

            <p>
              <span className="font-medium">Areas Served:</span> Kitchener-
              Waterloo, Ontario-wide + Inter-province if required
            </p>

            <p>
              We are available 7 days a week from 8 AM to 8 PM. For additional
              questions, you can call us at{" "}
              <a
                href="tel:+15483840444"
                className="text-orange-500 hover:underline"
              >
                +1 (548)-384-0444
              </a>{" "}
              or check our reviews on{" "}
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:underline"
              >
                Google
              </a>
              .
            </p>
          </div>

          {/* Policies & CTA */}
          <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Guarantees / Policies
              </h3>
              <p className="text-gray-600 mt-2">
                General Liability Insurance for Damage Protection
              </p>
            </div>

            <div className="text-center">
              <button className="bg-orange-500 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition">
                Schedule Virtual Survey <br />
                <span className="text-sm font-normal">
                  Get Your Free Moving Estimate!
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}
