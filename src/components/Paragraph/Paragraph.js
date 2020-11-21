import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({ text }) => <p>{text}</p>;

Paragraph.defaultProps = {
  text: ''
};

Paragraph.propTypes = {
  text: PropTypes.string
};

export default memo(Paragraph);
