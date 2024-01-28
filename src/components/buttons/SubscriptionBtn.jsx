import { Player } from '@lottiefiles/react-lottie-player';
import subscription from 'json/subscription.json';
import { useRef, useState } from 'react';
// import { useRef } from 'react';
// import { useRef } from 'react';
import cn from 'classnames';
import { SlArrowDown } from 'react-icons/sl';

export const SubscriptionBtn = () => {
  const subscriptionLottie = useRef(null);
  const [label, setlabel] = useState('구독');
  const [isActive, SetIsActive] = useState(false);

  const onClick = () => {
    setlabel('구독중');
    SetIsActive(true);
    subscriptionLottie.current.play();
  };

  return (
    <button
      className={cn('subscription__btn', {
        'subscription__btn-active': isActive,
      })}
      onClick={onClick}
    >
      <div className="subscription__btn-lottie-wrap">
        <div className="subscription__btn-lottie">
          <Player
            autoplay={isActive}
            src={subscription}
            ref={subscriptionLottie}
          />
        </div>
      </div>
      <span className="subscription__btn-text">{label}</span>
      <i className="subscription__btn-icon">
        <SlArrowDown />
      </i>
    </button>
  );
};
