import React, { memo } from 'react';
import './Logo.scss';
import logo from './stmlogo.jpg';

const Logo = () => <div className="logoWrapper"><img className="logo" loading="lazy" src={logo} alt="standard trademark logo" /></div>;

export default memo(Logo);
