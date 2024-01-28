import PropTypes from 'prop-types';
import { VideoChannelName } from 'components/common/VideoChannelName';
import { UploadTime } from 'components/common/UploadTime';
import { VideoViews } from 'components/common/VIdeoVIews';
import { VideoThumbnail } from 'components/common/VideoThumbnail';
import { VideoTitle } from 'components/common/VideoTitle';
import { ProfileBtn } from 'components/buttons/ProfileBtn';
import { SimpleBadge } from 'components/badge/SimpleBadge';
import { VideoDuration } from 'components/common/VideoDuration';
import { CommonDesc } from 'components/common/CommonDesc';
import { DefaultDropdown } from 'components/dropdowns/DefaultDropdown';
import { BtnCircleGhost } from 'components/buttons/BtnCircleGhost';
import { AiOutlineMore } from 'react-icons/ai';
import { GoCircleSlash } from 'react-icons/go';
import { IoArrowUndoOutline } from 'react-icons/io5';
import { VscReport } from 'react-icons/vsc';
import cn from 'classnames';

export const VideoItem = ({ size }) => {
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
      icon: <GoCircleSlash />,
      label: '채널 추천 안함',
    },
    {
      type: 'menu',
      icon: <VscReport />,
      label: '의견 보내기',
    },
  ];

  return (
    <div
      className={cn(
        'related__video-container',
        `related__video-container--${size}`,
      )}
    >
      <div className="related__video-thumbnail">
        <VideoThumbnail size={size} />
        <VideoDuration time={'5:20'} />
      </div>
      <div className="related__video-desc">
        <VideoTitle />
        <div className="related__total-info">
          <div className="related__video-count">
            <VideoViews videoViews={'5.6만'} />
            <UploadTime uploadTime={'4시간'} />
          </div>
          <div className="related__channel-info">
            {size !== 'small' && (
              <ProfileBtn
                isLink
                to={'channelId'}
              />
            )}
            <VideoChannelName videoChannelName={'태계일주 베이스캠프'} />
          </div>
        </div>
        {size !== 'small' && (
          <div className="related__video-txt">
            <CommonDesc />
          </div>
        )}
        <SimpleBadge label={'새 동영상'} />
      </div>
      <div className="related__video-dropdown">
        <DefaultDropdown
          size={'medium'}
          list={replyDropdown}
        >
          <BtnCircleGhost icon={<AiOutlineMore />} />
        </DefaultDropdown>
      </div>
      {/* <div className="related__video-details"></div> */}
    </div>
  );
};

VideoItem.propTypes = {
  size: PropTypes.string,
};

VideoItem.defaultProps = {
  string: '',
};
