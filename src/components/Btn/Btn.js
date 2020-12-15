import React, { memo } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./Btn.scss";

const Btn = ({ activeText, dataText, text, onHandleClick, styles, v2 }) => {
  const buttonClasses = cx({
    languageBtn: !v2,
    active: !v2 && activeText === dataText,
    btn2: v2,
    active2: v2 && activeText === dataText,
  });

  if (v2) {
    return (
      <button
        className={buttonClasses}
        data-text={dataText}
        type="button"
        onClick={onHandleClick}
        style={styles}
      >
        <svg>
          <rect x="0" y="0" fill="none" width="100%" height="100%" />
        </svg>
        {text}
      </button>
    );
  }

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
  );
};

Btn.defaultProps = {
  activeText: "english",
  text: "english",
  onHandleClick: null,
  v2: false,
};

Btn.propTypes = {
  activeText: PropTypes.string,
  text: PropTypes.string,
  onHandleClick: PropTypes.func,
  v2: PropTypes.bool,
};

export default memo(Btn);
