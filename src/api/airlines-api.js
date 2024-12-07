import axios from "axios";

export const fetchAllAirlines = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/airline/all`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching airlines:", error);
    throw error;
  }
};
