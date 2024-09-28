import React, { useState } from 'react';
import { Youtube, Linkedin, Twitter, Facebook, Instagram, Phone, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      {/* Top bar */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Youtube size={20} />
            <Linkedin size={20} />
            <Twitter size={20} />
            <Facebook size={20} />
            <Instagram size={20} />
          </div>
          <div className="flex items-center mb-4 md:mb-0">
            <Phone size={20} className="mr-2" />
            <span className="text-green-600 font-semibold">Questions? Call: +977-9860459806</span>
          </div>
          <div className="space-x-4">
            <button className="text-gray-600 hover:text-gray-800">REVIEWS</button>
            <button className="text-gray-600 hover:text-gray-800">BLOG</button>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <img src="https://umaholidays.com/assets/images/logo/logo1.png" alt="Uma holidays" className="h-12 md:h-16" />
            
            {/* Mobile menu button */}
            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-6">
              <button className="text-gray-800 hover:text-green-600 font-semibold">HOME</button>
              <button className="text-gray-800 hover:text-green-600 font-semibold">ABOUT US</button>
              <button className="text-gray-800 hover:text-green-600 font-semibold">CONTACT US</button>
              <button className="text-gray-800 hover:text-green-600 font-semibold">OUR TEAM</button>
              <button className="text-gray-800 hover:text-green-600 font-semibold">OUR SERVICES</button>
            </div>

            <div className="hidden md:block bg-green-500 rounded-full p-2">
              <Phone size={24} className="text-white" />
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="flex flex-col space-y-4 pb-4">
                <button className="text-gray-800 hover:text-green-600 font-semibold">HOME</button>
                <button className="text-gray-800 hover:text-green-600 font-semibold">ABOUT US</button>
                <button className="text-gray-800 hover:text-green-600 font-semibold">CONTACT US</button>
                <button className="text-gray-800 hover:text-green-600 font-semibold">OUR TEAM</button>
                <button className="text-gray-800 hover:text-green-600 font-semibold">OUR SERVICES</button>
              </div>
              <div className="bg-green-500 rounded-full p-2 inline-block">
                <Phone size={24} className="text-white" />
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

  export default Navbar;