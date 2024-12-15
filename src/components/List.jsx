import ListItem from "./ListItem";
import { getHeaders } from "../utils/listUtils";

function List({ list = [], url, onRemove = null, action = true }) {
  const headers = getHeaders(list);
  return (
    <div className="border border-primary-200 rounded overflow-clip">
      <ListItem item={headers} heading={true} action={action} />

      {list.map((item, idx) => (
        <ListItem
          key={idx}
          item={item}
          url={url}
          onRemove={onRemove}
          action={action}
        />
      ))}
    </div>
  );
}

export default List;
