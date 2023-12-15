/* eslint-disable react/prop-types */
import ItemStructure from "./itemStructure";
import RectangleBleu from "@/assets/Rectangle-blue.png";
import "./style.css";

function LearningItemsList({ title, datas }) {
  const learningItemsList = (
    <div className="div1">
      <h2>{title}</h2>
      <img
        className="blue-bar"
        src={RectangleBleu}
        alt="rectangle-bleu-sousletitre"
      />
      {datas.map((element) => (
        <ItemStructure
          key={element.id}
          year={element.year}
          company={element.company || element.school}
          company_name={element.company_name || element.school_name}
          subtitle={element.subtitle}
          content={element.content}
        />
      ))}
    </div>
  );
  return learningItemsList;
}

export default LearningItemsList;
