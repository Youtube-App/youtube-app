import { VideoChannelName } from 'components/common/VideoChannelName';
import { UploadTime } from 'components/common/UploadTime';
import { VideoViews } from 'components/common/VIdeoVIews';
import { VideoThumbnail } from 'components/common/VideoThumbnail';
import { VideoTitle } from 'components/common/VideoTitle';
import { ProfileBtn } from 'components/buttons/ProfileBtn';
import { SimpleBadge } from 'components/badge/SimpleBadge';
import { VideoDuration } from 'components/common/VideoDuration';
import { CommonDesc } from 'components/common/CommonDesc';

export const VideoItem = () => {
  return (
    <div className="search__video-container">
      <div className="search__video-thumbnail">
        <VideoThumbnail />
        <VideoDuration time={'5:20'} />
      </div>
      <div className="search__video-desc">
        <VideoTitle />
        <div className="search__video-count">
          <VideoViews videoViews={'5.6만'} />
          <UploadTime uploadTime={'4시간'} />
        </div>
        <div className="search__channel-info">
          <ProfileBtn
            isLink
            to={'channelId'}
          />
          <VideoChannelName videoChannelName={'태계일주 베이스캠프'} />
        </div>
        <CommonDesc />
        <SimpleBadge label={'새 동영상'} />
      </div>
      {/* <div className="search__video-details"></div> */}
    </div>
  );
};
