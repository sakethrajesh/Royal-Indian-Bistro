// Types for Clover API responses
export interface CloverMenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  priceType: string;
  categories: {
    id: string;
    name: string;
  }[];
  tags: string[];
  imageUrl?: string;
}

export interface CloverCategory {
  id: string;
  name: string;
  sortOrder: number;
}

// Replace these with your actual Clover API credentials
const CLOVER_API_TOKEN = process.env.CLOVER_API_TOKEN;
const MERCHANT_ID = process.env.CLOVER_MERCHANT_ID;
const API_BASE_URL = `https://api.clover.com/v3/merchants/${MERCHANT_ID}`;

// Cache menu data to avoid excessive API calls
let menuCache: {
  items: CloverMenuItem[];
  categories: CloverCategory[];
  lastUpdated: number;
} | null = null;

const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

async function fetchWithAuth(endpoint: string) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Authorization': `Bearer ${CLOVER_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Clover API error: ${response.statusText}`);
  }

  return response.json();
}

export async function getMenuData() {
  // Return cached data if it's still valid
  if (menuCache && Date.now() - menuCache.lastUpdated < CACHE_DURATION) {
    return menuCache;
  }

  try {
    // Fetch categories
    const categoriesResponse = await fetchWithAuth('/categories?expand=items');
    const categories: CloverCategory[] = categoriesResponse.elements
      .filter((cat: any) => cat.showInReporting) // Only get categories that should be shown
      .map((cat: any) => ({
        id: cat.id,
        name: cat.name,
        sortOrder: cat.sortOrder,
      }))
      .sort((a: CloverCategory, b: CloverCategory) => a.sortOrder - b.sortOrder);

    // Fetch all items
    const itemsResponse = await fetchWithAuth('/items?expand=categories,tags');
    const items: CloverMenuItem[] = itemsResponse.elements
      .filter((item: any) => item.available) // Only get available items
      .map((item: any) => ({
        id: item.id,
        name: item.name,
        description: item.description,
        price: item.price / 100, // Convert from cents to dollars
        priceType: item.priceType,
        categories: item.categories?.elements || [],
        tags: item.tags?.elements?.map((tag: any) => tag.name) || [],
        imageUrl: item.imageUrl,
      }));

    // Update cache
    menuCache = {
      items,
      categories,
      lastUpdated: Date.now(),
    };

    return menuCache;
  } catch (error) {
    console.error('Error fetching menu data:', error);
    throw error;
  }
}

// Helper function to get items by category
export function getItemsByCategory(items: CloverMenuItem[], categoryId: string) {
  return items.filter(item => 
    item.categories.some(cat => cat.id === categoryId)
  );
}

// Helper function to format price
export function formatPrice(price: number, priceType: string) {
  if (priceType === 'FIXED') {
    return `$${price.toFixed(2)}`;
  }
  // Handle other price types (VARIABLE, PER_UNIT, etc.) as needed
  return `$${price.toFixed(2)}`;
} 