import React, { memo } from 'react';
import PropTypes from 'prop-types';
import SubHeading from '../SubHeading/SubHeading';
import Paragraph from '../Paragraph/Paragraph';

import './Description.scss';

const Description = ({
  classes,
  title,
  text
}) => {
  let paraText;
  if (typeof text !== 'string') {
    if (typeof text[0] === 'string') {
      paraText = text.map((string, index) => <Paragraph key={index} text={string} />);
    } else {
      paraText = text.map((obj, index) => (
        <div key={index}>
          <Paragraph text={obj.class} />
          <Paragraph text={obj.description} />
        </div>
      ))
    }
  } else {
    paraText = <Paragraph text={text} />;
  }
  const classArr = classes.length > 0 && classes.map((obj, index) => (
    <div className="classesWrapper" key={index}>
      <Paragraph text={`${obj.class}`} />
      <Paragraph text={obj.description} />
    </div>
  )) 
  return (
    <>
      <SubHeading text={title} />
      {paraText}
      {classArr}
    </>
  )
};

Description.defaultProps = {
  classes: [],
  title: ''
};

Description.propTypes = {
  classes: PropTypes.array,
  title: PropTypes.string
};

export default memo(Description);
