import React from 'react';
import PropTypes from 'prop-types';
// import { useState } from 'react';
import { ProfileBtn } from 'components/buttons/ProfileBtn';
import { BtnRoundGrayBorder } from 'components/buttons/BtnRoundGrayBorder';
import { AiOutlinePlaySquare } from 'react-icons/ai';
import { LuUserSquare } from 'react-icons/lu';
import { BtnRoundBlue } from 'components/buttons/BtnRoundBlue';

export const VideoIntroduce = ({
  views,
  openDate,
  videoContents,
  creator,
  subscriber,
}) => {
  return (
    <div className="video__introduce-wrapper">
      <div className="video__introduce-container">
        <div className="video__view-section">
          <span className="video__views">조회수 {views}회</span>
          <span className="video__open">최초 공개: {openDate}</span>
          <span className="video__tag">#영상태그 </span>
        </div>
        <div className="video__introduce-section">{videoContents}</div>
        <div className="video__script-section">
          <div className="video__title-script">스크립트</div>
          <div className="video__script-message">
            스크립트를 보면서 시청하세요.
          </div>
          <BtnRoundBlue label="스크립트 보기" />
        </div>
      </div>
      <div className="channel__introduce-container">
        <div className="channel__introduce-section">
          <ProfileBtn size="xlarge" />
          <div className="channel__content">
            <div className="channel__name">{creator}</div>
            <div className="channel__subscribe-number">
              구독자 {subscriber}명
            </div>
          </div>
        </div>
        <div className="channel__introduce-btn">
          <BtnRoundGrayBorder
            iconPrepend={<AiOutlinePlaySquare />}
            label="동영상"
          />
          <BtnRoundGrayBorder
            iconPrepend={<LuUserSquare />}
            label="정보"
          />
        </div>
      </div>
    </div>
  );
};

VideoIntroduce.propTypes = {
  views: PropTypes.string,
  openDate: PropTypes.string,
  videoContents: PropTypes.string,
  creator: PropTypes.string,
  subscriber: PropTypes.string,
};

VideoIntroduce.defaultProps = {
  views: '10,000,000,000',
  openDate: '2023. 12. 17',
  videoContents: '안녕하세요. 구독자님들 영상 소개 글입니다.',
  creator: '곰돌이 숭늉이',
  subscriber: '920',
};
