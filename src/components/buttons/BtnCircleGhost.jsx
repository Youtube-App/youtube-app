import { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { PiCameraPlus } from 'react-icons/pi';
import { PiCameraPlusFill } from 'react-icons/pi';

export const BtnCircleGhost = ({
  disabled,
  icon,
  activeIcon,
  ariaLabel,
  isToggle,
  hasAlerts,
  alertNum,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [alerts, setAlerts] = useState(true);

  const onClick = () => {
    setIsActive(!isActive);
    if (!isActive && hasAlerts) {
      setAlerts(false);
    }
  };

  return (
    <button
      onClick={onClick}
      className={cn('btn__circle-ghost', {
        'btn__circle-ghost--active': isActive,
      })}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {
        isToggle ? (
          <i className="btn__circle-ghost-icon">
            {isActive ? activeIcon : icon}
          </i>
        ) : (
          <i className="btn__circle-ghost-icon">{icon}</i>
        )

        // <i className="btn__circle-ghost-icon">
        //   {isToggle && isActive ? activeIcon : icon}
        // </i>
      }
      {hasAlerts && alerts && (
        <span className="btn__circle-ghost-alerts">{alertNum}</span>
      )}
    </button>
  );
};

BtnCircleGhost.propTypes = {
  disabled: PropTypes.bool,
  isToggle: PropTypes.bool,
  icon: PropTypes.element,
  activeIcon: PropTypes.element,
  ariaLabel: PropTypes.string.isRequired,
  alertNum: PropTypes.number,
  hasAlerts: PropTypes.bool,
};

BtnCircleGhost.defaultProps = {
  disabled: false,
  isToggle: false,
  icon: <PiCameraPlus />,
  activeIcon: <PiCameraPlusFill />,
  ariaLabel: '만들기',
  hasAlerts: false,
  // alertNum: 4,
};
