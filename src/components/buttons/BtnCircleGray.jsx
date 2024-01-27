import React from 'react';
import PropTypes from 'prop-types';
import { HiMiniMicrophone } from 'react-icons/hi2';
import cn from 'classnames';

export const BtnCircleGray = ({ disabled, icon, size }) => {
  return (
    <button
      className={cn('btn__circle-gray', `btn__circle-gray--${size}`)}
      disabled={disabled}
    >
      <i className="btn__circle-gray-icon">{icon}</i>
    </button>
  );
};

BtnCircleGray.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.element,
  size: PropTypes.string,
};

BtnCircleGray.defaultProps = {
  disabled: false,
  icon: <HiMiniMicrophone />,
  string: '',
};
