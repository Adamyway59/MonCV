import AFBK from "@/assets/afbk.png";
import DECATHLON from "@/assets/decathlon.jpg";
import AMAZON from "@/assets/amz.png";
import "./style.css";

const experiences = [
  {
    year: "2011 - Now",
    company: DECATHLON,
    company_name: "Decathlon Aulnoy Lez Valenciennes",
    subtitle: "My first, and actual job.",
    content:
      "Salesman, expert in rackets' sports. Supply support & IT Leader for the store. I'm in charge of the budget concerning IT services in store (Mobile phones, IT infrastructure and cashtills)",
  },
  {
    year: "2013 - Now",
    company: AFBK,
    company_name: "DJ and CEO at AFBK",
    subtitle: "Monetizing my passion",
    content:
      "DJ for clubs, bars and private parties like wedding and birthdays. Instead of getting drunk in party, I make money during those.",
  },
  {
    year: "2018-2019",
    company: AMAZON,
    company_name: "Selling on Amazon - FBA",
    subtitle: "Arbitrage on internet",
    content:
      "Sourcing, finding, packing and selling products on Amazon using FBA method. Used profitwolf as a tool, finding profitable product. Made a benefit of 2000€ this year",
  },
];

function ExperiencesItems() {
  const experiencesList = experiences.map((item) => (
    <div key={item.id} className="right-side-item-container">
      <div className="left_part">
        <h3 className="year_">{item.year}</h3>
        <img className="company" src={item.company} alt="company_or_school" />
      </div>
      <div className="right_part">
        <h3>{item.company_name}</h3>
        <h4 className="degree_name">{item.subtitle}</h4>
        <p>{item.content}</p>
      </div>
    </div>
  ));
  return experiencesList;
}

export default ExperiencesItems;
