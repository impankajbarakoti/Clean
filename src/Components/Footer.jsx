import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

// Logo URL provided by the user
const LOGO_URL =
  "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2019/02/logo_black.png";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 font-sans border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-10">
        {/* Top Section: Logo and Subscription Form */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-10 md:mb-16">
          {/* Logo */}
          <div className="mb-8 md:mb-0">
            <img src={LOGO_URL} alt="Qleen Logo" className="h-20 w-auto" />
          </div>

          {/* Subscription Form */}
          <div className="md:max-w-md w-full">
            <form className="flex mb-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-5 py-3 w-15 border-none rounded-l-full bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:outline-none placeholder-gray-500 transition-colors"
                aria-label="Email subscription"
              />
              <button
                type="submit"
                className="bg-orange-500 text-white font-bold px-8 py-3 rounded-r-full hover:bg-orange-600 transition-colors shadow-md"
              >
                Sign Up
              </button>
            </form>
            <p className="text-sm text-gray-500">
              Receive exclusive cleaning and home maintenance promotions, and
              updates straight to your inbox.
            </p>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="border-t border-gray-200 mb-10 md:mb-16"></div>

        {/* Main Links and Contact Section (Responsive Grid Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Column 1: About and Social Media */}
          <div className="md:col-span-1">
            <p className="text-gray-600 mb-6 text-base">
              At Qleen, we treat every space like royalty. Whether it's your
              home, office, or move-in clean, we tailor our services to fit your
              lifestyle and expectations.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-green-600 hover:text-green-700 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-green-600 hover:text-green-700 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="Twitter/X"
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-green-600 hover:text-green-700 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Column 2: Services Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/blogs"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Our Blogs
                </a>
              </li>
              <li>
                <a
                  href="contact"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Contact Us
                </a> 
              </li>
            </ul>
          </div>

          {/* Column 3: Info Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Info</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/blogs"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                 Our Blogs
                </a>
              </li>
              <li>
                <a
                  href="/blog/1"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                 Blogs Deatils
                </a>
              </li>
              
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                <a
                  href="tel:8442429464"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  844 242 9464
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                <a
                  href="mailto:contact@qleen.com"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  contact@qleen.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-600">
                  590 Walnut St Denver, <br />
                  CO 80205
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Bottom Links */}
        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p className="mb-3 sm:mb-0">
            © 2025 BoldThemes. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-orange-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
