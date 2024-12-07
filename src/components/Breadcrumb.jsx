import _ from "lodash";
import { useLocation, Link } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  return (
    <nav>
      <ol className="flex gap-4">
        {pathSegments.length !== 0 ? (
          <li>
            <Link to="/">Home</Link>
          </li>
        ) : (
          ""
        )}

        {pathSegments.length !== 0 ? <span>{">"}</span> : ""}

        {pathSegments.map((segment, index) => {
          const path = "/" + pathSegments.slice(0, index + 1).join("/");
          const isLast = index === pathSegments.length - 1;

          return (
            <li
              key={path}
              className={`breadcrumb-item ${isLast ? "active" : ""}`}
            >
              {isLast ? (
                _.startCase(segment.replace(/-/g, " "))
              ) : (
                <div className="flex gap-4">
                  <Link to={path}>
                    {_.startCase(segment.replace(/-/g, " "))}
                  </Link>
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
