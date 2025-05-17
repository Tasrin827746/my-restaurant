import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const Footer: FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-6 lg:px-24">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center mb-4">
            <Image src="/logo.png" alt="logo" width={30} height={30} />
            <span className="text-xl font-semibold tracking-widest ml-2">Spicy</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Egestas sit in lobortis duis viverra enim eros ornare. Et tincidunt pretium curabitur
            vehicula turpis adipiscing donec. Et ut morbi magna quis purus aliquet.
          </p>
          <div className="flex space-x-4 text-xl text-white">
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
            <FaInstagram />
            {/* <FaYelp /> */}
          </div>
        </div>

        {/* Our Location */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Location</h3>
          <p className="text-gray-300 text-sm">3 E 19th St, 123 Fifth Avenue,</p>
          <p className="text-gray-300 text-sm">NY 10160, New York, USA</p>
          <p className="text-gray-300 text-sm mb-2">1 234 567 890</p>
          <div className="flex items-center text-sm text-white">
            <FaMapMarkerAlt className="mr-2" />
            Get Direction
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Menu</li>
            <li>Testimonial</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
          <div className="flex items-start space-x-2 mb-3">
            <FaClock className="text-primary mt-1" />
            <div className="text-gray-300 text-sm">
              <p>Sunday to Wednesday</p>
              <p>9AM - 10.30PM</p>
            </div>
          </div>
          <div className="flex items-start space-x-2 mb-4">
            <FaClock className="text-primary mt-1" />
            <div className="text-gray-300 text-sm">
              <p>Thursday, Friday, Saturday</p>
              <p>9AM - 12.30AM</p>
            </div>
          </div>
          <Link href="/reservation">
          <button className="bg-primary text-black px-4 py-2 font-semibold rounded-full tracking-wide hover:bg-orange-700 hover:text-white transition">
            Reservation
          </button>
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
     <div className="border-t border-gray-700 mt-10 pt-6 text-sm flex flex-col md:flex-row justify-between items-center text-gray-300">
  <p>Copyright © {new Date().getFullYear()} Spicy Restaurant</p>
  <p>Powered by Spicy Restaurant</p>
</div>

    </footer>
  );
};

export default Footer;
