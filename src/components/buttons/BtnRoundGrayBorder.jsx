import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export const BtnRoundGrayBorder = ({
  size,
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
      className={cn('btn--round btn--gray-border', `btn--${size}`)}
      type="button"
    >
      {iconPrepend && <i className="btn__icon">{iconPrepend}</i>}
      <span className="btn__label">{label}</span>
      {iconAppend && <i className="btn__icon">{iconAppend}</i>}
    </button>
  );
};

BtnRoundGrayBorder.propTypes = {
  size: PropTypes.oneOf(['medium']),
  forClick: PropTypes.bool.isRequired,
  iconPrepend: PropTypes.element,
  iconAppend: PropTypes.element,
  label: PropTypes.string,
};

BtnRoundGrayBorder.defaultProps = {
  size: 'medium',
  forClick: false,
  iconPrepend: null,
  iconAppend: null,
  label: '채널 공유',
};
