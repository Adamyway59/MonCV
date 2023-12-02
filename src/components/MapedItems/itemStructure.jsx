import "./style.css";

function ItemStructure(props) {
  const { year, company, school_name, subtitle, content } = props;

  <div className="right-side-item-container">
    <div className="left_part">
      <h3 className="year_">{year}</h3>
      <img className="company" src={company} alt="company_or_school" />
    </div>
    <div className="right_part">
      <h3>{school_name}</h3>
      <h4 className="degree_name">{subtitle}</h4>
      <p>{content}</p>
    </div>
  </div>;
}

export default ItemStructure;
