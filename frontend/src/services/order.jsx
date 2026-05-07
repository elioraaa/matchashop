import axios from 'axios';

const API_URL = 'http://localhost:3000/order/';

export const createOrder = async (product) => {
    const response = await axios.post(`${API_URL}create`, { product });
    return response.data;
};