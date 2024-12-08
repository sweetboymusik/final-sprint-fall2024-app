import axios from "axios";

export const fetchAllPassengers = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/passenger/all`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching passengers:", error);
    throw error;
  }
};

export const fetchPassengerById = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/passenger/id/${id}`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching passenger:", error);
    throw error;
  }
};
