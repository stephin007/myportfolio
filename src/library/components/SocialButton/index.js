import React from "react";
import styled from "styled-components";

const StyledSocialButton = styled.a`
  height: 35px;
  width: 35px;
  margin-left: 10px;
  background-color: goldenrod;
  display: inline-block;
  text-align: center;
  line-height: 35px;
  color: black;
  border-radius: 50%;
  text-decoration: none;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;

  &:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

const SocialButton = ({ socialLink, iconClass }) => {
  return (
    <>
      <StyledSocialButton
        href={socialLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className={iconClass} />
      </StyledSocialButton>
    </>
  );
};

export default SocialButton;
