import PropTypes from 'prop-types';
import { useState } from 'react';
import { PiCameraPlus } from 'react-icons/pi';
import { PiCameraPlusFill } from 'react-icons/pi';

export const BtnCircleSecondary = ({ state, icon, activeIcon }) => {
  // const [isActive] = useState(state);
  const [states, setState] = useState(state);
  return (
    <button
      onClick={() => setState(BtnCircleSecondary.propTypes.state)}
      className={`btn__circle-secondary ${
        state && `btn__circle-secondary--${states}`
      }`}
    >
      <i className="btn__circle-secondary-icon">
        {state === 'active' ? activeIcon : icon}
      </i>
    </button>
  );
};

BtnCircleSecondary.propTypes = {
  state: PropTypes.oneOf(['active', 'disabled', '']),
  icon: PropTypes.element,
  activeIcon: PropTypes.element,
};

BtnCircleSecondary.defaultProps = {
  state: '',
  icon: <PiCameraPlus />,
  activeIcon: <PiCameraPlusFill />,
};
