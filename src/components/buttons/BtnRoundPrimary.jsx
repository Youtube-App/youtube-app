import React from 'react';
import PropTypes from 'prop-types';
import { PiShareFatLight } from 'react-icons/pi';

export const BtnRoundPrimary = ({ state, hasIcon, icon, label }) => {
  return (
    <button
      className={`btn__round-primary ${
        state && `btn__round-primary--${state}`
      }`}
      type="button"
    >
      {hasIcon && <i className="btn__round-primary-icon">{icon}</i>}
      <span className="btn__round-primary-label">{label}</span>
    </button>
  );
};

BtnRoundPrimary.propTypes = {
  state: PropTypes.oneOf(['active', 'disabled', '']),
  hasIcon: PropTypes.bool,
  icon: PropTypes.element,
  label: PropTypes.string,
};

BtnRoundPrimary.defaultProps = {
  state: '',
  hasIcon: true,
  icon: <PiShareFatLight />,
  label: '채널 공유',
};
