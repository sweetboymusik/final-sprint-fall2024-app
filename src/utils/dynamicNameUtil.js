import _ from "lodash";
import { fetchCityById } from "../api/cities-api";

export const fetchDynamicName = async (segment, routePrefix) => {
  let response;

  console.log("Prefix:", routePrefix);
  console.log("Segment:", segment);

  switch (routePrefix) {
    case "/cities/":
      if (segment === "cities") return "Cities";
      response = await fetchCityById(segment);
      console.log(response.name);
      return response.name;
    default:
      break;
  }

  return _.startCase(segment.replace(/-/g, " "));
};
