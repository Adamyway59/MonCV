/* eslint-disable react/prop-types */
import "./style.css";

function PersonalInformation(props) {
  const { placeOfBirth, dateOfBirth, phoneNumber, email, livingPlace } = props;
  return (
    <div className="personal-information">
      <span className="birth-infos">{`${placeOfBirth}, ${dateOfBirth}`}</span>
      <span className="phone-number">{phoneNumber}</span>
      <span className="email">{email}</span>
      <span className="living-place">{livingPlace}</span>
    </div>
  );
}

export default PersonalInformation;
