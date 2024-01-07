import React from 'react';
import PropTypes from 'prop-types';

export const VideoChannelName = ({ videoChannelName }) => {
  return (
    <>
      <a
        className={'video__channel-name'}
        href="https://www.youtube.com/@tgijcamp"
      >
        {videoChannelName}
      </a>
    </>
  );
};

VideoChannelName.propTypes = {
  videoChannelName: PropTypes.string.isRequired,
};

VideoChannelName.defaultProps = {
  videoChannelName: '태계일주 베이스캠프',
};
