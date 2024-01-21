import React from 'react';
import PropTypes from 'prop-types';
import { VideoChannelName } from 'components/common/VideoChannelName';
import { UploadTime } from 'components/common/UploadTime';
import { VideoViews } from 'components/common/VIdeoVIews';
import { VideoThumbnail } from 'components/common/VideoThumbnail';
import { VideoTitle } from 'components/common/VideoTitle';
import { ProfileBtn } from 'components/buttons/ProfileBtn';
import { SimpleBadge } from 'components/badge/SimpleBadge';
import { VideoDuration } from 'components/common/VideoDuration';

export const VideoItem = ({ txt }) => {
  return (
    <div className="search__video-container">
      <div className="search__video-thumbnail">
        <VideoThumbnail />
        <VideoDuration />
      </div>
      <div className="search__video-desc">
        <VideoTitle />
        <div className="search__video-count">
          <VideoViews />
          <UploadTime />
        </div>
        <div className="search__channel-info">
          <ProfileBtn />
          <VideoChannelName />
        </div>
        <div className="search__video-txt">{txt}</div>
        <SimpleBadge label={'새 동영상'} />
      </div>
      {/* <div className="search__video-details"></div> */}
    </div>
  );
};

VideoItem.propTypes = {
  txt: PropTypes.string,
};

VideoItem.defaultProps = {
  txt: '누구보다 바게트에 진심이었던 빠니바게트를 위한 헌정 영상.',
};
