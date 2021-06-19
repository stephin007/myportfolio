import React from "react";

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
