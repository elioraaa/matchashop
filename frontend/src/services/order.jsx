import axios from 'axios';

const API_URL = 'http://localhost:3000/order/';

export const createOrderService = async (order) => {
    const response = await axios.post(`${API_URL}create`, order);
    return response.data;
};
