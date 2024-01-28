import React from 'react';
import PropTypes from 'prop-types';
import { HiMiniMicrophone } from 'react-icons/hi2';
import cn from 'classnames';

export const BtnCircleGray = ({ disabled, icon, size }) => {
  return (
    <button
      className={cn('btn--circle btn--gray', `btn--${size}`)}
      disabled={disabled}
    >
      <i className="btn__icon">{icon}</i>
    </button>
  );
};

BtnCircleGray.propTypes = {
  size: PropTypes.oneOf(['medium', 'small']),
  disabled: PropTypes.bool,
  icon: PropTypes.element,
};

BtnCircleGray.defaultProps = {
  size: 'medium',
  disabled: false,
  icon: <HiMiniMicrophone />,
};
