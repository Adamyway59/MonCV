import "./App.css";
import AdamPicture from "@/assets/adam_pic.jpg";
import LeftSideHeader from "@/components/LeftSideHeader";
import PersonalInformation from "@/components/PersonalInformation";
import ItemList from "@/components/ItemList";
import LinkedItems from "@/components/LinkedItem";
import RightSideItemTitles from "./components/RightSideItemTitles";
import EducationItems from "./components/MapedItems/educationItems";
import ExperiencesItems from "./components/MapedItems/experiencesItems";

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
        <ItemList title="Skills" />
        <ItemList title="Hobbies" />
        <h3 className="link-title">Links</h3>
        <div className="link-wrapper">
          <LinkedItems />
        </div>
      </div>
      <div className="right_wrapper">
        <RightSideItemTitles title="Education" />
        <EducationItems />
        <RightSideItemTitles title="Experience" />
        <ExperiencesItems />
      </div>
    </div>
  );
}

export default App;
