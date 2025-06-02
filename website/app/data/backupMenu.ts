import { CloverMenuItem, CloverCategory } from '../utils/cloverApi';

// Backup categories
export const backupCategories: CloverCategory[] = [
  { id: 'cat_appetizers', name: 'Appetizers', sortOrder: 1 },
  { id: 'cat_main_courses', name: 'Main Courses', sortOrder: 2 },
  { id: 'cat_breads', name: 'Breads & Rice', sortOrder: 3 },
  { id: 'cat_desserts', name: 'Desserts', sortOrder: 4 },
];

// Backup menu items
export const backupItems: CloverMenuItem[] = [
  // Appetizers
  {
    id: 'item_samosa',
    name: 'Samosa',
    description: 'Crispy pastry filled with spiced potatoes and peas',
    price: 6.99,
    priceType: 'FIXED',
    categories: [{ id: 'cat_appetizers', name: 'Appetizers' }],
    tags: ['Vegetarian'],
    imageUrl: '/images/backup/samosa.jpg',
  },
  {
    id: 'item_pakora',
    name: 'Vegetable Pakora',
    description: 'Assorted vegetables dipped in spiced chickpea batter and fried',
    price: 7.99,
    priceType: 'FIXED',
    categories: [{ id: 'cat_appetizers', name: 'Appetizers' }],
    tags: ['Vegetarian', 'Gluten-Free'],
    imageUrl: '/images/backup/pakora.jpg',
  },
  {
    id: 'item_chicken_tikka',
    name: 'Chicken Tikka',
    description: 'Tender chicken pieces marinated in spices and grilled',
    price: 12.99,
    priceType: 'FIXED',
    categories: [{ id: 'cat_appetizers', name: 'Appetizers' }],
    tags: ['Spicy'],
    imageUrl: '/images/backup/chicken-tikka.jpg',
  },

  // Main Courses
  {
    id: 'item_butter_chicken',
    name: 'Butter Chicken',
    description: 'Tender chicken in a rich, creamy tomato-based curry sauce',
    price: 18.99,
    priceType: 'FIXED',
    categories: [{ id: 'cat_main_courses', name: 'Main Courses' }],
    tags: ['Popular'],
    imageUrl: '/images/backup/butter-chicken.jpg',
  },
  {
    id: 'item_lamb_biryani',
    name: 'Lamb Biryani',
    description: 'Fragrant basmati rice cooked with tender lamb and aromatic spices',
    price: 22.99,
    priceType: 'FIXED',
    categories: [{ id: 'cat_main_courses', name: 'Main Courses' }],
    tags: ['Spicy'],
    imageUrl: '/images/backup/lamb-biryani.jpg',
  },
  {
    id: 'item_paneer_tikka_masala',
    name: 'Paneer Tikka Masala',
    description: 'Grilled cottage cheese in a rich, creamy tomato sauce',
    price: 16.99,
    priceType: 'FIXED',
    categories: [{ id: 'cat_main_courses', name: 'Main Courses' }],
    tags: ['Vegetarian', 'Popular'],
    imageUrl: '/images/backup/paneer-tikka-masala.jpg',
  },

  // Breads & Rice
  {
    id: 'item_garlic_naan',
    name: 'Garlic Naan',
    description: 'Soft bread baked in tandoor with garlic and butter',
    price: 4.99,
    priceType: 'FIXED',
    categories: [{ id: 'cat_breads', name: 'Breads & Rice' }],
    tags: ['Vegetarian'],
    imageUrl: '/images/backup/garlic-naan.jpg',
  },
  {
    id: 'item_basmati_rice',
    name: 'Basmati Rice',
    description: 'Fragrant long-grain rice',
    price: 3.99,
    priceType: 'FIXED',
    categories: [{ id: 'cat_breads', name: 'Breads & Rice' }],
    tags: ['Vegetarian', 'Gluten-Free'],
    imageUrl: '/images/backup/basmati-rice.jpg',
  },

  // Desserts
  {
    id: 'item_gulab_jamun',
    name: 'Gulab Jamun',
    description: 'Sweet milk solids dumplings in sugar syrup',
    price: 6.99,
    priceType: 'FIXED',
    categories: [{ id: 'cat_desserts', name: 'Desserts' }],
    tags: ['Vegetarian'],
    imageUrl: '/images/backup/gulab-jamun.jpg',
  },
  {
    id: 'item_kheer',
    name: 'Kheer',
    description: 'Rice pudding with nuts and cardamom',
    price: 5.99,
    priceType: 'FIXED',
    categories: [{ id: 'cat_desserts', name: 'Desserts' }],
    tags: ['Vegetarian', 'Gluten-Free'],
    imageUrl: '/images/backup/kheer.jpg',
  },
]; 