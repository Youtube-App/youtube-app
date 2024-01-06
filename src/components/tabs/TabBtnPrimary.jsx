import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export const TabBtnPrimary = ({ label }) => {
  const [isSelected, setIsSelected] = useState(0);

  const onClick = (idx) => {
    setIsSelected(idx);
  };

  return label.map((item, idx) => {
    return (
      <button
        key={idx}
        onClick={() => onClick(idx)}
        className={cn('tab__btn-primary', {
          'tab__btn-primary--active': idx === isSelected,
        })}
      >
        {item}
      </button>
    );
  });
};

TabBtnPrimary.propTypes = {
  label: PropTypes.array.isRequired,
};

TabBtnPrimary.defaultProps = {
  label: ['홈', '동영상', '라이브'],
};
