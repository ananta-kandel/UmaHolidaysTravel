import React from 'react'
import { Phone, Mail, Twitter, Facebook, Instagram } from 'lucide-react';
const Footer = () => {
  return (
      <>
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
      <div className="bg-gray-800 text-white py-4 text-center">
        <p className="font-bold">All Right Reserved@Uma Holidays</p>
      </div>
      </>
  )
}

export default Footer