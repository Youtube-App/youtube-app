import React from 'react';
import { ProfileBtn } from '../../../components/buttons/ProfileBtn';
import { VideoChannelName } from '../../../components/common/VideoChannelName';
import { UploadTime } from '../../../components/common/UploadTime';
import { VideoViews } from '../../../components/common/VIdeoVIews';
import { VideoThumbnail } from '../../../components/common/VideoThumbnail';
import { VideoTitle } from '../../../components/common/VideoTitle';
import { VideoDuration } from 'components/common/VideoDuration';
import { DefaultDropdown } from 'components/dropdowns/DefaultDropdown';
import { BtnCircleGhost } from 'components/buttons/BtnCircleGhost';
import { AiOutlineMore } from 'react-icons/ai';
import { IoArrowUndoOutline, IoFlagOutline } from 'react-icons/io5';
import { GoCircleSlash } from 'react-icons/go';
import { SlMinus } from 'react-icons/sl';

export const VideoItem = () => {
  const replyDropdown = [
    {
      type: 'menu',
      icon: '',
      label: '현재 재생 목록에 추가',
    },
    {
      type: 'menu',
      icon: '',
      label: '나중에 볼 동영상에 저장',
    },
    {
      type: 'menu',
      icon: '',
      label: '재생목록에 저장',
    },
    {
      type: 'menu',
      icon: '',
      label: '오프라인 저장',
    },
    {
      type: 'menu',
      icon: <IoArrowUndoOutline />,
      label: '공유',
    },
    {
      type: 'bar',
    },
    {
      type: 'menu',
      icon: <GoCircleSlash />,
      label: '관심 없음',
    },
    {
      type: 'menu',
      icon: <SlMinus />,
      label: '채널 추천 안함',
    },
    {
      type: 'menu',
      icon: <IoFlagOutline />,
      label: '신고',
    },
  ];
  return (
    <div className="main__video-container">
      <div className="main__video-thumbnail">
        <VideoThumbnail />
        <VideoDuration />
      </div>
      <div className="main__video-details">
        <ProfileBtn />
        <div className="main__video-desc">
          <VideoTitle />
          <VideoChannelName isLink />
          <div className="main__video-count">
            <VideoViews />
            <UploadTime />
          </div>
        </div>
        <div className="related__video-dropdown">
          <DefaultDropdown
            size={'medium'}
            list={replyDropdown}
          >
            <BtnCircleGhost icon={<AiOutlineMore />} />
          </DefaultDropdown>
        </div>
      </div>
    </div>
  );
};
