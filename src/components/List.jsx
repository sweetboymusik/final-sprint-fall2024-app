import ListItem from "./ListItem";
import { getHeaders } from "../utils/listUtils";

function List({ list = [], url }) {
  const headers = getHeaders(list);
  return (
    <div className="border border-primary-200 rounded overflow-clip">
      <ListItem item={headers} heading={true} />

      {list.map((item, idx) => (
        <ListItem key={idx} item={item} url={url} />
      ))}
    </div>
  );
}

export default List;
