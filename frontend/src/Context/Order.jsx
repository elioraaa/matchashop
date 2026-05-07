import { createContext, useContext, useState, useEffect } from 'react';
import { createOrder } from '../services/order';

const OrdersContext = createContext();

const OrdersProvider = ({ children }) => {

    const [orders, setOrders] = useState([]);

    const createOrder = async (product) => {
        try {
            const newOrder = await createOrder(product);
            setOrders([...orders, newOrder]);
        } catch (error) {
            console.error('Error creating order:', error);
            throw error;
        }
    };
    const value = { orders, createOrder };
    return (
        <OrdersProvider.Provider value={value}>
            {children}
        </OrdersProvider.Provider>
    )
};

const useOrderContext = () => useContext(OrdersContext);
export { useOrderContext, OrdersProvider };