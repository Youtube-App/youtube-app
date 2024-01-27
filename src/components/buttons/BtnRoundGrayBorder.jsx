import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const BtnRoundGrayBorder = ({
  forClick,
  iconPrepend,
  iconAppend,
  label,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const onClick = () => {
    if (forClick) setIsSelected(!isSelected);
  };

  return (
    <button
      onClick={() => onClick()}
      className="btn__round btn__round-gray-border"
      type="button"
    >
      {iconPrepend && <i className="btn__icon">{iconPrepend}</i>}
      <span className="btn__round-gray-label">{label}</span>
      {iconAppend && <i className="btn__icon">{iconAppend}</i>}
    </button>
  );
};

BtnRoundGrayBorder.propTypes = {
  forClick: PropTypes.bool.isRequired,
  iconPrepend: PropTypes.element,
  iconAppend: PropTypes.element,
  label: PropTypes.string,
};

BtnRoundGrayBorder.defaultProps = {
  forClick: false,
  iconPrepend: null,
  iconAppend: null,
  label: '채널 공유',
};
