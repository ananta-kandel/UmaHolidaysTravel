import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import VideoBackground from './components/Video';
import Services from './components/Services.jsx';
import { Phone, Mail, Twitter, Facebook, Instagram } from 'lucide-react';
import picture from "../src/assets/buddhalogo.svg"
import { useRef } from 'react';
const DestinationCard = ({ title, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <h3 className="text-white text-2xl font-bold">{title}</h3>
      </div>
    </div>
  );
};

const FamousDestinations = () => {
  const destinations = [
    { title: 'Thailand', image: 'https://www.acethehimalaya.com/wp-content/uploads/2024/02/things-to-do-in-pokhara.jpg.webp' },
    { title: 'Dubai', image: 'https://internationalliving.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Fwv75stsetqy3%2FDaKdXY2tkQGWeVQiCbSx7%2Fac01166282697e4e0cafb99180d35cd1%2FThailand_Featured.jpg%3Fq%3D60%26fit%3Dfill%26fm%3Dwebp&w=3840&q=60' },
    { title: 'Singapoor', image: 'https://internationalliving.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Fwv75stsetqy3%2FDaKdXY2tkQGWeVQiCbSx7%2Fac01166282697e4e0cafb99180d35cd1%2FThailand_Featured.jpg%3Fq%3D60%26fit%3Dfill%26fm%3Dwebp&w=3840&q=60' },
    { title: 'Bali', image: 'https://internationalliving.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Fwv75stsetqy3%2FDaKdXY2tkQGWeVQiCbSx7%2Fac01166282697e4e0cafb99180d35cd1%2FThailand_Featured.jpg%3Fq%3D60%26fit%3Dfill%26fm%3Dwebp&w=3840&q=60' },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Famous Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest, index) => (
            <DestinationCard key={index} title={dest.title} image={dest.image} />
          ))}
        </div>
      </div>
    </section>
  );
};



const PartnersSection = ({ title, partners }) => {
  const scrollRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  // Function to handle automatic scrolling
  const autoScroll = () => {
    if (scrollRef.current && !isHovering) {
      scrollRef.current.scrollBy({ left: 1, behavior: 'smooth' });
    }
  };

  // Use useEffect to start the auto-scroll
  useEffect(() => {
    const scrollInterval = setInterval(autoScroll, 10); // Scroll every 10ms

    return () => {
      clearInterval(scrollInterval); // Clean up the interval when component unmounts
    };
  }, [isHovering]);

  // Handle mouse enter and leave to stop/start scrolling on hover
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>

        {/* Left Arrow */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 p-2 rounded-full"
          onClick={() => scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' })}
        >
          &#8592;
        </button>

        {/* Partners List */}
        <div
          className="flex gap-8 overflow-x-scroll py-4"
          ref={scrollRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ scrollBehavior: 'smooth', whiteSpace: 'nowrap' }}
        >
          {partners.map((partner, index) => (
            <img
              key={index}
              src={picture}
              alt={partner.name}
              className="h-44 object-contain"
              style={{ display: 'inline-block' }}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 p-2 rounded-full"
          onClick={() => scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' })}
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};


// const PartnersSection = ({ title, partners }) => (
//   <section className="py-12 bg-white">
//     <div className="container mx-auto px-4">
//       <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
//       <div className="flex flex-wrap justify-center items-center gap-8">
//         {partners.map((partner, index) => (
//           <img key={index} src={picture} alt={partner} className="h-44 object-contain" />
//         ))}
//       </div>
//     </div>
//   </section>
// );

const Footer = () => (
  <footer className="bg-gray-100 pt-12 pb-6">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {['Home', 'Company Profile', 'Blog', 'Contact Us', 'Useful Information', 'Gallery'].map((item) => (
              <li key={item}><a href="#" className="text-gray-600 hover:text-gray-800">{item}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Flight Ticket</h3>
          <ul className="space-y-2">
            {['Nepal Domestic Tickets', 'Flight to Japan', 'Flight to Qatar', 'Trekking in Nepal', 'Adventure Tour in Nepal'].map((item) => (
              <li key={item}><a href="#" className="text-gray-600 hover:text-gray-800">{item}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">International Tour</h3>
          <ul className="space-y-2">
            {['Asia Tours Package', 'Europe Tours Package', 'Dubai, Oman & M.E', 'Australia Tours Package', 'America & Canada', 'Africa'].map((item) => (
              <li key={item}><a href="#" className="text-gray-600 hover:text-gray-800">{item}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Newsletter Signup</h3>
          <p className="mb-4">Subscribe now and receive a 50% discount on your next tour booking</p>
          <form className="flex">
            <input type="email" placeholder="Your e-mail@domain.com" className="flex-grow p-2 border rounded-l" />
            <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded-r">SIGN UP</button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-300 pt-6 flex justify-between items-center">
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">About</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Contact Us</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Useful Information</a>
        </div>
        <div className="flex space-x-4">
          <Twitter className="text-gray-600" />
          <Facebook className="text-gray-600" />
          <Instagram className="text-gray-600" />
        </div>
      </div>
    </div>
  </footer>
);
const App = () => {
  const airlinePartners = ['Buddha Air', 'Cathay Dragon', 'China Eastern', 'China Southern', 'Drukair', 'Emirates'];
  const associatedOrganizations = ['NTB', 'IATA', 'PATA', 'CATTA', 'TAAN'];
  const paymentPartners = ['PayPal', 'Visa', 'Mastercard', 'IMEpay'];
  return (
    <div>
      <Navbar />
      <VideoBackground />
      <Services />
      <FamousDestinations />
      <PartnersSection title="Airlines Partners" partners={airlinePartners} />
      <PartnersSection title="Associated Organizations" partners={associatedOrganizations} />
      <PartnersSection title="Payment Partners" partners={paymentPartners} />
      <Footer />
      <div className="bg-gray-800 text-white py-4 text-center">
        <p className="font-bold">All Right Reserved@Uma Holidays</p>
      </div>
    </div>
  );
};

export default App;