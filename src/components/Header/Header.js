import React, { memo } from "react";
import PropTypes from 'prop-types';
import Heading from "../Heading/Heading";
import Logo from "../Logo/Logo";
import Scroll from "../Scroll/Scoll";
import "./Header.scss";

const Header = ({ onClickHandler, white }) => (
  <header className="headerWrapper fadeIn">
    <Logo />
    <Heading white={white} text="Standard Trademark Registration Service Ltd" />
    <Heading white={white} text="標準商標事務有限公司" />
    <div className="scrollWrapper" onClick={onClickHandler}>
      <Scroll />
    </div>
  </header>
);

Header.defaultProps = {
  white: false
};

Header.propTypes = {
  white: PropTypes.bool
};

export default memo(Header);
