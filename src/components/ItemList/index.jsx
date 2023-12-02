/* eslint-disable react/prop-types */
import "./style.css";
import Item from "@/components/Item";
import ReactLogo from "@/assets/react.png";
import JavaScript from "@/assets/js.png";
import Css from "@/assets/css3.png";
import Html from "@/assets/html5.png";
import Family from "@/assets/family.png";
import VideoGame from "@/assets/videogame.png";
import Code from "@/assets/code.png";
import CryptoFinance from "@/assets/crypto.png";
import Dj from "@/assets/dj.png";

function ItemList(props) {
  const title = props.title;
  const skills = ["Html", "Css 3", "Javascript", "React"];
  const hobbies = [
    "Family Time",
    "Video Games",
    "Code",
    "Crypto Finance",
    "DJ",
  ];
  if (title === "Skills") {
    return (
      <div className="item-list-wrapper">
        <div className="title-item-list">
          <h3>{title}</h3>
        </div>
        <div className={`${title}-item-list`}>
          <Item logo={Html} text={skills[0]} />
          <Item logo={Css} text={skills[1]} />
          <Item logo={JavaScript} text={skills[2]} />
          <Item logo={ReactLogo} text={skills[3]} />
        </div>
      </div>
    );
  } else if (title === "Hobbies") {
    return (
      <div className="item-list-wrapper">
        <div className="title-item-list">
          <h3>{title}</h3>
        </div>
        <div className={`${title}-item-list`}>
          <Item logo={Family} text={hobbies[0]} />
          <Item logo={VideoGame} text={hobbies[1]} />
          <Item logo={Code} text={hobbies[2]} />
          <Item logo={CryptoFinance} text={hobbies[3]} />
          <Item logo={Dj} text={hobbies[4]} />
        </div>
      </div>
    );
  }
}

export default ItemList;
