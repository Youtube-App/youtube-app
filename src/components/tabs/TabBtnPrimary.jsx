import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
// import { SwiperComponent } from 'components/common/SwiperComponent';

export const TabBtnPrimary = ({ label, onClick }) => {
  // const [isSelected, setIsSelected] = useState(0);

  // const onClick = (idx) => {
  //   setIsSelected(idx);
  // };

  useEffect(() => {
    console.log(label, 'labellabellabellabellabel');
  }, [label]);

  return (
    <div className="tab__btn-primary-wrap">
      <button
        className={cn('tab__btn-primary', {
          // 'tab__btn-primary--active': index === isSelected,
        })}
      >
        전체
      </button>
      {label?.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => onClick(item.id)}
            className={cn('tab__btn-primary', {
              // 'tab__btn-primary--active': index === isSelected,
            })}
          >
            {item.snippet.title}
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
