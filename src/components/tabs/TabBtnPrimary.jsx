import React from 'react';
import PropTypes from 'prop-types';

export const TabBtnPrimary = ({ state, label }) => {
  // const a = 'c';
  // const type = type;
  return (
    <button className={`tab__btn-primary ${state && `tab__btn--${state}`}`}>
      {label}
    </button>
  );
};

TabBtnPrimary.propTypes = {
  state: PropTypes.oneOf(['active', 'disabled', '']),
  label: PropTypes.string,
};

TabBtnPrimary.defaultProps = {
  state: '',
  label: '전체',
};
