import React from 'react';
import PropTypes from 'prop-types';
import { ProfileBtn } from 'components/buttons/ProfileBtn';
import { BtnEmotion } from 'components/buttons/BtnEmotion';
import { BtnRoundBlack } from 'components/buttons/BtnRoundBlack';
import { BtnRoundGray } from 'components/buttons/BtnRoundGray';
import { BtnCircleGray } from 'components/buttons/BtnCircleGray';
import { DefaultDropdown } from 'components/dropdowns/DefaultDropdown';
import { LiaDownloadSolid } from 'react-icons/lia';
import { PiScissors } from 'react-icons/pi';
import { IoFlagOutline } from 'react-icons/io5';
import { BiListPlus } from 'react-icons/bi';
import { PiShareFatLight } from 'react-icons/pi';
import { IoIosMore } from 'react-icons/io';

export const VideoTitle = ({ title, creator, subscriber, likes }) => {
  const moreDropdown = [
    {
      type: 'menu',
      icon: <LiaDownloadSolid />,
      label: '오프라인 저장',
    },
    {
      type: 'menu',
      icon: <PiScissors />,
      label: '클립',
    },
    {
      type: 'menu',
      icon: <BiListPlus />,
      label: '저장',
    },
    {
      type: 'menu',
      icon: <IoFlagOutline />,
      label: '신고',
    },
  ];

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
          <div className="video__subscribe-btn">
            <BtnRoundBlack label="구독" />
          </div>
        </div>
        <div className="video__reaction-section">
          <BtnEmotion likes={likes} />
          <div className="share-btn">
            <BtnRoundGray
              iconPrepend={<PiShareFatLight />}
              label="공유"
            />
          </div>
          <div className="more-btn">
            <DefaultDropdown
              size={'medium'}
              list={moreDropdown}
            >
              <BtnCircleGray
                size="small"
                icon={<IoIosMore />}
              />
            </DefaultDropdown>
          </div>
        </div>
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
