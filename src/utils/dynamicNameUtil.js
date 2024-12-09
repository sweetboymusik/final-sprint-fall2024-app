import _ from "lodash";
import { fetchCityById } from "../api/cities-api";
import { fetchAirportById } from "../api/airports-api";
import { fetchAirlineById } from "../api/airlines-api";
import { fetchAircraftById } from "../api/aircraft-api";
import { fetchPassengerById } from "../api/passengers-api";

export const fetchDynamicName = async (segment, routePrefix) => {
  let response;
  console.log(segment);

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
      response = await fetchAirportById(segment);
      return response.name;
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
      response = await fetchAircraftById(segment);
      return "#" + response.id;
    default:
      break;
  }

  return _.startCase(segment.replace(/-/g, " "));
};
