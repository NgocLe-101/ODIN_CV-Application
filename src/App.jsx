import { useState } from "react";
import "./App.css";
import LivePreviewPanel from "./Components/LivePreviewPanel";
// import PersonalInfoPanel from "./Components/PersonalInfoPanel";
import {
  PersonalInfoPanel,
  EducationInfoPanel,
  ExperienceInfoPanel,
} from "./Components/InputPanel";

function idToKey(id) {
  return id
    .split("-")
    .reduce((prev, curr) => prev + curr[0].toUpperCase() + curr.slice(1));
}

function cleanInfo(info) {
  return Object.keys(info).reduce((acc, key) => {
    return { ...acc, [idToKey(key)]: info[key] };
  }, {});
}

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "John Doe",
    email: "johndoe@mail.uk.com",
    tel: "123456789",
    location: "London, UK",
  });
  const [educationInfoList, setEducationInfoList] = useState([
    {
      school: "University of London",
      location: "London, UK",
      fieldOfStudy: "Computer Science",
      specialisation: "Software Engineering",
      from: "2010",
      to: "2014",
      grade: "3.8",
    },
  ]);
  const [experienceInfoList, setExperienceInfoList] = useState([
    {
      companyName: "Google",
      location: "Mountain View, CA",
      jobTitle: "Software Engineer",
      from: "2014",
      to: "2016",
      description: "Worked on the Google search engine project.",
    },
  ]);
  const handlePersonalInfoChange = () => {
    const panel = document.querySelector(".panel.personal-details");
    const newPersonalInfo = {
      name: panel.querySelector("#name input").value,
      email: panel.querySelector("#email input").value,
      tel: panel.querySelector("#phone input").value,
      location: panel.querySelector("#location input").value,
    };
    console.log(panel);
    setPersonalInfo(newPersonalInfo);
  };
  const handleEducationListChange = (newEducationInfoList) => {
    setEducationInfoList(newEducationInfoList.map((item) => cleanInfo(item)));
  };
  const handleExperienceListChange = (newExperienceInfoList) => {
    setExperienceInfoList(newExperienceInfoList.map((item) => cleanInfo(item)));
  };
  return (
    <div className="container">
      <div className="edit-section section">
        <PersonalInfoPanel updateUI={handlePersonalInfoChange} />
        <EducationInfoPanel updateUI={handleEducationListChange} />
        <ExperienceInfoPanel updateUI={handleExperienceListChange} />
      </div>
      <div className="live-preview-section section">
        <LivePreviewPanel
          personalInfo={personalInfo}
          educationInfoList={educationInfoList}
          experienceInfoList={experienceInfoList}
        />
      </div>
    </div>
  );
}

export default App;
