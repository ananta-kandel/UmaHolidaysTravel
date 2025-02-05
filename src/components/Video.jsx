import React, { useState } from 'react';
import { Calendar, Navigation, Users, Plane, Globe } from 'lucide-react';
import video from "../../src/assets/plan.mp4";
import BookingForm from "./PackageInquiry";

const VideoBackground = () => {
  const [selectedType, setSelectedType] = useState('one-way');
  const [selectedDate, setSelectedDate] = useState('');

  const bookingTypes = [
    { id: 'one-way', label: 'One Way' },
    { id: 'round-trip', label: 'Round Trip' },
  ];

  return (
    <div className="relative h-screen">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 pt-8">
        {/* Header */}
        <div className="md:mt-24 mb-12 sm:mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
            WELCOME TO TRAVEL INQUIRY
          </h1>
          <p className="text-xl md:text-2xl text-white font-light drop-shadow-lg">
            Home of Domestic & International Tickets
          </p>
        </div>

        {/* Booking Type Selector */}
        <div className="flex flex-wrap gap-2 mb-6">
          {bookingTypes.map((type) => (
            <button
              key={type.id}
              className={`px-6 py-2 rounded-md transition-colors ${
                selectedType === type.id
                  ? 'bg-red-700 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setSelectedType(type.id)}
            >
              {type.label}
            </button>
          ))}
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-lg p-4 shadow-lg mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* From Field */}
            <div className="flex-1">
              <div className="flex items-center gap-2 p-2 border rounded-md">
                <span className="text-gray-400">
                  <Plane size={20} />
                </span>
                <select className="w-full outline-none bg-transparent">
                  <option value="KTM">KTM</option>
                  <option value="PKR">PKR</option>
                  <option value="BWA">BWA</option>
                </select>
              </div>
            </div>

            {/* To Field */}
            <div className="flex-1">
              <div className="flex items-center gap-2 p-2 border rounded-md">
                <span className="text-gray-400">
                  <Globe size={20} />
                </span>
                <select aria-placeholder='Enter Destination' className="w-full outline-none bg-transparent">
                  <option value="KTM">KTM</option>
                  <option value="PKR">PKR</option>
                  <option value="BWA">BWA</option>
                </select>
              </div>
            </div>

            {/* Calendar Field */}
            <div className="flex-1">
              <div className="flex items-center gap-2 p-2 border rounded-md">
                <span className="text-gray-400">
                  <Calendar size={20} />
                </span>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full outline-none bg-transparent"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>

            {/* Search Button */}
            <button className="bg-red-700 text-white px-6 py-2 rounded-md hover:bg-red-800 transition-colors">
              Search
            </button>
          </div>
        </div>

        {/* Adventure Button */}
       
      </div>
    </div>
  );
};

export default VideoBackground;