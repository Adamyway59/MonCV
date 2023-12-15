/* eslint-disable react/prop-types */
import "./style.css";
import Item from "@/components/Item";

function ItemsLists({ title, items }) {
  const itemsListsList = (
    <div className="item-list-wrapper">
      <h3>{title}</h3>
      <div className={`${title.toLowerCase()}-item-list`}>
        {items.map((element) => (
          <Item
            key={element.id}
            logo={element.logo}
            text={element.name || element.hobbie}
          />
        ))}
      </div>
    </div>
  );
  return itemsListsList;
}

export default ItemsLists;
