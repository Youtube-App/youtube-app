import React from 'react';
import PropTypes from 'prop-types';
import { IoMdArrowDropdown } from 'react-icons/io';

export const BtnRoundGhostBlue = ({ hasIcon, icon, label }) => {
  return (
    <button className="btn__round-ghost-blue">
      {hasIcon && <i className="btn__round-ghost-blue-icon">{icon}</i>}
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
  hasIcon: true,
  icon: <IoMdArrowDropdown />,
  label: '답글 7개',
};
