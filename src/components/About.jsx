import { Phone } from "lucide-react";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";

export default function About() {
  const groceryImages = [
    { src: "/rice.webp", alt: "Rice" },
    { src: "/beef.webp", alt: "Beef" },
    { src: "/chicken.webp", alt: "Chicken" },
    { src: "/vegetables.webp", alt: "Vegetables" },
    { src: "/milk.webp", alt: "Milk" },
    { src: "/stationary.webp", alt: "stationary" },
    { src: "/mutton.webp", alt: "Mutton" },
    { src: "/fish.webp", alt: "Fish" },
  ];

  return (
    <section id="about" className="py-16 px-5 md:px-24 bg-white text-gray-800">
      {/* Section Title */}
      <div className="max-w-6xl mx-auto px-4 text-center mb-12">
        <p className=" font-thin text-sm">ABOUT US</p>
        <br />
        <h2 className="text-3xl md:text-5xl font-semibold mb-3 text-gray-900">
          Learn More{" "}
          <span className=" text-red-500">About Our Grocery Service</span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Column */}
        <div>
          <img
            src="/delivery.webp"
            alt="Grocery Delivery"
            className="rounded-lg max-h-[400px]  mb-6"
          />
          <div className="border-4 border-gray-400 text-center py-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">
              Order Now
            </h3>
            <p className="text-red-600 font-medium text-xl">
              <a href="tel:+91 6743113643" className="  flex justify-center items-center gap-3">
                {" "}
                <Phone />
                +91 6743113643
              </a>{" "}
              <br />
              <a
                href="https://wa.me/9178017897"
                target="_blank"
                className="flex justify-center items-center gap-4"
              >
                <BsWhatsapp /> WhatsApp{" "}
              </a>
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <p className="italic text-gray-600 mb-4">
            We are your local grocery delivery service—bringing fresh
            vegetables, fruits, and daily essentials straight to your doorstep.
          </p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-start">
              <FaCheckCircle className="text-red-600 mt-1 text-lg shrink-0 mr-2" />
              <span>Fast and reliable delivery within your neighborhood.</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-red-600 text-lg shrink-0 mt-1 mr-2" />
              <span>
                Fresh, quality products sourced from trusted local suppliers.
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <FaCheckCircle className="text-red-600 text-lg shrink-0 mt-1" />
              <span>
                Simple ordering — just call or WhatsApp us, and we’ll deliver
                your groceries quickly and conveniently.
              </span>
            </li>
          </ul>

          <p className="text-gray-700">
            No complicated apps or online forms — just easy, friendly service
            for your daily needs. Whether you need fresh fruits, vegetables, or
            household essentials, we’ve got you covered.
          </p>

          <div className="relative mt-6">
            {/* Masonry Grid */}
            <div className="columns-2 md:columns-3 gap-3 space-y-3">
              {groceryImages.map((item, index) => (
                <img
                  key={index}
                  src={item.src}
                  alt={item.alt}
                  className="w-full rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
