import { MapPin, Phone, MessageSquare } from 'lucide-react';
import React, { useState } from 'react';
import BookingForm from "./PackageInquiry";
import VisaAssistanceForm from './visaAssistance';
const EnquiryForm = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4">Ticket Inquiry</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
            </div>
            <div className="flex justify-end">
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
              <button type="button" onClick={onClose} className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400">Close</button>
            </div>
          </form>
        </div>
      </div>
    );
  };

const BottomBar = () => {
    const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
    const [isBookingOpen , setIsBookingOpen] = useState(false);
    const [isVisaOpen , setIsVisaOpen] = useState(false);
    return (
<div className="sticky bottom-0 left-0 right-0  bg-white border-t border-gray-200 py-2">
      <div className="container p-4 mx-auto flex justify-between items-center">
        <div className="flex items-center flex-wrap">
          <MessageSquare className="text-green-500 mr-2" />
          <button onClick={() => setIsVisaOpen(true)} className="text-sm font-semibold">Visa Assistance</button>
        </div>
        <div className="flex items-center">
          <MessageSquare className="text-blue-500 mr-2" />
          <button onClick={() => setIsEnquiryOpen(true)} className="text-sm font-semibold">Ticket Inquiry</button>
        </div>
        <div className="flex items-center">
          <MessageSquare className="text-purple-500 mr-2" />
          <button onClick={() => setIsBookingOpen(true)} className="text-sm font-semibold">Package Inquiry</button>
        </div>
      </div>
      <VisaAssistanceForm isOpen={isVisaOpen} onClose={()=> setIsVisaOpen(false)} />
      <BookingForm isOpen={isBookingOpen} onClose={()=> setIsBookingOpen(false)} />
      <EnquiryForm isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
    </div>
    )
}


export default BottomBar;