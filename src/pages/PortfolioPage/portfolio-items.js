import React from "react";

export default [
  {
    name: "typy",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">我的第一本书</div>
        <div className="portfolio-item__desc">
          内容覆盖前后端分离，模块化和组件化，流程自动化，页面加载性能优化等。
        </div>
        <div className="portfolio-item__icon">
          <i className="fab fa-html5" />
          <i className="fab fa-css3" />
        </div>
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/azl397985856/automate-everything"
          >
            地址
          </a>
        </div>
      </div>
    )
  },
  {
    name: "dev-landing-page",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">朱雀</div>
        <div className="portfolio-item__desc">前端监控平台</div>
        <div className="portfolio-item__icon">
          <i className="fab fa-js" />
          <i className="fab fa-npm" />
        </div>
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/azl397985856/zhuque"
          >
            地址
          </a>
        </div>
      </div>
    )
  },
  {
    name: "react-redux-boilerplate",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">小门神</div>
        <div className="portfolio-item__desc">一站式前端自动检测平台</div>
        <div className="portfolio-item__icon">
          <i className="fab fa-terminal" />
          <i className="fab fa-js" />
        </div>
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/azl397985856/qy"
          >
            地址
          </a>
        </div>
      </div>
    )
  }
];
