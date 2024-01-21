import React from 'react';
import PropTypes from 'prop-types';
import { PiHouseThin } from 'react-icons/pi';

export const BtnRoundSquareGhost = ({ icon, label }) => {
  return (
    <button className="btn__round btn__round-square-ghost">
      {icon && <i className="btn__icon">{icon}</i>}
      <span className="btn__label">{label}</span>
    </button>
  );
};

BtnRoundSquareGhost.propTypes = {
  icon: PropTypes.element,
  label: PropTypes.string,
};

BtnRoundSquareGhost.defaultProps = {
  icon: <PiHouseThin />,
  label: '홈',
};
