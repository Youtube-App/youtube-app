import React from 'react';
import PropTypes from 'prop-types';
import { ProfileBtn } from 'components/buttons/ProfileBtn';
import { Player } from '@lottiefiles/react-lottie-player';
import thumbLast from 'json/thumbs_last.json';

export const VideoTitle = ({ title, creator, subscriber, likes }) => {
  return (
    <div className="video__title-wrapper">
      <div className="video__title-container">{title}</div>
      <div className="video__summary-container">
        <div className="video__creator-section">
          <ProfileBtn size="medium" />
          <div className="video__creator-info">
            <div className="creator__name">{creator}</div>
            <div className="subscriber__number">구독자 {subscriber}명</div>
          </div>
        </div>
        <div className="video__reaction-section">{likes}</div>
      </div>
      <div className="thumbs">
        <Player
          src={thumbLast}
          autoplay
          keepLastFrame={true}
          style={{ height: '100px', width: '100px' }}
        ></Player>
      </div>
    </div>
  );
};

VideoTitle.propTypes = {
  title: PropTypes.string,
  creator: PropTypes.string,
  subscriber: PropTypes.string,
  likes: PropTypes.string,
};

VideoTitle.defaultProps = {
  title: '고양이 전용 에스테틱 ASMR 7탄',
  creator: '곰돌이 숭늉이',
  subscriber: '29.7만',
  likes: '33만',
};
