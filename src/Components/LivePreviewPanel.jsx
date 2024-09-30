import emailIcon from "../assets/email.svg";
import telIcon from "../assets/tel.svg";
import locationIcon from "../assets/location.svg";
import "../styles/LivePreview.css";

function HeaderInfoModule({ iconSrc, value }) {
  return (
    <div className="header-info-module">
      <img src={iconSrc} alt="/" />
      <span>{value}</span>
    </div>
  );
}

function Header({ name, email, tel, location }) {
  return (
    <div className="header">
      <span className="header-name">{name}</span>
      <div className="info-container">
        {email && <HeaderInfoModule iconSrc={emailIcon} value={email} />}
        {tel && <HeaderInfoModule iconSrc={telIcon} value={tel} />}
        {location && (
          <HeaderInfoModule iconSrc={locationIcon} value={location} />
        )}
      </div>
    </div>
  );
}

function BodySection({
  sectionTitle,
  duration,
  location,
  mainTitle,
  subTitle,
  desciption,
}) {
  return (
    <div className="section">
      <div className="title">{sectionTitle}</div>
      <div className="body">
        <div className="left">
          <p>{duration}</p>
          <p>{location}</p>
        </div>

        <div className="right">
          <p className="main-title">{mainTitle}</p>
          <p className="sub-title">{subTitle}</p>
          <p className="description">{desciption}</p>
        </div>
      </div>
    </div>
  );
}

function EducationListItem({ educationInfo }) {
  return (
    <div className="list-item education-list-item">
      <p className="field-of-study">
        <strong>{educationInfo.fieldOfStudy}</strong> - Specialisation in the
        field of {educationInfo.specialisation}
      </p>
      <p className="school">
        {educationInfo.school}, {educationInfo.location}
      </p>
      <div className="time-grade">
        <p className="duration">
          {educationInfo.from} - {educationInfo.to}
        </p>
        <p className="grade">{educationInfo.grade}</p>
      </div>
    </div>
  );
}

function EducationSection({ educationInfoList }) {
  return (
    <div className="section education">
      <h2 className="title">EDUCATION</h2>
      <div className="body">
        {educationInfoList.map((info) => {
          return <EducationListItem key={info.school} educationInfo={info} />;
        })}
      </div>
    </div>
  );
}

function ExperienceListItem({ experienceInfo }) {
  return (
    <div className="list-item experience-list-item">
      <h3 className="company-name left">{experienceInfo.companyName}</h3>
      <p className="duration right">
        {experienceInfo.from} - {experienceInfo.to}
      </p>
      <p className="job-title left">{experienceInfo.jobTitle}</p>
      <p className="location right">{experienceInfo.location}</p>
    </div>
  );
}

function ExperienceSection({ experienceInfoList }) {
  return (
    <div className="section experience">
      <h2 className="title">WORK EXPERIENCE</h2>
      <div className="body">
        {experienceInfoList.map((info) => {
          return (
            <ExperienceListItem key={info.companyName} experienceInfo={info} />
          );
        })}
      </div>
    </div>
  );
}

// function Body({ sections }) {
//   return (
//     <div className="body">
//       {sections.map((section) => {
//         return <BodySection key={section.sectionTitle} {...section} />;
//       })}
//     </div>
//   );
// }

function LivePreviewPanel({
  personalInfo,
  educationInfoList,
  experienceInfoList,
}) {
  return (
    <div className="live-preview-panel">
      <Header {...personalInfo} />
      <div className="body">
        <EducationSection educationInfoList={educationInfoList} />
        <ExperienceSection experienceInfoList={experienceInfoList} />
      </div>
    </div>
  );
}

export default LivePreviewPanel;
