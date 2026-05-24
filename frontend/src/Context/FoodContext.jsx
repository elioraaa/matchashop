import { createContext } from 'react';

export const MatchaProductContext = createContext({
  products: [],
  refreshProducts: () => {},
});
