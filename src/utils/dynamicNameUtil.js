import _ from "lodash";
import { fetchCityById } from "../api/cities-api";
import { fetchAirportById } from "../api/airports-api";
import { fetchAirlineById } from "../api/airlines-api";
import { fetchAircraftById } from "../api/aircraft-api";
import { fetchPassengerById } from "../api/passengers-api";
import { fetchFlightById } from "../api/flights-api";

export const fetchDynamicName = async (segment, routePrefix) => {
  let response;

  switch (routePrefix) {
    case "/cities/":
      if (segment === "cities") return "Cities";
      if (segment === "edit") return "Edit";
      if (segment === "add") return "Add";
      response = await fetchCityById(segment);
      return response.name;
    case "/airports/":
      if (segment === "airports") return "Airports";
      if (segment === "edit") return "Edit";
      if (segment === "add") return "Add";
      if (segment === "add_gates") return "Add Gates";

      if (segment && !isNaN(segment)) {
        response = await fetchAirportById(segment);
        return response.name;
      }

      return "";
    case "/airlines/":
      if (segment === "airlines") return "Airlines";
      if (segment === "edit") return "Edit";
      if (segment === "add") return "Add";
      response = await fetchAirlineById(segment);
      return response.name;
    case "/aircraft/":
      if (segment === "aircraft") return "Aircraft";
      if (segment === "edit") return "Edit";
      if (segment === "add") return "Add";
      response = await fetchAircraftById(segment);
      return response.type;
    case "/passengers/":
      if (segment === "passengers") return "Passengers";
      if (segment === "edit") return "Edit";
      if (segment === "add") return "Add";
      response = await fetchPassengerById(segment);
      return (
        response.firstName + " " + response.lastName + " (" + response.id + ")"
      );
    case "/flights/":
      if (segment === "flights") return "Flights";
      if (segment === "edit") return "Edit";
      if (segment === "add") return "Add";
      if (segment === "add_passengers") return "Add Passengers";

      if (segment && !isNaN(segment)) {
        response = await fetchFlightById(segment);
        return "#" + response.id;
      }

      return "";
    default:
      break;
  }

  return _.startCase(segment.replace(/-/g, " "));
};
