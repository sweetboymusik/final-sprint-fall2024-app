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

export const updateAircraft = async (aircraft, isNewAircraft) => {
  try {
    const url = isNewAircraft
      ? `${process.env.REACT_APP_API_URL}/aircraft`
      : `${process.env.REACT_APP_API_URL}/aircraft/id/${aircraft.id}`;

    const method = isNewAircraft ? "post" : "patch";

    const response = await axios({
      method,
      url,
      data: aircraft,
    });

    return response.data;
  } catch (error) {
    console.error(
      isNewAircraft ? "Error creating aircraft:" : "Error updating aircraft:",
      error
    );
    throw error;
  }
};
