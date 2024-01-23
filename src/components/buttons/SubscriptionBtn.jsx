import { Player } from '@lottiefiles/react-lottie-player';
import subscription from 'json/subscription.json';
import { useEffect, useRef, useState } from 'react';
// import { useRef } from 'react';
// import { useRef } from 'react';

export const SubscriptionBtn = () => {
  const subscriptionBtnTxt = useRef();
  const subscriptionLottie = useRef();
  const ad = document.getElementsByClassName('subscription__btn-text');
  const width = ad.offsetWith;
  const [isInvisible, setIsInvisible] = useState(false);
  const [style, setStyle] = useState(width);
  // const txt = document.getElementsByClassName('subscription__btn-text');

  useEffect(() => {
    // console.log(width);
    setStyle(
      isInvisible
        ? subscriptionLottie.offsetWith
        : subscriptionBtnTxt.offsetWith,
    );
  }, [isInvisible, style]);

  const onClick = () => {
    console.log('click');
    setIsInvisible(true);
  };

  return (
    <button
      className="subscription__btn"
      onClick={onClick}
      style={{ width: `${style}px` }}
    >
      <div className="subscription__btn-wrap">
        <span
          className={`subscription__btn-text ${
            isInvisible ? 'subscription__btn-text-invisible' : ''
          }`}
          ref={subscriptionBtnTxt}
        >
          구독
        </span>
        <div
          className="subscription__btn-lottie-wrap"
          ref={subscriptionLottie}
        >
          <div className="subscription__btn-lottie">
            <Player
              autoplay
              src={subscription}
            />
          </div>
          <span className="subscription__btn-text">구독중</span>
        </div>
      </div>
    </button>
  );
};
