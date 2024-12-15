import axios from "axios";

export const fetchAllAirports = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/airport/all`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching airports:", error);
    throw error;
  }
};

export const fetchAirportById = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/airport/id/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching airport:", error);
    throw error;
  }
};

export const updateAirport = async (airport, isNewAirport) => {
  try {
    const url = isNewAirport
      ? `${process.env.REACT_APP_API_URL}/airport`
      : `${process.env.REACT_APP_API_URL}/airport/id/${airport.id}`;

    const method = isNewAirport ? "post" : "patch";

    const response = await axios({
      method,
      url,
      data: airport,
    });

    return response.data;
  } catch (error) {
    console.error(
      isNewAirport ? "Error creating airport:" : "Error updating airport:",
      error
    );
    throw error;
  }
};

export const fetchGatesByAirportId = async (airportId) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/airport/${airportId}/gates`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching gates for airport:", error);
    throw error;
  }
};
