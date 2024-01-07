import { ProfileBtn } from '../../../components/buttons/ProfileBtn';
import { VideoChannelName } from '../../../components/common/VideoChannelName';
import { UploadTime } from '../../../components/common/UploadTime';
import { VideoViews } from '../../../components/common/VIdeoVIews';
import { VideoThumbnail } from '../../../components/common/VideoThumbnail';
import { VideoTitle } from '../../../components/common/VideoTitle';
import { Link } from 'react-router-dom';

export const VideoItem = () => {
  return (
    <div className="main__video-container">
      <div className="main__video-thumbnail">
        <VideoThumbnail />
      </div>
      <div className="main__video-details">
        <Link className="profile-icon">
          <ProfileBtn />
        </Link>
        <div className="main__video-desc">
          <VideoTitle />
          <VideoChannelName />
          <div className="main__video-count">
            <VideoViews />
            <UploadTime />
          </div>
        </div>
      </div>
    </div>
  );
};
