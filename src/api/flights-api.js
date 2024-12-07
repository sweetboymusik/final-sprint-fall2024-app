import axios from "axios";

export const fetchAllFlights = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/flight/all`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching flights:", error);
    throw error;
  }
};
