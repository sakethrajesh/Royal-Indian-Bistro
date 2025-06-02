'use client';

import Image from "next/image";
import Link from 'next/link';
import { event } from './components/GoogleAnalytics';

export default function Home() {
  const handleOrderClick = () => {
    event({
      action: 'click',
      category: 'Order',
      label: 'Order Now Button - Hero Section',
    });
  };

  const handleMenuClick = () => {
    event({
      action: 'click',
      category: 'Navigation',
      label: 'View Full Menu Button',
    });
  };

  const handleAboutClick = () => {
    event({
      action: 'click',
      category: 'Navigation',
      label: 'Learn More About Us Link',
    });
  };

  const featuredDishes = [
    {
      name: 'Butter Chicken',
      description: 'Tender chicken in a rich, creamy tomato-based curry sauce',
      image: '/images/butter-chicken.jpg',
      price: '$18.99',
    },
    {
      name: 'Lamb Biryani',
      description: 'Fragrant basmati rice cooked with tender lamb and aromatic spices',
      image: '/images/lamb-biryani.jpg',
      price: '$22.99',
    },
    {
      name: 'Paneer Tikka',
      description: 'Grilled cottage cheese marinated in spices and yogurt',
      image: '/images/paneer-tikka.jpg',
      price: '$15.99',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center" aria-label="Welcome to Royal India Bistro">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Royal India Bistro - Elegant Indian Restaurant Interior in Alexandria, VA"
            fill
            className="object-cover brightness-50"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Best Indian Restaurant in Alexandria, VA
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Authentic Indian Cuisine & Fine Dining Experience
          </p>
          <a
            href="https://www.clover.com/online-ordering/royal-india-bistro-alexandria-alexandria"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-orange-700 transition-colors inline-block"
            aria-label="Order Indian Food Online from Royal India Bistro"
            onClick={handleOrderClick}
          >
            Order Now
          </a>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-16 bg-white" aria-labelledby="featured-dishes-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="featured-dishes-heading" className="text-3xl font-bold text-center mb-12">
            Popular Indian Dishes in Alexandria
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish) => (
              <article
                key={dish.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={dish.image}
                    alt={`${dish.name} - Authentic Indian Dish at Royal India Bistro`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                  <p className="text-gray-600 mb-4">{dish.description}</p>
                  <p className="text-orange-600 font-semibold">{dish.price}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-block bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition-colors"
              aria-label="View our complete Indian restaurant menu"
              onClick={handleMenuClick}
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image
                src="/images/restaurant-interior.jpg"
                alt="Royal India Bistro Interior - Elegant Indian Restaurant in Alexandria"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 id="about-heading" className="text-3xl font-bold mb-6">
                Alexandria's Premier Indian Restaurant
              </h2>
              <p className="text-gray-600 mb-4">
                Welcome to Royal India Bistro, Alexandria's top-rated Indian restaurant. 
                We bring the authentic flavors of India to your table, serving traditional 
                dishes prepared by our expert chefs from various regions of India.
              </p>
              <p className="text-gray-600 mb-6">
                Located in the heart of Alexandria, VA, our restaurant offers an 
                unforgettable dining experience with carefully crafted dishes using 
                traditional spices and cooking techniques. We source the finest 
                ingredients to ensure authentic and memorable Indian cuisine.
              </p>
              <Link
                href="/about"
                className="text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                aria-label="Learn more about Royal India Bistro's story"
                onClick={handleAboutClick}
              >
                Learn more about us →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
