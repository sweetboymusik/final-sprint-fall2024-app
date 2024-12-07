import _ from "lodash";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { fetchDynamicName } from "../utils/dynamicNameUtil";

const Breadcrumb = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const [routeNames, setRouteNames] = useState({});

  console.log(pathSegments);

  useEffect(() => {
    const fetchNames = async () => {
      const names = {};

      for (const [index, segment] of pathSegments.entries()) {
        const path = "/" + pathSegments.slice(0, index + 1).join("/");
        const routePrefix = `/${pathSegments[0]}/`;

        // Fetch the name dynamically
        const name = await fetchDynamicName(segment, routePrefix);
        console.log(name);
        names[path] = name;
      }

      // Only update state if names have changed
      setRouteNames((prevNames) =>
        JSON.stringify(prevNames) === JSON.stringify(names) ? prevNames : names
      );
    };

    fetchNames();
  }, [pathSegments]);

  console.log(routeNames);

  return (
    <nav>
      <ol className="flex gap-4">
        {pathSegments.length !== 0 && (
          <li>
            <Link to="/">Home</Link>
          </li>
        )}

        {pathSegments.length !== 0 ? <span>{">"}</span> : ""}

        {pathSegments.map((segment, index) => {
          const path = "/" + pathSegments.slice(0, index + 1).join("/");
          const isLast = index === pathSegments.length - 1;
          const displayName = routeNames[path] || _.startCase(segment);

          return (
            <li
              key={path}
              className={`breadcrumb-item ${isLast ? "active" : ""}`}
            >
              {isLast ? (
                displayName
              ) : (
                <div className="flex gap-4">
                  <Link to={path}>{displayName}</Link>
                  <span>{">"}</span>
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
