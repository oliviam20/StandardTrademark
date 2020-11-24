import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Btn.scss';

const Btn = ({
  activeText,
  dataText,
  text,
  onHandleClick,
  styles
}) => {
  const buttonClasses = cx({
    languageBtn: true,
    active: activeText === dataText
  });

  return (
    <button
      className={buttonClasses}
      data-text={dataText}
      type="button"
      onClick={onHandleClick}
      style={styles}
    >
      {text}
    </button>
  )
};

Btn.defaultProps = {
  activeText: 'english',
  text: 'english',
  onHandleClick: null
};

Btn.propTypes = {
  activeText: PropTypes.string,
  text: PropTypes.string,
  onHandleClick: PropTypes.func
};

export default memo(Btn);
