import "./style.css";

function RightSideItem(props) {
  // eslint-disable-next-line react/prop-types
  const { subtitle, company, name, year, content } = props;
  return (
    <div className="right-side-item-container">
      <div className="div2">
        <h3 className="year_">{year}</h3>
        <img className="company" src={company} alt="company_or_school" />
      </div>
      <div className="div3">
        <h3>{name}</h3>
        <h4 className="degree_name">{subtitle}</h4>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default RightSideItem;
