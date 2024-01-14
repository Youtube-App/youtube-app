import React from 'react';
import PropTypes from 'prop-types';
import { IoMdArrowDropdown } from 'react-icons/io';

export const BtnRoundTertiary = ({ hasIcon, icon, label }) => {
  return (
    <button className="btn__round-tertiary">
      {hasIcon && <i className="btn__round-tertiary-icon">{icon}</i>}
      <span className="btn__round-tertiary-label">{label}</span>
    </button>
  );
};

BtnRoundTertiary.propTypes = {
  hasIcon: PropTypes.bool.isRequired,
  icon: PropTypes.element,
  label: PropTypes.string,
};

BtnRoundTertiary.defaultProps = {
  hasIcon: true,
  icon: <IoMdArrowDropdown />,
  label: '답글 7개',
};
