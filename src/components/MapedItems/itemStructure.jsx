/* eslint-disable react/prop-types */
function ItemStructure({ year, company, company_name, subtitle, content }) {
  return (
    <div className="right-side-item-container">
      <div className="left_part">
        <h3 className="year_">{year}</h3>
        <img className="company" src={company} alt="company_or_school" />
      </div>
      <div className="right_part">
        <h3>{company_name}</h3>
        <h4 className="degree_name">{subtitle}</h4>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default ItemStructure;
