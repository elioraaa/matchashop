import { useState } from 'react';
import { createOrderService } from '../services/order';
import { OrdersContext } from './orderContext';

const OrdersProvider = ({ children }) => {

    const [orders, setOrders] = useState([]);

    const createOrder = async (product) => {
        try {
            const newOrder = await createOrderService(product);
            setOrders([...orders, newOrder]);
        } catch (error) {
            console.error('Error creating order:', error);
            throw error;
        }
    };

    const values = { orders, createOrder };
    return (
        <OrdersContext.Provider value={values}>
            {children}
        </OrdersContext.Provider>
    )
};

export { OrdersProvider };
