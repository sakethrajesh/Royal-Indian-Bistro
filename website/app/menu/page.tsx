'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { getMenuData, getItemsByCategory, formatPrice, CloverMenuItem, CloverCategory } from '../utils/cloverApi';
import { backupCategories, backupItems } from '../data/backupMenu';
import { event } from '../components/GoogleAnalytics';

export default function Menu() {
  const [menuData, setMenuData] = useState<{
    items: CloverMenuItem[];
    categories: CloverCategory[];
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [usingBackupData, setUsingBackupData] = useState(false);

  useEffect(() => {
    async function loadMenuData() {
      try {
        const data = await getMenuData();
        setMenuData(data);
        setUsingBackupData(false);
        // Track successful menu load
        event({
          action: 'view',
          category: 'Menu',
          label: 'Menu Page Loaded - Live Data',
        });
      } catch (err) {
        console.error('Error loading menu from Clover:', err);
        // Use backup data
        setMenuData({
          items: backupItems,
          categories: backupCategories,
        });
        setUsingBackupData(true);
        // Track backup data usage
        event({
          action: 'view',
          category: 'Menu',
          label: 'Menu Page Loaded - Backup Data',
        });
      } finally {
        setLoading(false);
      }
    }

    loadMenuData();
  }, []);

  const handleItemClick = (itemName: string) => {
    event({
      action: 'click',
      category: 'Menu',
      label: `Menu Item Clicked: ${itemName}${usingBackupData ? ' (Backup Data)' : ''}`,
    });
  };

  if (loading) {
    return (
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
    );
  }

  if (!menuData) {
    return null;
  }

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Menu</h1>
          {usingBackupData && (
            <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-2 rounded-md inline-block">
              Showing sample menu items. Live menu data is temporarily unavailable.
            </div>
          )}
        </div>
        
        {menuData.categories.map((category) => {
          const categoryItems = getItemsByCategory(menuData.items, category.id);
          
          if (categoryItems.length === 0) return null;

          return (
            <section key={category.id} className="mb-16">
              <h2 className="text-3xl font-bold mb-8">{category.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryItems.map((item) => (
                  <article
                    key={item.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                    onClick={() => handleItemClick(item.name)}
                  >
                    {item.imageUrl && (
                      <div className="relative h-48">
                        <Image
                          src={item.imageUrl}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          onError={(e) => {
                            // Fallback to a placeholder image if the image fails to load
                            const target = e.target as HTMLImageElement;
                            target.src = '/images/backup/placeholder.jpg';
                          }}
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                        <p className="text-orange-600 font-semibold">
                          {formatPrice(item.price, item.priceType)}
                        </p>
                      </div>
                      {item.description && (
                        <p className="text-gray-600">{item.description}</p>
                      )}
                      {item.tags.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}

        <div className="mt-12 text-center text-gray-600">
          <p className="mb-4">
            * Prices and availability are subject to change. Please contact us for the most up-to-date information.
          </p>
          <p>
            ** Please inform our staff of any dietary restrictions or allergies.
          </p>
          {usingBackupData && (
            <p className="mt-4 text-sm">
              Note: This is a sample menu. Please call us for current menu items and prices.
            </p>
          )}
        </div>
      </div>
    </div>
  );
} 