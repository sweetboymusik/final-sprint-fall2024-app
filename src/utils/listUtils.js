import _ from "lodash";

export const getHeaders = (list) => {
  const headers = list
    .flatMap((item) => Object.keys(item))
    .reduce((acc, key) => {
      key === "id" ? (key = _.toUpper(key)) : (key = _.startCase(key));
      acc[key] = key;
      return acc;
    }, {});

  headers["Actions"] = "Actions";

  return headers;
};
