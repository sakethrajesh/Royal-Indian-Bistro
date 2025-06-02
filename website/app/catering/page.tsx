'use client';

import { useState } from 'react';
import Image from 'next/image';
import { event } from '../components/GoogleAnalytics';

export default function Catering() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    guestCount: '',
    eventType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Track form submission
    event({
      action: 'submit',
      category: 'Catering',
      label: 'Catering Inquiry Submitted',
    });
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Catering Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elevate your special occasions with our authentic Indian cuisine. From corporate events to weddings, 
            we bring the rich flavors of India to your celebration.
          </p>
        </div>

        {/* Catering Packages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Catering Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Corporate Package */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/catering/corporate.jpg"
                  alt="Corporate Catering"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Corporate Events</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Business lunches and dinners</li>
                  <li>• Conference catering</li>
                  <li>• Office parties</li>
                  <li>• Customizable menus</li>
                </ul>
              </div>
            </div>

            {/* Wedding Package */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/catering/wedding.jpg"
                  alt="Wedding Catering"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Weddings & Celebrations</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Wedding receptions</li>
                  <li>• Engagement parties</li>
                  <li>• Anniversary celebrations</li>
                  <li>• Full-service catering</li>
                </ul>
              </div>
            </div>

            {/* Private Events Package */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/catering/private.jpg"
                  alt="Private Events"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Private Events</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Birthday parties</li>
                  <li>• Family gatherings</li>
                  <li>• Holiday celebrations</li>
                  <li>• Custom menu options</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Inquiry Form */}
        <section className="max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Request a Quote</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Event Date *
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  required
                  value={formData.eventDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="guestCount" className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Guests *
                </label>
                <input
                  type="number"
                  id="guestCount"
                  name="guestCount"
                  required
                  min="1"
                  value={formData.guestCount}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1">
                  Event Type *
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  required
                  value={formData.eventType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="">Select an event type</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="wedding">Wedding</option>
                  <option value="private">Private Event</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Additional Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                placeholder="Please provide any specific requirements or questions..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-orange-600 text-white px-8 py-3 rounded-md hover:bg-orange-700 transition-colors"
              >
                Submit Inquiry
              </button>
            </div>
          </form>
        </section>

        {/* Additional Information */}
        <section className="text-center text-gray-600 mb-16">
          <h2 className="text-2xl font-bold mb-4">Why Choose Our Catering Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-semibold mb-2">Authentic Flavors</h3>
              <p>Experience the rich and authentic taste of Indian cuisine prepared by our expert chefs.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Professional Service</h3>
              <p>Our experienced team ensures smooth execution and exceptional service for your event.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Customizable Menus</h3>
              <p>We work with you to create a menu that perfectly matches your event's needs and preferences.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 