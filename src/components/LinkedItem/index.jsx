/* eslint-disable react/prop-types */
import INSTAGRAM from "@/assets/insta.png";
import FACEBOOK from "@/assets/fb.png";
import LINKEDIN from "@/assets/linkedin.png";
import AFBK from "@/assets/afbk.png";
import "./style.css";

const links = [
  {
    link: "https://www.instagram.com/afbk_sono/",
    logo: INSTAGRAM,
    text: "Instagram",
  },
  {
    link: "https://www.facebook.com/profile.php?id=100082666353721",
    logo: FACEBOOK,
    text: "Facebook",
  },
  {
    link: "https://www.linkedin.com/in/adam-froissart/",
    logo: LINKEDIN,
    text: "Linkedin",
  },
  {
    link: "https://www.afbk.fr",
    logo: AFBK,
    text: "AFBK",
  },
];
function LinkedItems() {
  const linkedList = links.map((item) => (
    <div key={item.id} className="linked-item">
      <a href={item.link} target="_blank" rel="noreferrer">
        <img className="linked-item-logo" src={item.logo} />
      </a>
      <span>{item.text}</span>
    </div>
  ));
  return linkedList;
}

export default LinkedItems;
