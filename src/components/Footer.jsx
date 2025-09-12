import React from "react";
import Link from "next/link";

const Footer = () => (
  <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white relative z-50 border-t border-gray-700">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div className="md:col-span-1">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Crypto Verse
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Your ultimate destination for cryptocurrency insights, market data,
            and latest news in the digital asset world.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-green-400 mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="text-gray-300 hover:text-green-400 transition-colors text-sm"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/cryptocurrencies"
                className="text-gray-300 hover:text-green-400 transition-colors text-sm"
              >
                Cryptocurrencies
              </Link>
            </li>
            <li>
              <Link
                href="/exchanges"
                className="text-gray-300 hover:text-green-400 transition-colors text-sm"
              >
                Exchanges
              </Link>
            </li>
            <li>
              <Link
                href="/news"
                className="text-gray-300 hover:text-green-400 transition-colors text-sm"
              >
                News
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-lg font-semibold text-green-400 mb-4">
            Resources
          </h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/about"
                className="text-gray-300 hover:text-green-400 transition-colors text-sm"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-green-400 transition-colors text-sm"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="text-gray-300 hover:text-green-400 transition-colors text-sm"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-gray-300 hover:text-green-400 transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Social & Newsletter */}
        <div>
          <h4 className="text-lg font-semibold text-green-400 mb-4">
            Stay Connected
          </h4>
          <div className="flex space-x-4 mb-4">
            {/* Social Icons */}
            <a
              href="#"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            
            <a
              href="#"
              className="text-gray-300 hover:text-pink-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
          <p className="text-gray-400 text-xs">
            Subscribe to our newsletter for the latest crypto updates
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-400 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Cryptoverse. All rights reserved.
        </div>
        <div className="flex space-x-6 text-sm">
          <span className="text-gray-400">
            Made with ❤️ for crypto enthusiasts
          </span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
