import React from "react";
import PropTypes from "prop-types";

import "./socialButton.css";

const SocialButton = ({ socialLink, iconClass }) => {
  return (
    <>
      <a
        href={socialLink}
        target="_blank"
        rel="noopener noreferrer"
        className="socialButton_a"
      >
        <i className={iconClass} />
      </a>
    </>
  );
};

SocialButton.propTypes = {
  socialLink: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
};

export default SocialButton;
