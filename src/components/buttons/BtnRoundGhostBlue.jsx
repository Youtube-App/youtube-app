import React from 'react';
import PropTypes from 'prop-types';
// import { IoMdArrowDropdown } from 'react-icons/io';

export const BtnRoundGhostBlue = ({ icon, label }) => {
  return (
    <button className="btn__round btn__round-ghost-blue">
      {icon && <i className="btn__icon">{icon}</i>}
      <span className="btn__label">{label}</span>
    </button>
  );
};

BtnRoundGhostBlue.propTypes = {
  icon: PropTypes.element,
  label: PropTypes.string,
};

BtnRoundGhostBlue.defaultProps = {
  icon: null,
  label: '답글 7개',
};
