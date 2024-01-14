import React from 'react';
import PropTypes from 'prop-types';
import { IoMdArrowDropdown } from 'react-icons/io';

export const BtnCircleGhostBlue = ({ icon }) => {
  return (
    <button className="btn__circle-ghost-blue">
      {icon && <i className="btn__circle-ghost-blue-icon">{icon}</i>}
    </button>
  );
};

BtnCircleGhostBlue.propTypes = {
  icon: PropTypes.element,
};

BtnCircleGhostBlue.defaultProps = {
  icon: <IoMdArrowDropdown />,
};
