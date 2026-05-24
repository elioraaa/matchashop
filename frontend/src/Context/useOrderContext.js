import { useContext } from 'react';
import { OrdersContext } from './orderContext';

export const useOrderContext = () => useContext(OrdersContext);
