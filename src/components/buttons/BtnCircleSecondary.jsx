import PropTypes from 'prop-types';
import { useState } from 'react';
import cn from 'classnames';
import { PiCameraPlus } from 'react-icons/pi';
import { PiCameraPlusFill } from 'react-icons/pi';

export const BtnCircleSecondary = ({
  disabled,
  icon,
  activeIcon,
  ariaLabel,
  isToggle,
  // hasAlerts,
  // alertNum,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [hasAlerts, setHasAlerts] = useState(true);

  const onClick = () => {
    setIsActive(!isActive);
    if (isActive && hasAlerts) {
      setHasAlerts(false);
    }
  };

  return (
    <button
      onClick={onClick}
      className={cn('btn__circle-secondary', {
        'btn__circle-secondary--active': isActive,
      })}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {
        isToggle ? (
          <i className="btn__circle-secondary-icon">
            {isActive ? activeIcon : icon}
          </i>
        ) : (
          <i className="btn__circle-secondary-icon">{icon}</i>
        )

        // <i className="btn__circle-secondary-icon">
        //   {isToggle && isActive ? activeIcon : icon}
        // </i>
      }
      {/* {hasAlerts && (
        <span className="btn__circle-secondary-alerts">{alertNum}</span>
      )} */}
    </button>
  );
};

BtnCircleSecondary.propTypes = {
  disabled: PropTypes.bool,
  isToggle: PropTypes.bool,
  icon: PropTypes.element,
  activeIcon: PropTypes.element,
  ariaLabel: PropTypes.string.isRequired,
  alertNum: PropTypes.number,
};

BtnCircleSecondary.defaultProps = {
  disabled: false,
  isToggle: false,
  icon: <PiCameraPlus />,
  activeIcon: <PiCameraPlusFill />,
  ariaLabel: '만들기',
  alertNum: 4,
};
