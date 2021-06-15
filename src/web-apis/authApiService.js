import axiosService from './services/axiosService';
import { API_ENDPOINT } from '../constants';

// http://localhost:8000/api/v1/auth/login
const uri = '/auth/login';

export const login = (payload) => {
    return axiosService.post(`${API_ENDPOINT}${uri}`, payload);
}