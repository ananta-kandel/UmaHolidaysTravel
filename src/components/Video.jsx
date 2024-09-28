import video from "../../src/assets/plan.mp4"
import React, { useState } from 'react';
import {Plane,Globe } from 'lucide-react';
import BookingForm from "./PackageInquiry";
  
  const VideoBackground = () => {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
  
    return (
        <div className="relative h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-yellow-400">
            Your Gateway to Incredible Journeys
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
            <div className="flex items-center">
              <Plane className="text-blue-400 mr-2" size={32} />
              <p className="text-xl md:text-2xl">
                <span className="font-bold">Best Deals</span> on International & Domestic Flights
              </p>
            </div>
            <div className="flex items-center">
              <Globe className="text-green-400 mr-2" size={32} />
              <p className="text-xl md:text-2xl">
                <span className="font-bold">Exclusive</span> Tour Packages 
              </p>
            </div>
          </div>
          {/* <p className="text-lg md:text-xl mb-6 max-w-2xl">
            From thrilling adventures in the Himalayas to luxurious getaways in exotic locations,
            we've got the perfect trip for every Nepali traveler. Don't miss out on our limited-time offers!
          </p> */}
          <div className="bg-white text-gray-800 rounded-lg p-4 mb-8">
            <p className="text-lg font-bold">🎉 Special Offer for Nepali Travelers 🎉</p>
            <p>Book now and get up to 20% off on select international packages!</p>
          </div>
          <button 
            onClick={() => setIsBookingOpen(true)}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold py-4 px-8 rounded-full text-xl transition duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Book Your Adventure Now
          </button>
        </div>
        <BookingForm isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      </div>
    );
  };
  
export default VideoBackground 