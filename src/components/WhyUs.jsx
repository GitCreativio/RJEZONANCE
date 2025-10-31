import { BiCheckCircle } from "react-icons/bi";
import { BsSpeedometer } from "react-icons/bs";
import { CgShoppingCart } from "react-icons/cg";

const features = [
  {
    icon: <BsSpeedometer size={40} />,
    title: "Fast Delivery",
    description:
      " Get your groceries delivered quickly and conveniently at your doorstep.",
  },
  {
    icon: <CgShoppingCart size={40} />,
    title: "Fresh & Local",
    description:
      "We deliver only the freshest fruits and vegetables from local markets.",
  },
  {
    icon: <BiCheckCircle size={40} />,
    title: "Simple Ordering",
    description:
      "Just call or message on WhatsApp — no complicated apps or forms.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why"
      className="py-20 px-5 md:px-24  bg-gray-50 text-gray-800 scroll-mt-24"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Box */}
          <div className="bg-red-600 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold mb-6">Why Choose RJE ZONANCE</h3>
            <p className="mb-6">
              Tired of complicated apps? We keep it simple — just call and
              order. Get your groceries faster with a friendly human connection.
              No endless scrolling or complex forms — only speed and service.
            </p>
            <div className="text-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white hover:text-red-600 transition-all duration-300 px-6 py-2 rounded-full font-medium"
              >
                Learn More <span className="text-sm">➜</span>
              </a>
            </div>
          </div>

          {/* Right Feature Boxes */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition-all duration-300"
              >
                <div className="bg-red-100 text-red-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold mb-3">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
