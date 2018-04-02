import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const SocialIcons = (props, context) => {
  const { theme: { colorPrimary } } = context;

  return (
    <div className="social-icons animate-icons">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/azl397985856"
        style={{ color: colorPrimary }}
      >
        <i className="fab fa-github" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://weibo.com/3925119176/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1"
        style={{ color: colorPrimary }}
      >
        <i className="fab fa-weibo" />
      </a>
    </div>
  );
};

SocialIcons.contextTypes = {
  theme: PropTypes.any
};

export default SocialIcons;
