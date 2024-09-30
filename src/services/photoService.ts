import axios from 'axios';
import { Photo } from '../interfaces/Photo';

const BASE_URL = process.env.REACT_APP_API_URL;

export const getPhotos = async (): Promise<Photo[]> => {
    try {
        const response = await axios.get<Photo[]>(`${BASE_URL}/photos`);
        return response.data;
    } catch (error) {
        console.error('Error fetching photos:', error);
        throw error;
    }
};
