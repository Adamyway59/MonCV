import "./style.css";
import RectangleBleu from "@/assets/Rectangle-blue.png";

/* eslint-disable react/prop-types */
function RightSideItemTitles(props) {
  const title = props.title;
  return (
    <div className="div1">
      <h2>{title}</h2>
      <img
        className="blue-bar"
        src={RectangleBleu}
        alt="rectangle-bleu-sousletitre"
      />
    </div>
  );
}

export default RightSideItemTitles;
