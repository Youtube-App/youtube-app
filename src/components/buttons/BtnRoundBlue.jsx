import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export const BtnRoundBlue = ({ size, forClick, icon, label, disabled }) => {
  const [isSelected, setIsSelected] = useState(false);

  const onClick = () => {
    if (forClick) setIsSelected(!isSelected);
  };
  return (
    <button
      type="button"
      className={cn('btn--round btn--blue', `btn--${size}`, {
        'btn--active': isSelected,
      })}
      disabled={disabled}
      onClick={() => onClick()}
    >
      {icon && <i className="btn__icon">{icon}</i>}
      <span className="btn__label">{label}</span>
    </button>
  );
};

BtnRoundBlue.propTypes = {
  size: PropTypes.oneOf(['medium']),
  forClick: PropTypes.bool.isRequired,
  icon: PropTypes.element,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

BtnRoundBlue.defaultProps = {
  size: 'medium',
  forClick: false,
  icon: null,
  label: '채널 공유',
  disabled: false,
};
