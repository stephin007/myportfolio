import React from "react";
// import PropTypes from "prop-types";

const ResumeButton = ({ buttonText }) => {
  return (
    <>
      <a
        href={require("../../../assets/resume.pdf")}
        download="Stephin's Resume"
        className="bn"
        target="_blank"
        rel="noopener noreferrer"
      >
        {buttonText}
      </a>
    </>
  );
};

export default ResumeButton;
