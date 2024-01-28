import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export const BtnRoundGhost = ({ size, forClick, icon, label }) => {
  const [isSelected, setIsSelected] = useState(false);

  const onClick = () => {
    if (forClick) setIsSelected(!isSelected);
  };
  return (
    <button
      onClick={() => onClick()}
      className={cn('btn--round btn--ghost', `btn--${size}`, {
        'btn--active': isSelected,
      })}
      type="button"
    >
      {icon && <i className="btn__icon">{icon}</i>}
      <span className="btn__label">{label}</span>
    </button>
  );
};

BtnRoundGhost.propTypes = {
  size: PropTypes.oneOf(['medium']),
  forClick: PropTypes.bool.isRequired,
  icon: PropTypes.element,
  label: PropTypes.string,
};

BtnRoundGhost.defaultProps = {
  size: 'medium',
  forClick: false,
  icon: null,
  label: '채널 공유',
};
