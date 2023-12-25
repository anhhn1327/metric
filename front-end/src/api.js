import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

export const fetchProductDetail = async (productId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${productId}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

export const fetchRelatedProduct = async (productId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/related-products/${productId}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

export const fetchSuggestionProduct = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/suggestion-products/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/posts/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};
