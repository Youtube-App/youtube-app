import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { PiHouseThin } from 'react-icons/pi';
import cn from 'classnames';

export const BtnRoundSquareGhostActive = ({
  size,
  icon,
  activeIcon,
  label,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isAlert, setIsAlert] = useState(true);

  const onClick = () => {
    if (!isActive) {
      setIsActive(true);
    }
    if (!isActive) {
      setIsAlert(false);
    }
  };

  return (
    <button
      onClick={onClick}
      className={cn('btn--round-square btn--ghost', `btn--${size}`, {
        'btn--active': isActive,
      })}
    >
      {icon && <i className="btn__icon">{isActive ? activeIcon : icon}</i>}
      <span className="btn__label">{label}</span>
      {isAlert && <span className="btn__alert"></span>}
    </button>
  );
};

BtnRoundSquareGhostActive.propTypes = {
  size: PropTypes.oneOf(['medium']),
  icon: PropTypes.element,
  activeIcon: PropTypes.element,
  label: PropTypes.string,
};

BtnRoundSquareGhostActive.defaultProps = {
  size: 'medium',
  icon: <PiHouseThin />,
  activeIcon: <PiHouseThin />,
  label: '홈',
};
