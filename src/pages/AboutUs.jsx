import React, { useState } from 'react';

import Layout from './Layout';
const AboutUsPage = () => {
  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen pb-16">
      <header className="bg-[#039dd8] text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">About Us</h1>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-[#36a000] mb-4">Welcome to Your Travel Company</h2>
          <p className="mb-4">At <span className="font-semibold text-[#1ba7e0]">Your Travel Company</span>, we believe that every journey is an opportunity for discovery, growth, and unforgettable memories. Founded in 2010, we've been dedicated to crafting exceptional travel experiences for adventurers from all walks of life.</p>
          <p className="mb-4">Our passion for exploration drives us to curate unique itineraries that go beyond the typical tourist routes. We pride ourselves on our attention to detail, personalized service, and commitment to sustainable travel practices.</p>
          <p className="mb-4">Whether you're dreaming of a relaxing beach getaway, an adrenaline-pumping adventure, or a cultural immersion in a far-off land, our team of experienced travel experts is here to turn your travel dreams into reality.</p>
        </section>
        
        <section className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-[#36a000] mb-4">Our Promise</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Tailored experiences to suit your unique preferences</li>
            <li>Expert guidance from our knowledgeable travel consultants</li>
            <li>24/7 support throughout your journey</li>
            <li>Commitment to responsible and sustainable tourism</li>
          </ul>
          <p className="mt-4">Let us be your gateway to the world's wonders. With <span className="font-semibold text-[#1ba7e0]">Your Travel Company</span>, every destination becomes a story, and every trip becomes a treasure.</p>
        </section>
      </main>
    </div>
    </Layout>
    
  );
};

export default AboutUsPage;