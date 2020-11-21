import React, { memo } from 'react';
import Heading from '../Heading/Heading';
import './Header.scss';

const Header = () => (
  <header className="headerWrapper fadeIn">
    <Heading text="Standard Tradmark Registration Service Ltd" />
    <Heading text="標準商標事務有限公司" />
  </header>
);

export default memo(Header);
