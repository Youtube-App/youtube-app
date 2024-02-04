import { BtnCircleGhost } from 'components/buttons/BtnCircleGhost';
import React, { useLayoutEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';
import PropTypes from 'prop-types';

register();

export const SwiperComponent = ({
  // slidesPerView,
  children,
  componentName,
  // spaceBetween,
}) => {
  const swiperElRef = useRef(null);
  useLayoutEffect(() => {
    const swiperContainer = swiperElRef.current;
    const params = {
      navigation: {
        prevEl: `.${componentName}-prev`,
        nextEl: `.${componentName}-next`,
      },
      className: 'swiper-container',
      slidesPerView: 'auto',
      spaceBetween: 12,
    };
    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <div className={`swiper swiper-${componentName}`}>
      {/* <div className={`swiper-button swiper-button-prev ${componentName}-prev`}>
        <i></i>
      </div> */}
      <BtnCircleGhost className={` ${componentName}-prev`} />
      <swiper-container
        ref={swiperElRef}
        init="false"
        // slides-per-view="auto"
        // space-between="12"
      >
        {children.map((child, index) => {
          return (
            <swiper-slide
              class="swiper-slide"
              key={index}
            >
              {child}
            </swiper-slide>
          );
        })}
      </swiper-container>
      <BtnCircleGhost className={` ${componentName}-next`} />
    </div>
  );
};

SwiperComponent.propTypes = {
  // slidesPerView: PropTypes.number,
  componentName: PropTypes.string,
  children: PropTypes.array,
  // spaceBetween: PropTypes.number,
};

SwiperComponent.defaultProps = {
  // slidesPerView: 'auto',
  componentName: 'tab-primary',
  // spaceBetween: 12,
};
