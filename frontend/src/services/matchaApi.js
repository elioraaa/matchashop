import axios from 'axios';

const API_URL = 'http://localhost:3000/matcha-products';

export const getMatchaProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createMatchaProduct = async (product) => {
  const response = await axios.post(`${API_URL}`, product);
  return response.data;
};

export const updateMatchaProduct = async (id, product) => {
  const response = await axios.patch(`${API_URL}/${id}`, product);
  return response.data;
};

export const deleteMatchaProduct = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
