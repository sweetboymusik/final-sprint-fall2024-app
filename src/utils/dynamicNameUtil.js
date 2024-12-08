import _ from "lodash";
import { fetchCityById } from "../api/cities-api";
import { fetchAirportById } from "../api/airports-api";
import { fetchAirlineById } from "../api/airlines-api";
import { fetchAircraftById } from "../api/aircraft-api";

export const fetchDynamicName = async (segment, routePrefix) => {
  let response;

  switch (routePrefix) {
    case "/cities/":
      if (segment === "cities") return "Cities";
      response = await fetchCityById(segment);
      return response.name;
    case "/airports/":
      if (segment === "airports") return "Airports";
      response = await fetchAirportById(segment);
      return response.name;
    case "/airlines/":
      if (segment === "airlines") return "Airlines";
      response = await fetchAirlineById(segment);
      return response.name;
    case "/aircraft/":
      if (segment === "aircraft") return "Aircraft";
      response = await fetchAircraftById(segment);
      return response.type;
    default:
      break;
  }

  return _.startCase(segment.replace(/-/g, " "));
};
