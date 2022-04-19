import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cx from "classnames";
import "./Paragraph.scss";

const Paragraph = ({
  italic,
  noMargin,
  text
}) => {
  const textClasses = cx({
    italic,
    noMargin,
  });

  return <p className={textClasses}>{text}</p>
}

Paragraph.defaultProps = {
  italic: false,
  noMargin: false,
  text: ''
};

Paragraph.propTypes = {
  italic: PropTypes.bool,
  noMargin: PropTypes.bool,
  text: PropTypes.string
};

export default memo(Paragraph);
