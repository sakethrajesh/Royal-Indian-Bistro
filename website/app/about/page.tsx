import Image from 'next/image';

const teamMembers = [
  {
    name: 'Rajesh Sharma',
    role: 'Executive Chef',
    bio: 'With over 20 years of experience in Indian cuisine, Chef Rajesh brings authentic flavors from various regions of India to our kitchen.',
    image: '/images/chef-rajesh.jpg',
  },
  {
    name: 'Priya Patel',
    role: 'Sous Chef',
    bio: 'Chef Priya specializes in traditional Indian desserts and brings her expertise in creating the perfect balance of flavors.',
    image: '/images/chef-priya.jpg',
  },
  {
    name: 'Amit Singh',
    role: 'Restaurant Manager',
    bio: 'Amit ensures that every guest receives exceptional service and an unforgettable dining experience.',
    image: '/images/manager-amit.jpg',
  },
];

export default function About() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative h-[400px] mb-16 rounded-lg overflow-hidden">
          <Image
            src="/images/restaurant-exterior.jpg"
            alt="Royal Indian Bistro Exterior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              Our Story
            </h1>
          </div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">A Journey of Flavors</h2>
            <p className="text-gray-600 mb-4">
              Royal Indian Bistro was founded in 2010 with a simple mission: to bring
              the authentic flavors of India to our community while providing an
              elegant and welcoming dining experience.
            </p>
            <p className="text-gray-600 mb-4">
              Our journey began when our founder, a passionate food enthusiast,
              noticed a gap in the local dining scene for high-quality Indian
              cuisine that stayed true to traditional recipes while embracing
              modern presentation and service standards.
            </p>
            <p className="text-gray-600">
              Today, we take pride in serving dishes that represent the diverse
              culinary landscape of India, from the rich curries of the North to
              the spicy delicacies of the South, all prepared with the finest
              ingredients and authentic spices.
            </p>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/images/restaurant-interior.jpg"
              alt="Restaurant Interior"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Authenticity</h3>
              <p className="text-gray-600">
                We stay true to traditional recipes while maintaining the highest
                quality standards.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-indigo-600"
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
                We source the finest ingredients and prepare each dish with care
                and attention to detail.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-indigo-600"
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
                We treat every guest like family, ensuring a warm and memorable
                dining experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 