import axios from 'axios';

// Base Axios instance
export const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Contact API
export const contactApi = {
  submitContactForm: async (data: {
    name: string;
    email: string;
    phone: string;
    service?: string;
    message: string;
  }) => {
    const response = await api.post('/contact', data);
    return response.data;
  },
};

// Portfolio API
export const portfolioApi = {
  getPortfolioItems: async (category?: string) => {
    const params = category ? { category } : {};
    const response = await api.get('/portfolio', { params });
    return response.data;
  },
  getPortfolioItem: async (id: number) => {
    const response = await api.get(`/portfolio/${id}`);
    return response.data;
  },
};

// Reviews API
export const reviewsApi = {
  getReviews: async (page: number = 1, perPage: number = 9) => {
    const response = await api.get('/reviews', {
      params: { page, per_page: perPage },
    });
    return response.data;
  },
  submitReview: async (data: {
    name: string;
    rating: number;
    comment: string;
    service: string;
  }) => {
    const response = await api.post('/reviews', data);
    return response.data;
  },
};

// Services API
export const servicesApi = {
  getServices: async () => {
    const response = await api.get('/services');
    return response.data;
  },
  getService: async (id: number) => {
    const response = await api.get(`/services/${id}`);
    return response.data;
  },
};