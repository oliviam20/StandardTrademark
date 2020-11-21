import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './Heading.scss';

const Heading = ({ text }) => <h1>{text}</h1>;

Heading.defaultProps = {
  text: ''
};

Heading.propTypes = {
  text: PropTypes.string
};

export default memo(Heading);
