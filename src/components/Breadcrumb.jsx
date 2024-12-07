import React from "react";
import { useLocation, Link } from "react-router-dom";
import _ from "lodash";

const Breadcrumb = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  console.log(pathSegments);

  return (
    <nav>
      <ol className="flex gap-6">
        <li>
          <Link to="/">Home</Link>
        </li>

        {pathSegments.map((segment, index) => {
          const path = "/" + pathSegments.slice(0, index + 1).join("/");

          // Check if it's the last segment
          const isLast = index === pathSegments.length - 1;

          return (
            <li
              key={path}
              className={`breadcrumb-item ${isLast ? "active" : ""}`}
              aria-current={isLast ? "page" : undefined}
            >
              {isLast ? (
                _.startCase(segment.replace(/-/g, " "))
              ) : (
                <Link to={path}>{_.startCase(segment.replace(/-/g, " "))}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
