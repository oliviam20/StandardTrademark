import React, { memo } from "react"
import Heading from "../Heading/Heading";
import Logo from "../Logo/Logo";
import "./Layout.scss";

const Layout = () => {
  return (
    <section className="companyWrapper">
      <Logo />
      <Heading white text="Standard Trademark Registration Service Ltd" />
      <Heading white text="標準商標事務有限公司" />
    </section>
  )
}

export default memo(Layout);
