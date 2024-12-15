import { FaEye, FaPenToSquare, FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";

const renderValue = (value) => {
  if (typeof value === "string" && value.includes("|")) {
    const parts = value.split("|");
    return (
      <div className="flex flex-col">
        {parts.map((part, index) => (
          <span key={index}>{part}</span>
        ))}
      </div>
    );
  }

  if (Array.isArray(value)) {
    return (
      <div className="flex flex-col gap-2">
        {value.map((item, index) => (
          <div key={index} className="flex flex-col">
            {renderValue(
              Object.fromEntries(
                Object.entries(item).filter(
                  ([key]) => key !== "id" && key !== "numberOfPassengers"
                )
              )
            )}
            {index < value.length - 1 && (
              <hr className="border-t border-primary-2 my-2" />
            )}
          </div>
        ))}
      </div>
    );
  }

  if (typeof value === "object" && value !== null) {
    const keys = Object.keys(value).filter(
      (key) => key !== "id" && key !== "numberOfPassengers"
    );
    return (
      <div className="flex flex-col gap-2">
        {keys.map((key) => (
          <div key={key} className="flex">
            <span>{renderValue(value[key])}</span>{" "}
          </div>
        ))}
      </div>
    );
  }

  return <span>{String(value)}</span>;
};

const ListItem = ({ item, heading, url, onRemove, action = true }) => {
  if (!item || typeof item !== "object") {
    return null;
  }

  return (
    <div
      className={`flex border-t border-primary-200 p-2 items-center ${
        heading
          ? "font-bold text-white text-lg bg-primary-800 border-none hover:bg-none"
          : "hover:bg-primary-100"
      }`}
    >
      <div className="w-32 flex-shrink-0">{renderValue(item.id)}</div>

      {Object.keys(item)
        .filter((key) => key !== "id" && key !== "numberOfPassengers")
        .map((key) => (
          <div key={key} className="flex-1 flex flex-col gap-10">
            {renderValue(item[key])}
          </div>
        ))}

      {action && (
        <div className="w-32 flex-shrink-0 flex gap-2 justify-center">
          {!heading ? (
            <>
              {onRemove ? (
                <button
                  type="button"
                  onClick={() => onRemove(item?.id)}
                  className="text-red-500"
                >
                  <FaTrash />
                </button>
              ) : (
                <>
                  <Link to={url + "/" + item.id + "/edit"}>
                    <FaPenToSquare />
                  </Link>
                  <Link to={url + "/" + item.id}>
                    <FaEye />
                  </Link>
                </>
              )}
            </>
          ) : (
            "Actions"
          )}
        </div>
      )}
    </div>
  );
};

export default ListItem;
