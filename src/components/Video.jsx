import video from "../../src/assets/plan.mp4"
import React, { useState } from 'react';
import { X ,Plane, Globe, Users} from 'lucide-react';
const BookingForm = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      destination: '',
      date: '',
      guests: 1
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Here you would typically send the form data to your server
      console.log('Booking submitted:', formData);
      // For demonstration, we'll just show an alert
      alert('Booking submitted successfully!');
      onClose();
    };
  
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-lg max-w-md w-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Book Your Trip</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="destination" className="block mb-2">Destination</label>
              <input
                type="text"
                id="destination"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="block mb-2">Preferred Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="guests" className="block mb-2">Number of Guests</label>
              <input
                type="number"
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                min="1"
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
              Submit Booking
            </button>
          </form>
        </div>
      </div>
    );
  };
  
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