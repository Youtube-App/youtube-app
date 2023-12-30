import React from 'react';
import PropTypes from 'prop-types';
import { PiHouseThin } from 'react-icons/pi';

export const BtnRoundSecondary = ({ hasIcon, icon, label }) => {
  return (
    <button className="btn__round-secondary">
      {hasIcon && <i className="btn__round-secondary-icon">{icon}</i>}
      <span className="btn__round-secondary-label">{label}</span>
    </button>
  );
};

BtnRoundSecondary.propTypes = {
  hasIcon: PropTypes.bool.isRequired,
  icon: PropTypes.element,
  label: PropTypes.string,
};

BtnRoundSecondary.defaultProps = {
  hasIcon: true,
  icon: <PiHouseThin />,
  label: '홈',
};
