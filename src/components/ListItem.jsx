import { FaPenToSquare } from "react-icons/fa6";

const renderValue = (value) => {
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
            <span>{String(value[key])}</span>
          </div>
        ))}
      </div>
    );
  }

  return <span>{String(value)}</span>;
};

const ListItem = ({ item, heading }) => {
  if (!item || typeof item !== "object") {
    return null;
  }

  return (
    <div
      className={`flex gap-6 justify-evenly border-t p-2 items-center ${
        heading ? "font-bold text-white text-lg bg-slate-500 border-none" : ""
      }`}
    >
      {Object.keys(item).map((key) => (
        <div key={key} className="flex-1 flex flex-col gap-10">
          {renderValue(item[key])}
        </div>
      ))}

      {!heading ? (
        <div className="flex-1">
          <button>
            <FaPenToSquare />
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ListItem;
