/* eslint-disable react/prop-types */
import "./style.css";

function LeftSideHeader(props) {
  const { candidateName, picture, job } = props;
  return (
    <div className="left-side-header">
      <img className="profile_picture" src={picture} alt="profile picture" />
      <h1 className="canditate_name">{candidateName}</h1>
      <span className="job_research">{job}</span>
    </div>
  );
}

export default LeftSideHeader;
