import React from 'react';
import PropTypes from 'prop-types';
import { HiMiniMicrophone } from 'react-icons/hi2';

export const BtnCirclePrimary = ({ disabled, icon }) => {
  return (
    <button
      className={'btn__circle-primary'}
      disabled={disabled}
    >
      <i className="btn__circle-primary-icon">{icon}</i>
    </button>
  );
};

BtnCirclePrimary.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.element,
};

BtnCirclePrimary.defaultProps = {
  disabled: false,
  icon: <HiMiniMicrophone />,
};
