import _ from "lodash";

export const getHeaders = (list) => {
  if (!list || list.length === 0) return {};

  const headers = list
    .flatMap((item) => Object.keys(item))
    .reduce((acc, key) => {
      const transformedKey = key === "id" ? _.toUpper(key) : _.startCase(key);
      acc[key] = transformedKey;
      return acc;
    }, {});

  return headers;
};
