import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './LanguageSelect.scss';

const LanguageSelect = ({
  activeLang,
  lang,
  onHandleClick
}) => {
  const buttonClasses = cx({
    languageBtn: true,
    active: activeLang === lang
  });
  return (
    <button
      className={buttonClasses}
      data-language={lang}
      type="button"
      onClick={onHandleClick}
    >
      {lang}
    </button>
  )
};

LanguageSelect.defaultProps = {
  activeLang: 'english',
  language: 'english',
  onHandleClick: null
};

LanguageSelect.propTypes = {
  activeLang: PropTypes.string,
  language: PropTypes.string,
  onHandleClick: PropTypes.func
};

export default memo(LanguageSelect);
