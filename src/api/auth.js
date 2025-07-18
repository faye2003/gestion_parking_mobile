import apiClient from './env';

export const register = async (data) => {
  return apiClient.post('auth/register/', data);
};

export const login = async (data) => {
  return apiClient.post('auth/login/', data);
};
