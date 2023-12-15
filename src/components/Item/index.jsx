/* eslint-disable react/prop-types */
function Item({ logo, text }) {
  return (
    <div>
      <div className="item">
        <img className="item_logo" src={logo} />
        <span>{text}</span>
      </div>
    </div>
  );
}

export default Item;
