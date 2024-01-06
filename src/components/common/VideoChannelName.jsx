import React from 'react';
import PropTypes from 'prop-types';

export const VideoChannelName = ({ size, videoChannelName }) => {
  return (
    <>
      <a
        className={`video__channel-name ${
          size && `video__channel-name--${size}`
        }`}
        href="https://www.youtube.com/@tgijcamp"
      >
        {videoChannelName}
      </a>
    </>
  );
};

VideoChannelName.propTypes = {
  size: PropTypes.oneOf(['large', 'medium', 'small']).isRequired,
  videoChannelName: PropTypes.string.isRequired,
};

VideoChannelName.defaultProps = {
  size: 'large',
  videoChannelName: '태계일주 베이스캠프',
};
