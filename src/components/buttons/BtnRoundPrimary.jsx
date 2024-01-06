import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { PiShareFatLight } from 'react-icons/pi';
import cn from 'classnames';

export const BtnRoundPrimary = ({ forClick, hasIcon, icon, label }) => {
  const [isSelected, setIsSelected] = useState(false);

  const onClick = () => {
    if (forClick) setIsSelected(!isSelected);
  };
  return (
    <button
      onClick={() => onClick()}
      className={cn('btn__round-primary', {
        'btn__round-primary--active': isSelected,
      })}
      type="button"
    >
      {hasIcon && <i className="btn__round-primary-icon">{icon}</i>}
      <span className="btn__round-primary-label">{label}</span>
    </button>
  );
};

BtnRoundPrimary.propTypes = {
  forClick: PropTypes.bool.isRequired,
  hasIcon: PropTypes.bool,
  icon: PropTypes.element,
  label: PropTypes.string,
};

BtnRoundPrimary.defaultProps = {
  forClick: false,
  hasIcon: true,
  icon: <PiShareFatLight />,
  label: '채널 공유',
};
