import React from 'react';
import PropTypes from 'prop-types';
import { PiHouseThin } from 'react-icons/pi';
import cn from 'classnames';

export const BtnRoundSquareGhost = ({ size, icon, label }) => {
  return (
    <button className={cn('btn--round-square btn--ghost', `btn--${size}`)}>
      {icon && <i className="btn__icon">{icon}</i>}
      <span className="btn__label">{label}</span>
    </button>
  );
};

BtnRoundSquareGhost.propTypes = {
  size: PropTypes.oneOf(['medium']),
  icon: PropTypes.element,
  label: PropTypes.string,
};

BtnRoundSquareGhost.defaultProps = {
  size: 'medium',
  icon: <PiHouseThin />,
  label: '홈',
};
