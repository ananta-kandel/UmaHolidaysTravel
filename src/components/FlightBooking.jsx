import React, { useState } from 'react';
import { Calendar, Navigation, Users } from 'lucide-react';

const FlightBooking = () => {
  const [selectedType, setSelectedType] = useState('one-way');

  const bookingTypes = [
    { id: 'one-way', label: 'One Way' },
    { id: 'round-trip', label: 'Round Trip' },
    // { id: 'multi-city', label: 'Multi City' },
    // { id: 'mountain-flight', label: 'Mountain Flight' },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-200 mb-2 drop-shadow-lg">
          WELCOME TO SASTO TICKETS
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
      <div className="bg-white rounded-lg p-4 shadow-lg">
        <div className="flex flex-col md:flex-row gap-4">
          {/* From Field */}
          <div className="flex-1">
            <div className="flex items-center gap-2 p-2 border rounded-md">
              <span className="text-gray-400">
                <Users size={20} />
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
                <Navigation size={20} />
              </span>
              <input
                type="text"
                placeholder="Enter Destination"
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Search Button */}
          <button className="bg-red-700 text-white px-6 py-2 rounded-md hover:bg-red-800 transition-colors">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightBooking;