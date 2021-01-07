import React, { memo } from "react";
import Heading from "../Heading/Heading";
import Logo from "../Logo/Logo";
import Scroll from "../Scroll/Scoll";
import "./Header.scss";

const Header = ({ onClickHandler }) => (
  <header className="headerWrapper fadeIn">
    <Logo />
    <Heading text="Standard Trademark Registration Service Ltd" />
    <Heading text="標準商標事務有限公司" />
    <div className="scrollWrapper" onClick={onClickHandler}>
      <Scroll />
    </div>
  </header>
);

export default memo(Header);
