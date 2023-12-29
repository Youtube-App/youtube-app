import React from 'react';
import PropTypes from 'prop-types';
import { PiShareFatLight } from 'react-icons/pi';

export const BtnRoundPrimary = ({ state, hasIcon, icon, label }) => {
  return (
    <button
      className={`btn__round-primary ${state && 'btn__round-primary-active'}`}
      type="button"
    >
      {hasIcon && <i className="btn_-round-primary-icon">{icon}</i>}
      <span>{label}</span>
    </button>
  );
};

BtnRoundPrimary.propTypes = {
  state: PropTypes.oneOf(['active', 'disabled']),
  hasIcon: PropTypes.bool,
  icon: PropTypes.element,
  label: PropTypes.string,
};

BtnRoundPrimary.defaultProps = {
  hasIcon: true,
  icon: <PiShareFatLight />,
  label: '채널 공유',
};
