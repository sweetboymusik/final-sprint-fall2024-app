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

export const fetchFlightById = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/flight/id/${id}`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching flight:", error);
    throw error;
  }
};

export const updateFlight = async (flight, isNewFlight) => {
  try {
    const url = isNewFlight
      ? `${process.env.REACT_APP_API_URL}/flight`
      : `${process.env.REACT_APP_API_URL}/flight/id/${flight.id}`;

    const method = isNewFlight ? "post" : "patch";

    const response = await axios({
      method,
      url,
      data: flight,
    });

    return response.data;
  } catch (error) {
    console.error(
      isNewFlight ? "Error creating flight:" : "Error updating flight:",
      error
    );
    throw error;
  }
};

export const addPassengerToFlight = async (flightId, passengerId) => {
  try {
    const url = `${process.env.REACT_APP_API_URL}/flight/id/${flightId}/passengers/add/${passengerId}`;

    const response = await axios({
      method: "post",
      url,
    });

    return response.data;
  } catch (error) {
    console.error(
      `Error adding passenger with ID ${passengerId} to flight with ID ${flightId}:`,
      error
    );
    throw error;
  }
};
