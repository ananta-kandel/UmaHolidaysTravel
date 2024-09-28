// import React, { useState } from 'react';
// import { Youtube, Linkedin, Twitter, Facebook, Instagram, Phone, Menu, X } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-white shadow-md">
//       {/* Top bar */}
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row justify-between items-center py-4">
//           <div className="flex items-center space-x-4 mb-4 md:mb-0">
//             <Youtube size={20} />
//             <Linkedin size={20} />
//             <Twitter size={20} />
//             <Facebook size={20} />
//             <Instagram size={20} />
//           </div>
//           <div className="flex items-center mb-4 md:mb-0">
//             <Phone size={20} className="mr-2" />
//             <span className="text-green-600 font-semibold">Questions? Call: +977-9860459806</span>
//           </div>
//           <div className="space-x-4">
//             <button className="text-gray-600 hover:text-gray-800">REVIEWS</button>
//             <button className="text-gray-600 hover:text-gray-800">BLOG</button>
//           </div>
//         </div>
//       </div>

//       {/* Main navbar */}
//       <div className="border-t border-gray-200">
//         <div className="container mx-auto px-4">
//           <div className="flex justify-between items-center py-4">
//             <img src="https://umaholidays.com/assets/images/logo/logo1.png" alt="Uma holidays" className="h-12 md:h-16" />

//             {/* Mobile menu button */}
//             <button className="md:hidden" onClick={toggleMenu}>
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>

//             {/* Desktop menu */}
//             <div className="hidden md:flex space-x-6">
//               <Link to="/" className="text-gray-800 hover:text-green-600 font-semibold">HOME</Link>
//               <Link to="/about" className="text-gray-800 hover:text-green-600 font-semibold">ABOUT US</Link>
//               <Link to="/about" className="text-gray-800 hover:text-green-600 font-semibold">PACKAGES</Link>
               
//               <Link to="/about" className="text-gray-800 hover:text-green-600 font-semibold">OUR TEAM</Link>
//               <Link to="/about" className="text-gray-800 hover:text-green-600 font-semibold">OUR SERVICES</Link>
//             </div>

//             <div className="hidden md:block bg-green-500 rounded-full p-2">
//               <Phone size={24} className="text-white" />
//             </div>
//           </div>

//           {/* Mobile menu */}
//           {isMenuOpen && (
//             <div className="md:hidden">
//               <div className="flex flex-col space-y-4 pb-4">
//                 <Link to="/" className="text-gray-800 hover:text-green-600 font-semibold">HOME</Link>
//                 <Link to="/" className="text-gray-800 hover:text-green-600 font-semibold">ABOUT US</Link>
//                 <Link to="/" className="text-gray-800 hover:text-green-600 font-semibold">PACKAGES</Link>
                
//                 <Link to="/" className="text-gray-800 hover:text-green-600 font-semibold">OUR TEAM</Link>
//                 <Link to="/" className="text-gray-800 hover:text-green-600 font-semibold">OUR SERVICES</Link>
//               </div>
//               <div className="bg-green-500 rounded-full p-2 inline-block">
//                 <Phone size={24} className="text-white" />
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import { Youtube, Linkedin, Twitter, Facebook, Instagram, Phone, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For Packages dropdown

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openDropdown = () => {
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
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
            <img
              src="https://umaholidays.com/assets/images/logo/logo1.png"
              alt="Uma holidays"
              className="h-12 md:h-16"
            />

            {/* Mobile menu button */}
            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-6">
              <Link to="/" onMouseEnter={closeDropdown} className="text-gray-800 hover:text-green-600 font-semibold">HOME</Link>
              <Link to="/about" onMouseEnter={closeDropdown} className="text-gray-800 hover:text-green-600 font-semibold">ABOUT US</Link>

              {/* Dropdown for Packages */}
              <div
                className="relative"
                onMouseEnter={openDropdown}
                onClick={closeDropdown}
              >
                <button className="text-gray-800 hover:text-green-600 font-semibold">
                  PACKAGES
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <ul className="absolute bg-white shadow-lg py-2 w-48 mt-2 rounded-lg z-10">
                    <li>
                      <Link
                        to="/thailand"
                        className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                      >
                        Thailand
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/singapore"
                        className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                      >
                        Singapore
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/malaysia"
                        className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                      >
                        Malaysia
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/bali"
                        className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                      >
                        Bali
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              <Link to="/our-team" onMouseEnter={closeDropdown} className="text-gray-800 hover:text-green-600 font-semibold">OUR TEAM</Link>
              <Link to="/our-services" onMouseEnter={closeDropdown} className="text-gray-800 hover:text-green-600 font-semibold">OUR SERVICES</Link>
            </div>

            <div className="hidden md:block bg-green-500 rounded-full p-2">
              <Phone size={24} className="text-white" />
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="flex flex-col space-y-4 pb-4">
                <Link to="/" onMouseEnter={closeDropdown} className="text-gray-800 hover:text-green-600 font-semibold">HOME</Link>
                <Link to="/about"  onMouseEnter={closeDropdown} className="text-gray-800 hover:text-green-600 font-semibold">ABOUT US</Link>
                {/* <Link to="/packages" className="text-gray-800 hover:text-green-600 font-semibold">PACKAGES</Link> */}
                <div
                className="relative"
                onMouseEnter={openDropdown}
              >
                <button className="text-gray-800 hover:text-green-600 font-semibold">
                  PACKAGES
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <ul className="absolute bg-white shadow-lg py-2 w-48 mt-2 rounded-lg z-10">
                    <li>
                      <Link
                        to="/thailand"
                        className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                      >
                        Thailand
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/singapore"
                        className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                      >
                        Singapore
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/malaysia"
                        className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                      >
                        Malaysia
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/bali"
                        className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                      >
                        Bali
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

                <Link to="/our-team" className="text-gray-800 hover:text-green-600 font-semibold">OUR TEAM</Link>
                <Link to="/our-services" className="text-gray-800 hover:text-green-600 font-semibold">OUR SERVICES</Link>
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
