import api from './api';

export const product = {
  get: async (id = '') => await api.get(`/api/v2/storefront/products/${id}`),
};
