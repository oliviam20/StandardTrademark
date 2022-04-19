import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cx from "classnames";
import './Heading.scss';

const Heading = ({ text, white }) => {
  const headingClasses = cx({
    white,
  });

  return <h1 className={headingClasses}>{text}</h1>
}

Heading.defaultProps = {
  text: ''
};

Heading.propTypes = {
  text: PropTypes.string,
  white: PropTypes.bool
};

export default memo(Heading);
