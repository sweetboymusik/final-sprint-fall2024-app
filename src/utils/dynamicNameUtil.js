import _ from "lodash";
import { fetchCityById } from "../api/cities-api";
import { fetchAirportById } from "../api/airports-api";

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
    default:
      break;
  }

  return _.startCase(segment.replace(/-/g, " "));
};
