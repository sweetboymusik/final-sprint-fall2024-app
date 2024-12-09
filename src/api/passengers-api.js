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

export const updatePassenger = async (passenger, isNewPassenger) => {
  try {
    const url = isNewPassenger
      ? `${process.env.REACT_APP_API_URL}/passenger`
      : `${process.env.REACT_APP_API_URL}/passenger/id/${passenger.id}`;

    const method = isNewPassenger ? "post" : "patch";

    const response = await axios({
      method,
      url,
      data: passenger,
    });

    return response.data;
  } catch (error) {
    console.error(
      isNewPassenger
        ? "Error creating passenger:"
        : "Error updating passenger:",
      error
    );
    throw error;
  }
};
