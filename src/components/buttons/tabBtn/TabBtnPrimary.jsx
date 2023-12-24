import React from 'react';
import PropTypes from 'prop-types';

export const TabBtnPrimary = ({ state, label }) => {
  // const type = type;
  return (
    <button className={`tab__btn-primary${state &&  `--${state}`}`}>{label}</button>
  )
}

TabBtnPrimary.propTypes = {
  state: PropTypes.oneOf(['active', 'disabled', '']),
}

TabBtnPrimary.defaultProps = {
  state: '',
};