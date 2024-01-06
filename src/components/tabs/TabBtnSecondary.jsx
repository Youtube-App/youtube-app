import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export const TabBtnSecondary = ({ label }) => {
  const [isSelected, setIsSelected] = useState(0);

  const onClick = (idx) => {
    setIsSelected(idx);
  };

  return label.map((item, idx) => {
    return (
      <button
        key={idx}
        onClick={() => onClick(idx)}
        className={cn('tab__btn-secondary', {
          'tab__btn-secondary--active': idx === isSelected,
        })}
      >
        {item}
      </button>
    );
  });
};

TabBtnSecondary.propTypes = {
  label: PropTypes.array.isRequired,
};

TabBtnSecondary.defaultProps = {
  label: ['전체', '음악', '동물'],
};
