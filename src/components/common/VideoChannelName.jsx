import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const VideoChannelName = ({ isLink, channelId, videoChannelName }) => {
  return (
    <>
      {isLink ? (
        <Link
          to={channelId ? `/channel/${channelId}` : '#'}
          className={'video__channel-name'}
        >
          {videoChannelName}
        </Link>
      ) : (
        <div className={'video__channel-name'}>{videoChannelName}</div>
      )}
    </>
  );
};

VideoChannelName.propTypes = {
  isLink: PropTypes.bool.isRequired,
  videoChannelName: PropTypes.string.isRequired,
  channelId: PropTypes.string.isRequired,
};

VideoChannelName.defaultProps = {
  isLink: true,
  videoChannelName: '태계일주 베이스캠프',
  parameters: {
    reactRouter: {
      routePath: '/channel/:channelId',
      routeParams: { channelId: 'df23' },
    },
  },
};
