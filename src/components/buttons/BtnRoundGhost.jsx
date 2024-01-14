import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { PiShareFatLight } from 'react-icons/pi';
import cn from 'classnames';

export const BtnRoundGhost = ({ forClick, hasIcon, icon, label }) => {
  const [isSelected, setIsSelected] = useState(false);

  const onClick = () => {
    if (forClick) setIsSelected(!isSelected);
  };
  return (
    <button
      onClick={() => onClick()}
      className={cn('btn__round-ghost', {
        'btn__round-ghost--active': isSelected,
      })}
      type="button"
    >
      {hasIcon && <i className="btn__round-ghost-icon">{icon}</i>}
      <span className="btn__round-ghost-label">{label}</span>
    </button>
  );
};

BtnRoundGhost.propTypes = {
  forClick: PropTypes.bool.isRequired,
  hasIcon: PropTypes.bool,
  icon: PropTypes.element,
  label: PropTypes.string,
};

BtnRoundGhost.defaultProps = {
  forClick: false,
  hasIcon: true,
  icon: <PiShareFatLight />,
  label: '채널 공유',
};
