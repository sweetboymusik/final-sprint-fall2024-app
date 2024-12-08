import { FaEye, FaPenToSquare } from "react-icons/fa6";
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
                Object.entries(item).filter(([key]) => key !== "id")
              )
            )}
            {index < value.length - 1 && (
              <hr className="border-t border-gray-300 my-2" />
            )}
          </div>
        ))}
      </div>
    );
  }

  if (typeof value === "object" && value !== null) {
    const keys = Object.keys(value).filter((key) => key !== "id");
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

const ListItem = ({ item, heading, url }) => {
  if (!item || typeof item !== "object") {
    return null;
  }

  return (
    <div
      className={`flex border-t p-2 items-center ${
        heading
          ? "font-bold text-white text-lg bg-black border-none hover:bg-none"
          : "hover:bg-gray-50"
      }`}
    >
      <div className="w-32 flex-shrink-0">{renderValue(item.id)}</div>

      {Object.keys(item)
        .filter((key) => key !== "id")
        .map((key) => (
          <div key={key} className="flex-1 flex flex-col gap-10">
            {renderValue(item[key])}
          </div>
        ))}

      <div className="w-32 flex-shrink-0 flex gap-2 justify-center">
        {!heading ? (
          <>
            <button>
              <FaPenToSquare />
            </button>
            <Link to={url + "/" + item.id}>
              <FaEye />
            </Link>
          </>
        ) : (
          "Actions"
        )}
      </div>
    </div>
  );
};

export default ListItem;
