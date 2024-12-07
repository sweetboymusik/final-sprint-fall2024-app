import ListItem from "./ListItem";
import { getHeaders } from "../utils/listUtils";

function List({ list = [] }) {
  const headers = getHeaders(list);
  return (
    <div className="">
      <ListItem item={headers} heading={true} />

      {list.map((item, idx) => (
        <ListItem key={idx} item={item} />
      ))}
    </div>
  );
}

export default List;
