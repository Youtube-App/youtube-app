import React from 'react';
import PropTypes from 'prop-types';
import { IoMdArrowDropdown } from 'react-icons/io';

export const BtnRoundGhostBlue = ({ icon, label }) => {
  return (
    <button className="btn__round-ghost-blue">
      {icon && <i className="btn__round-ghost-blue-icon">{icon}</i>}
      <span className="btn__round-ghost-blue-label">{label}</span>
    </button>
  );
};

BtnRoundGhostBlue.propTypes = {
  hasIcon: PropTypes.bool.isRequired,
  icon: PropTypes.element,
  label: PropTypes.string,
};

BtnRoundGhostBlue.defaultProps = {
  icon: <IoMdArrowDropdown />,
  label: '답글 7개',
};