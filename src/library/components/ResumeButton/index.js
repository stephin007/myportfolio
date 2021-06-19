import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledResumeButton = styled.a`
  font-size: 16px;
  background-color: goldenrod;
  font-weight: 600;
  padding: 9px 27px;
  color: black;
  border-radius: 40px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  display: inline-block;
  white-space: nowrap;

  &:hover {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }
`;

const ResumeButton = ({ buttonText, download }) => {
  return (
    <>
      <StyledResumeButton
        href={require("../../../assets/resume.pdf")}
        download={download === "true" ? "Stephin's Resume" : null}
        className="bn"
        target="_blank"
        rel="noopener noreferrer"
      >
        {buttonText}
      </StyledResumeButton>
    </>
  );
};

ResumeButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  download: PropTypes.bool.isRequired,
};

export default ResumeButton;
