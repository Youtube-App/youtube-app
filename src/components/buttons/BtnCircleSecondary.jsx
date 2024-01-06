import PropTypes from 'prop-types';
import { useState } from 'react';
import cn from 'classnames';
import { PiCameraPlus } from 'react-icons/pi';
import { PiCameraPlusFill } from 'react-icons/pi';

export const BtnCircleSecondary = ({ disabled, icon, activeIcon }) => {
  const [isActive, setIsActive] = useState();

  const onClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      onClick={onClick}
      className={cn('btn__circle-secondary', {
        'btn__circle-secondary--active': isActive,
      })}
      disabled={disabled}
    >
      <i className="btn__circle-secondary-icon">
        {isActive ? activeIcon : icon}
      </i>
    </button>
  );
};

BtnCircleSecondary.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.element,
  activeIcon: PropTypes.element,
};

BtnCircleSecondary.defaultProps = {
  disabled: false,
  icon: <PiCameraPlus />,
  activeIcon: <PiCameraPlusFill />,
};
