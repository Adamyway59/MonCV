import "./App.css";
import AdamPicture from "@/assets/adam_pic.jpg";
import LeftSideHeader from "@/components/LeftSideHeader";
import PersonalInformation from "@/components/PersonalInformation";
import ItemsLists from "@/components/ItemList/itemsLists";
import LinkedItems from "@/components/LinkedItem";
import LearningItemsList from "@/components/MapedItems/learningItems";
import Family from "@/assets/family.png";
import VideoGame from "@/assets/videogame.png";
import Code from "@/assets/code.png";
import CryptoFinance from "@/assets/crypto.png";
import Dj from "@/assets/dj.png";
import ReactLogo from "@/assets/react.png";
import JavaScript from "@/assets/js.png";
import Css from "@/assets/css3.png";
import Html from "@/assets/html5.png";
import AFBK from "@/assets/afbk.png";
import DECATHLON from "@/assets/decathlon.jpg";
import AMAZON from "@/assets/amz.png";
import IUTTC from "@/assets/iuttc.jpeg";
import IAE from "@/assets/iae.jpg";
import STUDI from "@/assets/studi.jpg";

const skills = [
  {
    name: "Html 5",
    logo: Html,
  },
  {
    name: "Css 3",
    logo: Css,
  },
  {
    name: "Javascript",
    logo: JavaScript,
  },
  {
    name: "React",
    logo: ReactLogo,
  },
];

const hobbies = [
  {
    hobbie: "Family Time",
    logo: Family,
  },
  {
    hobbie: "Video Games",
    logo: VideoGame,
  },
  {
    hobbie: "Code",
    logo: Code,
  },
  {
    hobbie: "Crypto",
    logo: CryptoFinance,
  },
  {
    hobbie: "DJ",
    logo: Dj,
  },
];

const experiences = [
  {
    id: "decathlon",
    year: "2011 - Now",
    company: DECATHLON,
    company_name: "Decathlon Aulnoy Lez Valenciennes",
    subtitle: "My first, and actual job.",
    content:
      "Salesman, expert in rackets' sports. Supply support & IT Leader for the store. I'm in charge of the budget concerning IT services in store (Mobile phones, IT infrastructure and cashtills)",
  },
  {
    id: "afbk",
    year: "2013 - Now",
    company: AFBK,
    company_name: "DJ and CEO at AFBK",
    subtitle: "Monetizing my passion",
    content:
      "DJ for clubs, bars and private parties like wedding and birthdays. Instead of getting drunk in party, I make money during those.",
  },
  {
    id: "amazon",
    year: "2018-2019",
    company: AMAZON,
    company_name: "Selling on Amazon - FBA",
    subtitle: "Arbitrage on internet",
    content:
      "Sourcing, finding, packing and selling products on Amazon using FBA method. Used profitwolf as a tool, finding profitable product. Made a benefit of 2000€ this year",
  },
];

const education = [
  {
    id: "studi",
    year: "2022 - 2024",
    school: STUDI,
    school_name: "Studi - Home digital School",
    subtitle: "Front End Developer in learning",
    content:
      "Discovering and learning the developer's job. Fascinated by all the possibilities that technology can give. Building small projects using HTML, CSS, JS and React. Making this course aside of my job and my family life.",
  },
  {
    id: "iae_de_lille",
    year: "2011 - 2013",
    school: IAE,
    school_name: "IAE Lille",
    subtitle: "Bachelor in Business Marketing",
    content:
      "Mastering art of selling in mass-market retailing business, getting my first job as a student. I worked as an intern in Auchan for the supply chain in the clothing department.",
  },
  {
    id: "iut_tc_vals",
    year: "2009 - 2011",
    school: IUTTC,
    school_name: "IUT Valenciennes",
    subtitle: "2 years of College",
    content:
      "Learning selling methods with trainees in retail shops such as Decathlon and Auchan. Also, creating my first association called : Juke That Party. This association was created for promoting electro & techno artists in north of France. As the president, I defined the project base-line during these 2 years.",
  },
];

function App() {
  return (
    <div className="wrapper">
      <div className="left_wrapper">
        <LeftSideHeader
          picture={AdamPicture}
          candidateName="Adam Froissart"
          job="Open for an internship or a job in front-end developement."
        />
        <PersonalInformation
          placeOfBirth="Saint-Saulve, France"
          dateOfBirth="December 2nd 1992"
          phoneNumber="+33669337967"
          email="adam.froissart264@gmail.com"
          livingPlace="Onnaing, France"
        />
        <ItemsLists title="Skills" items={skills} />
        <ItemsLists title="Hobbies" items={hobbies} />
        <h3 className="link-title">Links</h3>
        <div className="link-wrapper">
          <LinkedItems />
        </div>
      </div>
      <div className="right_wrapper">
        <LearningItemsList title="Education" datas={education} />
        <LearningItemsList title="Experiences" datas={experiences} />
      </div>
    </div>
  );
}

export default App;
