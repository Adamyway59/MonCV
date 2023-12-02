import IUTTC from "@/assets/iuttc.jpeg";
import IAE from "@/assets/iae.jpg";
import STUDI from "@/assets/studi.jpg";
import "./style.css";

const education = [
  {
    year: "2022 - 2024",
    company: STUDI,
    school_name: "Studi - Home digital School",
    subtitle: "Front End Developer in learning",
    content:
      "Discovering and learning the developer's job. Fascinated by all the possibilities that technology can give. Building small projects using HTML, CSS, JS and React. Making this course aside of my job and my family life.",
  },
  {
    year: "2011 - 2013",
    company: IAE,
    school_name: "IAE Lille",
    subtitle: "Bachelor in Business Marketing",
    content:
      "Mastering art of selling in mass-market retailing business, getting my first job as a student. I worked as an intern in Auchan for the supply chain in the clothing department.",
  },
  {
    year: "2009 - 2011",
    company: IUTTC,
    school_name: "IUT Valenciennes",
    subtitle: "2 years of College",
    content:
      "Discovering the selling world with trainees in retail shops. Also, creating my first association called : Juke That Party. This association was created for promoting electro & techno artists in north of France. As the president, I defined the project base-line during these 2 years.",
  },
];

function EducationItems() {
  const listEducation = education.map((item) => (
    <>
      <div key={item.id} className="right-side-item-container">
        <div className="left_part">
          <h3 className="year_">{item.year}</h3>
          <img className="company" src={item.company} alt="company_or_school" />
        </div>
        <div className="right_part">
          <h3>{item.school_name}</h3>
          <h4 className="degree_name">{item.subtitle}</h4>
          <p>{item.content}</p>
        </div>
      </div>
    </>
  ));
  return listEducation;
}

export default EducationItems;
