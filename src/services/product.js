import api from './api';

export const product = {
  get: async () => await api.get('/api/v2/storefront/products'),
};
