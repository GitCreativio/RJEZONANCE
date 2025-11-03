import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import PoweredBy from "./components/PoweredBy";

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* Scroll to Top section */}
      <ScrollToTop />

      {/* PoweredBy */}
      <PoweredBy />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Why Choose Us */}
      <WhyUs />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
