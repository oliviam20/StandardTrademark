import React, { memo } from "react";
import Heading from "../Heading/Heading";
import Logo from "../Logo/Logo";
import "./Header.scss";

const Header = () => (
  <header className="headerWrapper fadeIn">
    <Logo />
    <Heading text="Standard Tradmark Registration Service Ltd" />
    <Heading text="標準商標事務有限公司" />
  </header>
);

export default memo(Header);
