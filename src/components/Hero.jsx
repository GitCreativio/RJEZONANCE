import { MessageCircle, Phone } from "lucide-react";
import src from "../assets/hero.json";

const Hero = () => {
  return (
    <section
      id="home"
      style={{
        backgroundImage: `url('${src}')`,
      }}
      className="min-h-screen  flex flex-col justify-center items-center  bg-cover bg-center relative text-white text-center px-4"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* <div className=" absolute   top-25 left-5  sm:top-25 sm:left-20 md:left-25 md:top-30">
        <img
          src="/Logo.png"
          className=" max-w-[60px] md:max-w-[100px]"
          alt="logo"
        />
      </div> */}

      {/* Content */}
      <div className="relative  z-10 max-w-2xl px-4 py-8 sm:px-6 md:px-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          From Market to Your Doorstep
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-6">
          Call or WhatsApp your grocery list — we’ll handle the rest!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:+91 6743113643"
            className="bg-red-500 hover:bg-red-600 px-8 py-3 rounded-full flex items-center gap-2 text-white font-medium w-full sm:w-auto justify-center"
          >
            <Phone size={20} /> Call Now
          </a>

          <a
            href="https://wa.me/+919178017897"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-full flex items-center gap-2 text-white font-medium w-full sm:w-auto justify-center"
          >
            <MessageCircle size={20} /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
