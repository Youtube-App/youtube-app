import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export const BtnRoundGhost = ({ forClick, icon, label }) => {
  const [isSelected, setIsSelected] = useState(false);

  const onClick = () => {
    if (forClick) setIsSelected(!isSelected);
  };
  return (
    <button
      onClick={() => onClick()}
      className={cn('btn__round btn__round-ghost', {
        'btn__round-ghost--active': isSelected,
      })}
      type="button"
    >
      {icon && <i className="btn__icon">{icon}</i>}
      <span className="btn__label">{label}</span>
    </button>
  );
};

BtnRoundGhost.propTypes = {
  forClick: PropTypes.bool.isRequired,
  icon: PropTypes.element,
  label: PropTypes.string,
};

BtnRoundGhost.defaultProps = {
  forClick: false,
  icon: null,
  label: '채널 공유',
};
