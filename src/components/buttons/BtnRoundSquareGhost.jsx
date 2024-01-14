import React from 'react';
import PropTypes from 'prop-types';
import { PiHouseThin } from 'react-icons/pi';

export const BtnRoundSquareGhost = ({ hasIcon, icon, label }) => {
  return (
    <button className="btn__round-square-ghost">
      {hasIcon && <i className="btn__round-square-ghost-icon">{icon}</i>}
      <span className="btn__round-square-ghost-label">{label}</span>
    </button>
  );
};

BtnRoundSquareGhost.propTypes = {
  hasIcon: PropTypes.bool.isRequired,
  icon: PropTypes.element,
  label: PropTypes.string,
};

BtnRoundSquareGhost.defaultProps = {
  hasIcon: true,
  icon: <PiHouseThin />,
  label: '홈',
};
