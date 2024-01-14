import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const VideoChannelName = ({ channelId, videoChannelName }) => {
  return (
    <>
      <Link
        to={channelId ? `/channel2/${channelId}` : '#'}
        className={'video__channel-name'}
      >
        {videoChannelName}
      </Link>
    </>
  );
};

VideoChannelName.propTypes = {
  videoChannelName: PropTypes.string.isRequired,
  channelId: PropTypes.string.isRequired,
};

VideoChannelName.defaultProps = {
  videoChannelName: '태계일주 베이스캠프',
  parameters: {
    reactRouter: {
      routerPath: '/channel2',
      routerState: { channelId: 'dfdf' },
    },
  },
};
