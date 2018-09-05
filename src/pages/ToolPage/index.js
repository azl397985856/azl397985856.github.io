import React from "react";

import "./style.scss";

const ToolPage = (props, context) => {
  return (
    <div className="tool-page">
      <div className="tool-page-item">
        <div className="tool-page-item-title">DEPENDENCY</div>
        <ul className="tool-page-item-list">
          <li>
            <a href="https://npm.anvaka.com/#/view/2d/uiw">npm graph</a>
          </li>
        </ul>
      </div>
      <div className="tool-page-item">
        <div className="tool-page-item-title">DEBUG</div>
        <ul className="tool-page-item-list">
          <li>
            <a href="https://www.apkmirror.com/apk/google-inc/chrome/chrome-40-0-2214-109-7-release/chrome-40-0-2214-109-android-apk-download/">
              download chrome
            </a>
          </li>
          <li>
            <a href="https://ie.icoa.cn/">UA Detector</a>
          </li>
        </ul>
      </div>
      <div className="tool-page-item">
        <div className="tool-page-item-title">REGEX</div>
        <ul className="tool-page-item-list">
          <li>
            <a href="https://regexper.com/">Regular expression visualizer</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ToolPage;
