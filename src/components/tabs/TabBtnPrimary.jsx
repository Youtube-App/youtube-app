import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
// import { SwiperComponent } from 'components/common/SwiperComponent';

export const TabBtnPrimary = ({ label }) => {
  const [isSelected, setIsSelected] = useState(0);

  const onClick = (idx) => {
    setIsSelected(idx);
  };

  return (
    <div className="tab__btn-primary-wrap">
      {label.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => onClick(index)}
            className={cn('tab__btn-primary', {
              'tab__btn-primary--active': index === isSelected,
            })}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

TabBtnPrimary.propTypes = {
  label: PropTypes.array.isRequired,
};

TabBtnPrimary.defaultProps = {
  label: ['홈', '동영상', '라이브'],
  spaceBetween: 6,
};
