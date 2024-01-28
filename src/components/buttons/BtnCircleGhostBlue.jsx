import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { IoMdArrowDropdown } from 'react-icons/io';

export const BtnCircleGhostBlue = ({ size, icon }) => {
  return (
    <button className={cn('btn--circle btn--ghost-blue', `btn--${size}`)}>
      {icon && <i className="btn__icon">{icon}</i>}
    </button>
  );
};

BtnCircleGhostBlue.propTypes = {
  size: PropTypes.oneOf(['medium', 'small']),
  icon: PropTypes.element,
};

BtnCircleGhostBlue.defaultProps = {
  size: 'medium',
  icon: <IoMdArrowDropdown />,
};
