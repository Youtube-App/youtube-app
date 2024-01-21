import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export const BtnRoundBlue = ({ forClick, icon, label, disabled }) => {
  const [isSelected, setIsSelected] = useState(false);

  const onClick = () => {
    if (forClick) setIsSelected(!isSelected);
  };
  return (
    <button
      type="button"
      className={cn('btn__round btn__round-blue', {
        'btn__round-blue--active': isSelected,
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
  forClick: PropTypes.bool.isRequired,
  icon: PropTypes.element,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

BtnRoundBlue.defaultProps = {
  forClick: false,
  icon: null,
  label: '채널 공유',
  disabled: false,
};
