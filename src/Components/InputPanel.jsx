import TextInput from "./TextInput";
import PropTypes from "prop-types";
import StackingInfoPanel from "./StackingInfoPanel";

function TextInputPanel({ panelName, moduleList, handleOnSave }) {
  return (
    <div
      className={`panel ${panelName.toLowerCase().split(" ").join("-")}`}
      key={panelName.toLowerCase().split(" ").join("-")}
    >
      <h2>{panelName}</h2>
      {moduleList.map((module) => {
        return <TextInput id={module.id} key={module.id} {...module} />;
      })}
      <button onClick={handleOnSave}>Save</button>
    </div>
  );
}

TextInputPanel.propTypes = {
  panelName: PropTypes.string.isRequired,
  moduleList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
    })
  ).isRequired,
  handleOnSave: PropTypes.func,
  handleOnEdit: PropTypes.func,
};

function PersonalInfoPanel({ updateUI }) {
  const moduleList = [
    {
      id: "name",
      title: "Name",
      placeholder: "John Doe",
    },
    {
      id: "email",
      title: "Email",
      placeholder: "example@mail.com",
    },
    {
      id: "phone",
      title: "Phone",
      placeholder: "123456789",
    },
    {
      id: "location",
      title: "Location",
      placeholder: "London, UK",
    },
  ];
  return (
    <TextInputPanel
      panelName={"Personal Details"}
      moduleList={moduleList}
      handleOnSave={updateUI}
    />
  );
}

function EducationInfoPanel({ updateUI }) {
  const moduleList = [
    {
      id: "school",
      title: "School",
      placeholder: "London City University",
      isRequired: true,
    },
    {
      id: "location",
      title: "Location",
      placeholder: "London, UK",
    },
    {
      id: "field-of-study",
      title: "Field of Study",
      placeholder: "Field of study",
    },
    {
      id: "specialisation",
      title: "Specialisation",
      placeholder: "Field of study specialisation",
    },
    {
      id: "from",
      title: "From",
      placeholder: "01/01/2024",
    },
    {
      id: "to",
      title: "To",
      placeholder: "present",
    },
    {
      id: "grade",
      title: "Grade",
      placeholder: "Grade",
    },
  ];
  return (
    <StackingInfoPanel
      sectionName={"Education"}
      moduleList={moduleList}
      updateUI={updateUI}
    />
  );
}

function ExperienceInfoPanel({ updateUI }) {
  const moduleList = [
    {
      id: "company-name",
      title: "Company Name",
      placeholder: "Black Mesa Labs",
      isRequired: true,
    },
    {
      id: "job-title",
      title: "Job title",
      placeholder: "Job title",
    },
    {
      id: "from",
      title: "From",
      placeholder: "01/01/2024",
    },
    {
      id: "to",
      title: "To",
      placeholder: "present",
    },
    {
      id: "location",
      title: "Location",
      placeholder: "Location",
    },
  ];
  return (
    <StackingInfoPanel
      sectionName={"Experience"}
      moduleList={moduleList}
      updateUI={updateUI}
    />
  );
}

export {
  PersonalInfoPanel,
  EducationInfoPanel,
  ExperienceInfoPanel,
  TextInputPanel,
};
