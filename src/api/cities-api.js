import axios from "axios";

export const fetchAllCities = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/city/all`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching cites:", error);
    throw error;
  }
};

export const updateCity = async (city, isNewCity) => {
  try {
    const url = isNewCity
      ? `${process.env.REACT_APP_API_URL}/city`
      : `${process.env.REACT_APP_API_URL}/city/id/${city.id}`;

    const method = isNewCity ? "post" : "put";

    const response = await axios({
      method,
      url,
      data: city,
    });

    return response.data;
  } catch (error) {
    console.error(
      isNewCity ? "Error creating city:" : "Error updating city:",
      error
    );
    throw error;
  }
};
