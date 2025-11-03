import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-sm pt-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Address */}
          <div className="flex items-start">
            <FaMapMarkerAlt className="text-red-500 text-xl mt-1 mr-3" />
            <div>
              <h4 className="text-white font-semibold mb-2">Address</h4>
              <p>1/694, Valaiyapathi Salai</p>
              <p> Mogappair East, Chennai Pin: 600037</p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex items-start ">
            <FaPhoneAlt className="text-red-500 text-xl mt-1 mr-3" />
            <div>
              <h4 className="text-white font-semibold mb-2">Contact</h4>
              <div>
                <div className=" flex">
                  <strong>Phone:</strong>{" "}
                  <div>
                    +91 6743113643 <br /> +91 6743532991
                  </div>{" "}
                </div>
                <br />
                <strong>Email:</strong> info@example.com
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="flex items-start">
            <FaClock className="text-red-500 text-xl mt-1 mr-3" />
            <div>
              <h4 className="text-white font-semibold mb-2">Opening Hours</h4>
              <p>
                <strong>Mon–Sat:</strong> 11AM - 11PM <br />
                <strong>Sunday:</strong> Closed
              </p>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-white font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-3 mt-2">
              {[
                { icon: <FaTwitter />, link: "#" },
                { icon: <FaFacebook />, link: "#" },
                { icon: <FaInstagram />, link: "#" },
                { icon: <FaLinkedin />, link: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-500 transition"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center py-4 flex flex-col justify-center items-center mt-8 gap-1 border-t border-gray-800">
          <p>
            © <span>Copyright</span>{" "}
            <strong className="text-white text-sm">
              RJE ZONANCE COMMUNICATION LLP
            </strong>{" "}
            — All Rights Reserved
          </p>
          <a
            className=" text-gray-500"
            href="https://creativio.in/"
            target="_blank"
          >
            Powered by Creativio Media & Advertising LLP
          </a>
        </div>
      </div>
    </footer>
  );
}
