import React from 'react';
import PropTypes from 'prop-types';

export const TabBtnSecondary = ({ state, label }) => {
  return (
    <button className={`tab__btn-secondary${state && `--${state}`}`}>
      {label}
    </button>
  );
};

TabBtnSecondary.propTypes = {
  state: PropTypes.oneOf(['active', 'disabled', '']),
  label: PropTypes.string,
};

TabBtnSecondary.defaultProps = {
  state: '',
  label: '버튼',
};
