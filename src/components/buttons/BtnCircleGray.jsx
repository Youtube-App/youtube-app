import React from 'react';
import PropTypes from 'prop-types';
import { HiMiniMicrophone } from 'react-icons/hi2';

export const BtnCircleGray = ({ disabled, icon }) => {
  return (
    <button
      className={'btn__circle-gray'}
      disabled={disabled}
    >
      <i className="btn__circle-gray-icon">{icon}</i>
    </button>
  );
};

BtnCircleGray.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.element,
};

BtnCircleGray.defaultProps = {
  disabled: false,
  icon: <HiMiniMicrophone />,
};
