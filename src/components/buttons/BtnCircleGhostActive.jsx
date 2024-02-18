import { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { PiCameraPlus } from 'react-icons/pi';
import { PiCameraPlusFill } from 'react-icons/pi';

export const BtnCircleGhostActive = ({
  disabled,
  icon,
  activeIcon,
  ariaLabel,
  isToggle,
  alertNum,
  size,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [alerts, setAlerts] = useState(true);

  const onClick = () => {
    setIsActive(!isActive);
    if (!isActive && alertNum !== 0) {
      setAlerts(false);
    }
  };

  return (
    <button
      onClick={onClick}
      className={cn('btn--circle btn--ghost', `btn--${size}`, {
        'btn--active': isActive,
      })}
      disabled={disabled}
      aria-label={isActive ? ariaLabel.active : ariaLabel.default}
    >
      {isToggle ? (
        <i className="btn__icon">{isActive ? activeIcon : icon}</i>
      ) : (
        <i className="btn__icon">{icon}</i>
      )}
      {alertNum !== 0 && alerts && (
        <span className="btn__alerts">{alertNum}</span>
      )}
    </button>
  );
};

BtnCircleGhostActive.propTypes = {
  size: PropTypes.oneOf(['medium', 'small']),
  disabled: PropTypes.bool,
  isToggle: PropTypes.bool,
  icon: PropTypes.element,
  activeIcon: PropTypes.element,
  ariaLabel: PropTypes.object.isRequired,
  alertNum: PropTypes.number,
};

BtnCircleGhostActive.defaultProps = {
  size: 'medium',
  disabled: false,
  isToggle: false,
  icon: <PiCameraPlus />,
  activeIcon: <PiCameraPlusFill />,
  ariaLabel: {
    default: '만들기',
    active: '만들기 활성',
  },
  alertNum: 0,
};
