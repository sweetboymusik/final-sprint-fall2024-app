import axios from "axios";

export const fetchAllCities = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/city/all`);
        return response.data;
    } catch (error) {
        console.error('Error fetching cites:', error);
        throw error;
    }
};