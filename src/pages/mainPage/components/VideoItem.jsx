import React from 'react';
// import PropTypes from 'prop-types';
import { ProfileBtn } from '../../../components/buttons/ProfileBtn';
import { VideoChannelName } from '../../../components/common/VideoChannelName';
import { UploadTime } from '../../../components/common/UploadTime';
import { VideoViews } from '../../../components/common/VIdeoVIews';
import { VideoThumbnail } from '../../../components/common/VideoThumbnail';
import { VideoTitle } from '../../../components/common/VideoTitle';
// import { Link } from 'react-router-dom';

export const VideoItem = () => {
  return (
    <div className="main__video-container">
      <div className="main__video-thumbnail">
        <VideoThumbnail />
      </div>
      <div className="main__video-details">
        <div
          className="profile-icon"
          // to={`/channel/:${channelId}`}
        >
          <ProfileBtn />
        </div>
        <div className="main__video-desc">
          <VideoTitle />
          {/* <Link to={`/channel2/${channelId2}`}> */}
          <VideoChannelName />
          {/* </Link> */}
          <div className="main__video-count">
            <VideoViews />
            <UploadTime />
          </div>
        </div>
      </div>
    </div>
  );
};

// VideoItem.propTypes = {
//   // story: PropTypes.object,
//   // channelId: PropTypes.string,
//   // channelId2: PropTypes.string,
// };

VideoItem.defaultProps = {
  parameters: {
    reactRouter: {
      routerPath: '/channel',
      routerState: { channelId: 'dfdf' },
    },
  },
  // story: {
  //   parameters: {
  //     routePath: '/main/:channelId',
  //     routeParams: {
  //       channelId: '1234',
  //     },
  //   },
  // },
  // parameters: {
  //   reactRouter: reactRouterParameters({
  //     location: {
  //       pathParams: {
  //         channelId: 42,
  //         videoId: 43,
  //       },
  //       searchParams: { tab: 'activityLog' },
  //       state: { fromPage: 'homePage' },
  //     },
  //     routing: {
  //       path: '/users/:channelId',
  //       handle: 'Profile',
  //     },
  //   }),
  // },
};

// http://localhost:6006/?path=/story/pages-mainpage-components-videoitem--primary
// http://localhost:6006/?path=/story/pages-mainpage-components-videoitem--primary
// http://localhost:6006/?path=/story/pages-mainpage-components-videoitem--primary
