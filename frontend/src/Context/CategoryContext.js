import { createContext } from 'react';

export const CategoryContext = createContext({
  selectedCategory: 'All',
  setSelectedCategory: () => {},
});
