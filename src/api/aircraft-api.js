import axios from "axios";

export const fetchAllAircraft = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/aircraft/all`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching aircraft:", error);
    throw error;
  }
};

export const fetchAircraftById = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/aircraft/id/${id}`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching aircraft:", error);
    throw error;
  }
};
