import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export const BtnRoundGray = ({ forClick, iconPrepend, iconAppend, label }) => {
  const [isSelected, setIsSelected] = useState(false);

  const onClick = () => {
    if (forClick) setIsSelected(!isSelected);
  };

  return (
    <button
      onClick={() => onClick()}
      className={cn('btn__round-gray', {
        'btn__round-gray--active': isSelected,
      })}
      type="button"
    >
      {iconPrepend && <i className="btn__round-gray-icon">{iconPrepend}</i>}
      <span className="btn__round-gray-label">{label}</span>
      {iconAppend && <i className="btn__round-gray-icon">{iconAppend}</i>}
    </button>
  );
};

BtnRoundGray.propTypes = {
  forClick: PropTypes.bool.isRequired,
  iconPrepend: PropTypes.element,
  iconAppend: PropTypes.element,
  label: PropTypes.string,
};

BtnRoundGray.defaultProps = {
  forClick: false,
  iconPrepend: null,
  iconAppend: null,
  label: '채널 공유',
};
