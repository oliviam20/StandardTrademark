import React, { memo } from "react";
import "./Logo.scss";
import logo from "./logo-transparent.png";

const Logo = () => (
  <div className="logoWrapper">
    <img
      className="logo"
      loading="lazy"
      src={logo}
      alt="standard trademark logo"
    />
  </div>
);

export default memo(Logo);
