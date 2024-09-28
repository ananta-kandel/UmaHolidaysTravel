import React from 'react';
import { useForm } from 'react-hook-form';
import { X } from 'lucide-react';

const BookingForm = ({ isOpen, onClose }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      destination: '',
      date: '',
      phoneNumber: '',
      Budget: '',
      guests: 1
    }
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Booking submitted:', result);
      alert('Booking submitted successfully!');
      onClose();
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('Error submitting booking. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed scroll-m-0 inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Book Your Trip</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Name</label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
              className="w-full p-2 border rounded"
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              className="w-full p-2 border rounded"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="destination" className="block mb-2">Destination</label>
            <input
              type="text"
              id="destination"
              {...register("destination", { required: "Destination is required" })}
              className="w-full p-2 border rounded"
            />
            {errors.destination && <span className="text-red-500 text-sm">{errors.destination.message}</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Budget</label>
            <input
              type="text"
              id="budget"
              {...register("budget", { 
                required: "Phone number is required",
                pattern: {
                  message: "Invalid phone Number"
                }
              })}
              className="w-full p-2 border rounded"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block mb-2">Preferred Date</label>
            <input
              type="date"
              id="date"
              {...register("date", { required: "Date is required" })}
              className="w-full p-2 border rounded"
            />
            {errors.date && <span className="text-red-500 text-sm">{errors.date.message}</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block mb-2">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              {...register("phoneNumber", { 
                required: "Phone number is required",
                pattern: {
                  value: /^(?:98|97)\d{8}$|^01\d{7}$/,
                  message: "Invalid phone number"
                }
              })}
              className="w-full p-2 border rounded"
            />
            {errors.phoneNumber && <span className="text-red-500 text-sm">{errors.phoneNumber.message}</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="guests" className="block mb-2">Number of Guests</label>
            <input
              type="number"
              id="guests"
              {...register("guests", { 
                required: "Number of guests is required",
                min: {
                  value: 1,
                  message: "Must be at least 1 guest"
                }
              })}
              className="w-full p-2 border rounded"
            />
            {errors.guests && <span className="text-red-500 text-sm">{errors.guests.message}</span>}
          </div>
          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
            Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;