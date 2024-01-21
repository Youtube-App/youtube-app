import React from 'react';
import { ProfileBtn } from '../../../components/buttons/ProfileBtn';
import { VideoChannelName } from '../../../components/common/VideoChannelName';
import { UploadTime } from '../../../components/common/UploadTime';
import { VideoViews } from '../../../components/common/VIdeoVIews';
import { VideoThumbnail } from '../../../components/common/VideoThumbnail';
import { VideoTitle } from '../../../components/common/VideoTitle';
import { VideoDuration } from 'components/common/VideoDuration';

export const VideoItem = () => {
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
      </div>
    </div>
  );
};