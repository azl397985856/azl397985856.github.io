import React from "react";
import PropTypes from "prop-types";
import ScrollToNext from "@components/ScrollToNext";
import "./style.scss";

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>关于我</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              我是一个对技术充满兴趣的小程序员。擅长<span className="highlight">
                JavaScript
              </span>
              和 <span className="highlight">nodejs.</span>
            </p>

            <p>除了我的本职工作外</p>

            <p>
              我还对
              <span className="highlight">docker</span>，
              <span className="highlight">机器学习</span>，
              <span className="highlight">自动化</span>
              等感兴趣
            </p>

            <p>
              目前就职于<span className="highlight">兑吧科技网络有限公司</span>
            </p>
            <p className="text-emoji" style={{ color: colorPrimary }}>
              \ (•◡•) /
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
