import { Youtube, Linkedin, Twitter, Facebook, Instagram, Phone } from 'lucide-react';
const Navbar = () => (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <Youtube size={20} />
            <Linkedin size={20} />
            <Twitter size={20} />
            <Facebook size={20} />
            <Instagram size={20} />
          </div>
          <div className="flex items-center">
            <Phone size={20} className="mr-2" />
            <span className="text-green-600 font-semibold">Questions? Call: +977-9860459806</span>
          </div>
          <div className="space-x-4">
            <button className="text-gray-600 hover:text-gray-800">REVIEWS</button>
            <button className="text-gray-600 hover:text-gray-800">BLOG</button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <img src="https://umaholidays.com/assets/images/logo/logo1.png" alt="Uma holidays" className="h-16" />
          <div className="space-x-6">
            <button className="text-gray-800 hover:text-green-600 font-semibold">HOME</button>
            <button className="text-gray-800 hover:text-green-600 font-semibold">ABOUT US</button>
            <button className="text-gray-800 hover:text-green-600 font-semibold">CONTACT US</button>
            <button className="text-gray-800 hover:text-green-600 font-semibold">OUR TEAM</button>
            <button className="text-gray-800 hover:text-green-600 font-semibold">OUR SERVICES</button>
          </div>
          <div className="bg-green-500 rounded-full p-2">
            <Phone size={24} className="text-white" />
          </div>
        </div>
      </div>
      </div>
    </nav>
  );

  export default Navbar;