import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export default function Contact() {
  const infoItems = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      text: "1/694, Valaiyapathi Salai, Mogappair East, Chennai Pin: 600037",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Call Us",
      text: "+91 6743113643 | +91 6743532991",
    },
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      text: "info@example.com",
    },
    {
      icon: <FaClock />,
      title: "Opening Hours",
      text: (
        <>
          <strong>Mon–Sat:</strong> 11AM - 11PM; <strong>Sunday:</strong> Closed
        </>
      ),
    },
  ];

  return (
    <section id="contact" className="py-16 bg-white">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-sm font-thin text-gray-800 mb-2">CONTACT</h2> <br />
        <p className="text-5xl font-semibold">
          <span className="">Need Help?</span>{" "}
          <span className="text-red-600">Contact Us</span>
        </p>
      </div>

      {/* Google Map */}
      <div className="container mx-auto px-6 mb-10">
        <iframe
          className="w-full h-[400px] rounded-lg shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.292774600575!2d80.18552807359109!3d13.080622212481694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526400725f6529%3A0x2841c7d5f4c8f1ab!2s1%2F694%2C%20Valayapathi%20Salai%2C%20Padi%20Pudur%20Nagar%2C%20Block%205%2C%20Mogappair%20East%2C%20Chennai%2C%20Tamil%20Nadu%20600037!5e0!3m2!1sen!2sin!4v1762146045962!5m2!1sen!2sin"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>

      {/* Info Boxes */}
      <div className="container mx-auto px-6 grid sm:grid-cols-2  gap-6">
        {infoItems.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 shadow-lg rounded-lg p-6 flex items-center transition hover:-translate-y-1 hover:shadow-xl duration-300"
          >
            <div className="shrink-0 w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center text-2xl mr-4">
              {item.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
