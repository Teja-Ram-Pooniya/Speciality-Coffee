import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Ethiopian Yirgacheffe',
    origin: 'Ethiopia',
    category: 'Single Origin',
    roast: 'Light',
    price: 18.50,
    weight: '250g',
    description: 'A luminous coffee from the birthplace of arabica. Grown at elevations above 1,800m in the Yirgacheffe region, this lot showcases the terroir of rich, volcanic soils and careful wet-processing.',
    notes: ['Blueberry', 'Jasmine', 'Bergamot', 'Honey'],
    image: '',
    emoji: '🫐'
  },
  {
    id: 2,
    name: 'Colombian Supremo',
    origin: 'Colombia',
    category: 'Single Origin',
    roast: 'Medium',
    price: 16.00,
    weight: '250g',
    description: 'Sourced from smallholder farms in the Huila department, this Supremo grade coffee delivers a beautifully balanced cup with silky body and refined sweetness.',
    notes: ['Caramel', 'Red Apple', 'Milk Chocolate', 'Walnut'],
    image: '',
    emoji: '🍎'
  },
  {
    id: 3,
    name: 'Sumatra Mandheling',
    origin: 'Indonesia',
    category: 'Single Origin',
    roast: 'Dark',
    price: 17.25,
    weight: '250g',
    description: 'Wet-hulled in the traditional Giling Basah method, this Sumatran coffee develops its signature full body and complex earthy character. A bold, contemplative cup.',
    notes: ['Dark Chocolate', 'Cedar', 'Tobacco', 'Brown Sugar'],
    image: '',
    emoji: '🌿'
  },
  {
    id: 4,
    name: 'Guatemala Antigua',
    origin: 'Guatemala',
    category: 'Single Origin',
    roast: 'Medium',
    price: 17.75,
    weight: '250g',
    description: 'Grown in the shadow of three volcanoes, Antigua coffees are prized for their depth. This lot is shade-grown at 1,500m and washed to reveal its clean, chocolatey profile.',
    notes: ['Cocoa', 'Spice', 'Orange Peel', 'Toffee'],
    image: '',
    emoji: '🍫'
  },
  {
    id: 5,
    name: 'Kenya AA Nyeri',
    origin: 'Kenya',
    category: 'Single Origin',
    roast: 'Light',
    price: 19.95,
    weight: '250g',
    description: 'AA grade from the Nyeri county, double-fermented and sun-dried on raised beds. This is a coffee of remarkable clarity and vibrant acidity that dances on the palate.',
    notes: ['Blackcurrant', 'Grapefruit', 'Tomato', 'Raw Honey'],
    image: '',
    emoji: '🍇'
  },
  {
    id: 6,
    name: 'Brazil Santos',
    origin: 'Brazil',
    category: 'Blend',
    roast: 'Medium',
    price: 14.50,
    weight: '250g',
    description: 'A crowd-pleasing natural-process coffee from the Cerrado Mineiro region. Low acidity, sweet, and incredibly versatile — perfect for espresso or filter brewing.',
    notes: ['Peanut', 'Milk Chocolate', 'Dried Fruit', 'Vanilla'],
    image: '',
    emoji: '🥜'
  }
];

export const categories = ['All', 'Single Origin', 'Blend'];
export const roastLevels = ['All', 'Light', 'Medium', 'Dark'];
