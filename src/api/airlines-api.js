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

export const fetchAirlineById = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/airline/id/${id}`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching airline:", error);
    throw error;
  }
};

export const updateAirline = async (airline, isNewAirline) => {
  try {
    const url = isNewAirline
      ? `${process.env.REACT_APP_API_URL}/airline`
      : `${process.env.REACT_APP_API_URL}/airline/id/${airline.id}`;

    const method = isNewAirline ? "post" : "patch";

    const response = await axios({
      method,
      url,
      data: airline,
    });

    return response.data;
  } catch (error) {
    console.error(
      isNewAirline ? "Error creating airline:" : "Error updating airline:",
      error
    );
    throw error;
  }
};
