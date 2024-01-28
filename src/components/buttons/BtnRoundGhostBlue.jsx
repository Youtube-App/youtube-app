import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export const BtnRoundGhostBlue = ({ size, icon, label }) => {
  return (
    <button className={cn('btn--round btn--ghost-blue', `btn--${size}`)}>
      {icon && <i className="btn__icon">{icon}</i>}
      <span className="btn__label">{label}</span>
    </button>
  );
};

BtnRoundGhostBlue.propTypes = {
  size: PropTypes.oneOf(['medium']),
  icon: PropTypes.element,
  label: PropTypes.string,
};

BtnRoundGhostBlue.defaultProps = {
  size: 'medium',
  icon: null,
  label: '답글 7개',
};
