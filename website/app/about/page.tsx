'use client';

import { Suspense } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

// Separate client component that uses useSearchParams
function SearchParamsWrapper() {
  const searchParams = useSearchParams();
  return null; // Since we're not actually using the searchParams yet
}

function AboutContent() {
  const teamMembers = [
    {
      name: 'Chef Rajesh Kumar',
      role: 'Executive Chef',
      bio: 'With over 20 years of experience in Indian cuisine, Chef Rajesh brings authentic flavors and innovative techniques to our kitchen.',
      image: '/images/backup/chef-rajesh.jpg',
    },
    {
      name: 'Priya Sharma',
      role: 'Restaurant Manager',
      bio: 'Priya ensures every guest receives exceptional service and a memorable dining experience.',
      image: '/images/backup/priya-sharma.jpg',
    },
    {
      name: 'Amit Patel',
      role: 'Sous Chef',
      bio: 'Amit specializes in traditional Indian cooking methods and helps maintain the authenticity of our dishes.',
      image: '/images/backup/amit-patel.jpg',
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="relative h-[60vh] mb-16">
          <Image
            src="/images/backup/restaurant-interior.jpg"
            alt="Royal India Bistro Interior"
            fill
            className="object-cover rounded-lg"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              Our Story
            </h1>
          </div>
        </div>

        {/* Story Section */}
        <section className="mb-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded in 2010, Royal India Bistro has been serving authentic Indian cuisine
              to the Alexandria community for over a decade. Our journey began with a simple
              mission: to bring the rich flavors and warm hospitality of India to our
              customers.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Our chefs combine traditional recipes with modern techniques to create
              dishes that are both authentic and innovative. We source the finest
              ingredients and spices to ensure every meal is a memorable experience.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              At Royal India Bistro, we believe that dining is not just about food;
              it's about creating lasting memories through exceptional service and
              a welcoming atmosphere.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-orange-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Authenticity</h3>
              <p className="text-gray-600">
                We stay true to traditional Indian recipes while incorporating
                modern culinary techniques.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">
                We use only the finest ingredients and maintain the highest
                standards in food preparation.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Hospitality</h3>
              <p className="text-gray-600">
                We treat every guest like family, ensuring a warm and welcoming
                dining experience.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <Suspense fallback={
      <div className="min-h-screen pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-32 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    }>
      <SearchParamsWrapper />
      <AboutContent />
    </Suspense>
  );
} 