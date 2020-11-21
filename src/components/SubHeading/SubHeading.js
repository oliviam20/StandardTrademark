import React, { memo } from 'react';
import PropTypes from 'prop-types';

const SubHeading = ({ text }) => <h2>{text}</h2>;

SubHeading.defaultProps = {
  text: ''
};

SubHeading.propTypes = {
  text: PropTypes.string
};

export default memo(SubHeading);
